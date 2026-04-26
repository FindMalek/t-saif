import { Resend } from "resend"

import { env } from "@/lib/env"
import type { ContactFormData } from "@/lib/validations/contact"

export const resend = new Resend(env.RESEND_API_KEY)

// FROM must be a verified Resend sender domain in production
// During development: use onboarding@resend.dev and a verified TO address
const FROM = "Saif Portfolio <onboarding@resend.dev>"
const TO = "malekgarahellalbus@gmail.com"

export async function sendContactEmail(data: ContactFormData) {
  return resend.emails.send({
    from: FROM,
    to: TO,
    subject: `New message from ${data.firstName} ${data.lastName}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ""}
      ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  })
}
