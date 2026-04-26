import Link from "next/link"

import { ProjectCard } from "@/components/landing/project-card"
import { projects } from "@/lib/data/projects"

export function Projects() {
  const featured = projects.slice(0, 4)

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          Selected Work
        </h2>
        <Link
          href="/work"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          All work →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
