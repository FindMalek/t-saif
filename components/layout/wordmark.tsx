import Link from "next/link"

import { cn } from "@/lib/utils"

interface WordmarkProps {
  className?: string
}

export function Wordmark({ className }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-sans text-2xl font-semibold tracking-tight text-foreground",
        className
      )}
    >
      saif.
    </Link>
  )
}
