import { Backlight } from "@/components/ui/backlight"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { HeroText } from "@/components/landing/hero-text"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0">
        <FlickeringGrid className="h-full w-full" />
      </div>

      {/* Wide cinematic media */}
      <div className="relative z-10 w-full max-w-5xl">
        <Backlight blur={40} className="w-full">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-card">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-80"
              poster="/placeholders/hero.jpg"
            >
              {/* Replace with real reel */}
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </Backlight>
      </div>

      {/* Text overlay */}
      <div className="relative z-20 mt-12 flex flex-col items-center gap-4 text-center">
        <HeroText />
      </div>
    </section>
  )
}
