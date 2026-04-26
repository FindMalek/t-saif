import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { PixelImage } from "@/components/ui/pixel-image"
import { HeroText } from "@/components/landing/hero-text"

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center gap-12 overflow-hidden px-6 py-16">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <FlickeringGrid className="h-full w-full" />
      </div>

      {/* Text — centered */}
      <div className="relative z-10 flex flex-col items-center gap-5 text-center">
        <HeroText />
      </div>

      {/* Image — centered below text */}
      <div className="relative z-10 flex justify-center">
        <PixelImage
          src="/saif.webp"
          grid="8x8"
          grayscaleAnimation
          pixelFadeInDuration={1200}
          maxAnimationDelay={1400}
          colorRevealDelay={1500}
        />
      </div>
    </section>
  )
}
