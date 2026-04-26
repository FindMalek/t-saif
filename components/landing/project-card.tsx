"use client"

import { useRef, useState } from "react"

import Text3DFlip from "@/components/ui/text-3d-flip"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function play() {
    videoRef.current?.play().catch(() => {})
    setPlaying(true)
  }

  function pause() {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setPlaying(false)
  }

  function handleTap() {
    playing ? pause() : play()
  }

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={play}
      onMouseLeave={pause}
      onClick={handleTap}
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
          aria-hidden="true"
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
          className="shrink-0 font-mono text-xs uppercase tracking-widest text-muted-foreground"
          textClassName="text-muted-foreground"
          flipTextClassName="text-foreground"
        >
          View
        </Text3DFlip>
      </div>
    </article>
  )
}
