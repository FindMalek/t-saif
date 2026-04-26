import { Backlight } from "@/components/ui/backlight"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { PixelImage } from "@/components/ui/pixel-image"
import { HeroText } from "@/components/landing/hero-text"

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center gap-10 overflow-hidden px-6 py-16 md:flex-row md:gap-16 md:py-0">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <FlickeringGrid className="h-full w-full" />
      </div>

      {/* Cinematic image — PixelImage mosaic animation */}
      <div className="relative z-10 shrink-0">
        <PixelImage
          src="/placeholders/saif.jpg"
          grid="8x8"
          grayscaleAnimation
          pixelFadeInDuration={1200}
          maxAnimationDelay={1400}
          colorRevealDelay={1500}
        />
      </div>

      {/* Text with Backlight glow behind it */}
      <div className="relative z-10 flex-1">
        <Backlight blur={48} className="w-full">
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            <HeroText />
          </div>
        </Backlight>
      </div>
    </section>
  )
}
