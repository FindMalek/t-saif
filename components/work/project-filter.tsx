"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import type { ProjectCategory } from "@/lib/types"

type FilterOption = ProjectCategory | "All"

const FILTERS: FilterOption[] = [
  "All",
  "Commercial",
  "Documentary",
  "Music Video",
  "Short Film",
  "Corporate",
]

interface ProjectFilterProps {
  active: FilterOption
  onChange: (filter: FilterOption) => void
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={cn(
            "shrink-0 rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            active === filter
              ? "border-foreground bg-foreground text-background"
              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

export type { FilterOption }
