import type { Metadata } from "next"

import { Footer } from "@/components/landing/footer"
import { ProjectGrid } from "@/components/work/project-grid"

export const metadata: Metadata = {
  title: "Work — Saif Tarchoun",
  description: "A selection of films, commercials, and documentaries.",
}

export default function WorkPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="font-heading text-5xl font-bold md:text-6xl">Work</h1>
        <p className="mt-4 text-muted-foreground">
          Films, commercials, documentaries, and more.
        </p>

        <div className="mt-12">
          <ProjectGrid />
        </div>
      </div>
      <Footer />
    </>
  )
}
