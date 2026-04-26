import { Ratelimit } from "@upstash/ratelimit"

import { redis } from "@/lib/redis"

export const contactRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "1 h"),
  analytics: true,
})
