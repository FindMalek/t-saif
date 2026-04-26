"use client"

import Link from "next/link"

import { MagicCard } from "@/components/ui/magic-card"
import { NumberTicker } from "@/components/ui/number-ticker"
import { PulsatingButton } from "@/components/ui/pulsating-button"
import { VideoText } from "@/components/ui/video-text"
import { WarpBackground } from "@/components/ui/warp-background"

const STATS = [
  { value: 8, label: "Years of experience", suffix: "+" },
  { value: 120, label: "Projects delivered", suffix: "+" },
  { value: 30, label: "Clients worldwide", suffix: "+" },
  { value: 12, label: "Awards & recognitions", suffix: "" },
]

export function Cta() {
  return (
    <WarpBackground className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* VideoText headline */}
        <div className="mb-16 flex justify-center">
          <VideoText
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            autoPlay
            muted
            loop
            fontSize="14vw"
            fontFamily="var(--font-heading)"
            className="w-full"
          >
            FILM
          </VideoText>
        </div>

        {/* Stats grid */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ value, label, suffix }) => (
            <MagicCard
              key={label}
              className="flex flex-col items-center justify-center p-6 text-center"
            >
              <span className="font-heading text-4xl font-bold text-foreground">
                <NumberTicker value={value} />
                {suffix}
              </span>
              <span className="mt-2 text-xs text-muted-foreground uppercase tracking-widest">
                {label}
              </span>
            </MagicCard>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link href="/contact">
            <PulsatingButton>Start a project</PulsatingButton>
          </Link>
        </div>
      </div>
    </WarpBackground>
  )
}
