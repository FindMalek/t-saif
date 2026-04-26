export const runtime = "nodejs"

import { db } from "@/lib/db"
import { sendContactEmail } from "@/lib/email"
import { contactRatelimit } from "@/lib/rate-limit"
import { contactSchema } from "@/lib/validations/contact"

export async function POST(request: Request) {
  // Rate limiting
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "127.0.0.1"
    const { success } = await contactRatelimit.limit(ip)
    if (!success) {
      return Response.json({ error: "Too many requests" }, { status: 429 })
    }
  } catch (e) {
    console.warn("Rate limit check failed, proceeding:", e)
  }

  // Validation
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return Response.json(
      { error: "Validation failed", details: result.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  // Persist
  try {
    await db.contact.create({ data: result.data })
  } catch (e) {
    console.error("DB write failed:", e)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }

  // Email (non-blocking on failure)
  sendContactEmail(result.data).catch((e) =>
    console.error("Email send failed:", e)
  )

  return Response.json({ success: true }, { status: 201 })
}
