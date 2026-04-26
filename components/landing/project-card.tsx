"use client"

import { useRef } from "react"

import Text3DFlip from "@/components/ui/text-3d-flip"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  function handleMouseEnter() {
    videoRef.current?.play().catch(() => {})
  }

  function handleMouseLeave() {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media */}
      <div className="relative aspect-video overflow-hidden rounded-lg bg-card">
        <video
          ref={videoRef}
          src={project.videoUrl}
          preload="none"
          muted
          loop
          playsInline
          poster={project.thumbnailUrl}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <h3 className="font-heading text-base font-semibold text-foreground">
            {project.title}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {project.company} · {project.date}
          </p>
        </div>

        <Text3DFlip
          className="shrink-0 text-xs font-mono uppercase tracking-widest text-muted-foreground"
          textClassName="text-muted-foreground"
          flipTextClassName="text-foreground"
        >
          View
        </Text3DFlip>
      </div>
    </article>
  )
}
