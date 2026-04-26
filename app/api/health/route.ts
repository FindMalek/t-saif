export const runtime = "nodejs"

import { db } from "@/lib/db"
import { resend } from "@/lib/email"
import { env } from "@/lib/env"
import { redis } from "@/lib/redis"

export async function GET(request: Request) {
  // Auth
  const auth = request.headers.get("authorization")
  if (auth !== `Bearer ${env.HEALTH_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const [dbResult, redisResult, emailResult, contactFlowResult] =
    await Promise.allSettled([
      // DB ping
      db.$queryRaw`SELECT 1`,

      // Redis ping
      redis.ping(),

      // Resend test
      resend.emails.send({
        from: "health@findmalek.com",
        to: "delivered@resend.dev",
        subject: "Health check",
        html: "<p>Automated health check</p>",
      }),

      // Contact flow: write + delete
      (async () => {
        const record = await db.contact.create({
          data: {
            firstName: "Health",
            lastName: "Check",
            message: "Automated health check submission",
          },
        })
        await db.contact.delete({ where: { id: record.id } })
      })(),
    ])

  const checks = {
    db:
      dbResult.status === "fulfilled"
        ? "ok"
        : { error: String((dbResult as PromiseRejectedResult).reason) },
    redis:
      redisResult.status === "fulfilled"
        ? "ok"
        : { error: String((redisResult as PromiseRejectedResult).reason) },
    email:
      emailResult.status === "fulfilled"
        ? "ok"
        : { error: String((emailResult as PromiseRejectedResult).reason) },
    contactFlow:
      contactFlowResult.status === "fulfilled"
        ? "ok"
        : { error: String((contactFlowResult as PromiseRejectedResult).reason) },
  }

  const allOk = Object.values(checks).every((v) => v === "ok")

  return Response.json(
    { status: allOk ? "ok" : "degraded", ...checks, timestamp: new Date().toISOString() },
    { status: allOk ? 200 : 503 }
  )
}
