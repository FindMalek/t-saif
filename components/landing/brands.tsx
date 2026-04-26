"use client"

const BRANDS = ["Canal+", "Netflix France", "Vice Media", "Arte", "France 24"]

export function Brands() {
  const doubled = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS]

  return (
    <section className="border-y border-border py-8 overflow-hidden">
      <div
        className="flex w-max gap-16"
        style={{ animation: "var(--animate-marquee)" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {doubled.map((brand, i) => (
          <span
            key={i}
            className="shrink-0 font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  )
}
