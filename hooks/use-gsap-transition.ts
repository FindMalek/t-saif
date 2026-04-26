"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function useGsapTransition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion || !containerRef.current) return

    let gsap: typeof import("gsap").gsap | undefined

    async function animate() {
      const mod = await import("gsap")
      gsap = mod.gsap

      gsap.from(containerRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.45,
        ease: "power2.out",
      })
    }

    animate()

    return () => {
      if (gsap && containerRef.current) {
        gsap.killTweensOf(containerRef.current)
      }
    }
  }, [pathname])

  return containerRef
}
