import type { Metadata } from "next"

import { ContactForm } from "@/components/contact/contact-form"
import { Footer } from "@/components/landing/footer"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"

export const metadata: Metadata = {
  title: "Contact — Saif Tarchoun",
  description: "Get in touch to discuss your next project.",
}

export default function ContactPage() {
  return (
    <>
      <div className="relative mx-auto max-w-2xl px-6 py-16">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <InteractiveGridPattern
            squares={[32, 32]}
            className="opacity-40"
          />
        </div>

        <div className="relative z-10">
          <h1 className="font-heading text-5xl font-bold md:text-6xl">
            Let&apos;s work together.
          </h1>
          <p className="mt-4 text-muted-foreground">
            Tell Saif about your project and he&apos;ll get back to you.
          </p>

          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
