"use client"

import { useGsapTransition } from "@/hooks/use-gsap-transition"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const ref = useGsapTransition()

  return (
    <div ref={ref} style={{ willChange: "opacity, transform" }}>
      {children}
    </div>
  )
}
