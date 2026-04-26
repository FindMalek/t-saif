"use client"

import { useState } from "react"

import { BlurFade } from "@/components/ui/blur-fade"
import { ProjectCard } from "@/components/landing/project-card"
import {
  ProjectFilter,
  type FilterOption,
} from "@/components/work/project-filter"
import { projects } from "@/lib/data/projects"

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All")

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <div>
      <ProjectFilter active={activeFilter} onChange={setActiveFilter} />

      <div
        key={activeFilter}
        className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project, i) => (
          <BlurFade key={project.id} delay={i * 0.08} inView>
            <ProjectCard project={project} />
          </BlurFade>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </div>
  )
}
