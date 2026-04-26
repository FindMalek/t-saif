"use client"

import { useState } from "react"

import { ConfettiButton } from "@/components/ui/confetti"
import { PulsatingButton } from "@/components/ui/pulsating-button"
import type { ContactFormData } from "@/lib/validations/contact"
import { contactSchema } from "@/lib/validations/contact"

type FieldErrors = Partial<Record<keyof ContactFormData, string>>

export function ContactForm() {
  const [values, setValues] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [serverError, setServerError] = useState("")

  function set(field: keyof ContactFormData) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }))
      if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setServerError("")

    const result = contactSchema.safeParse(values)
    if (!result.success) {
      const flat = result.error.flatten().fieldErrors
      setErrors(
        Object.fromEntries(
          Object.entries(flat).map(([k, v]) => [k, v?.[0]])
        ) as FieldErrors
      )
      return
    }

    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      })

      if (res.status === 429) {
        setServerError("Too many requests. Please try again later.")
        setStatus("error")
        return
      }
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        setServerError(body.error ?? "Something went wrong. Please try again.")
        setStatus("error")
        return
      }

      setStatus("success")
    } catch {
      setServerError("Network error. Please check your connection.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <ConfettiButton className="pointer-events-none opacity-0" />
        <p className="font-heading text-2xl font-bold">Message sent!</p>
        <p className="text-muted-foreground">
          Thanks for reaching out. Saif will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          label="First name"
          id="firstName"
          required
          value={values.firstName}
          onChange={set("firstName")}
          error={errors.firstName}
        />
        <Field
          label="Last name"
          id="lastName"
          required
          value={values.lastName}
          onChange={set("lastName")}
          error={errors.lastName}
        />
      </div>

      <Field
        label="Email"
        id="email"
        type="email"
        value={values.email ?? ""}
        onChange={set("email")}
        error={errors.email}
      />

      <Field
        label="Phone"
        id="phone"
        type="tel"
        value={values.phone ?? ""}
        onChange={set("phone")}
        error={errors.phone}
      />

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={values.message}
          onChange={set("message")}
          className="rounded-lg border border-input bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Tell Saif about your project..."
        />
        {errors.message && (
          <span role="alert" className="text-xs text-destructive">
            {errors.message}
          </span>
        )}
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-destructive">
          {serverError}
        </p>
      )}

      <div className="flex justify-end">
        <PulsatingButton
          type="submit"
          disabled={status === "loading"}
          className="px-8 py-3"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </PulsatingButton>
      </div>
    </form>
  )
}

interface FieldProps {
  label: string
  id: keyof ContactFormData
  required?: boolean
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

function Field({ label, id, required, type = "text", value, onChange, error }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="rounded-lg border border-input bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        placeholder={label}
      />
      {error && (
        <span role="alert" className="text-xs text-destructive">
          {error}
        </span>
      )}
    </div>
  )
}
