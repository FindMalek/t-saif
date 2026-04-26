"use client"

import { LineShadowText } from "@/components/ui/line-shadow-text"
import { TypingAnimation } from "@/components/ui/typing-animation"

export function HeroText() {
  return (
    <>
      <TypingAnimation
        as="p"
        words={["Filmmaker.", "Videographer.", "Editor."]}
        loop
        className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground"
        duration={80}
        pauseDelay={1800}
      />

      <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
        Saif{" "}
        <LineShadowText shadowColor="oklch(0.56 0.021 213.5)">
          Tarchoun
        </LineShadowText>
      </h1>

      <p className="max-w-md text-base text-muted-foreground md:text-lg">
        Crafting cinematic stories that move people — from concept to final cut.
      </p>
    </>
  )
}
