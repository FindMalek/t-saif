import { Brands } from "@/components/landing/brands"
import { Cta } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"
import { Hero } from "@/components/landing/hero"
import { Projects } from "@/components/landing/projects"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Cta />
      <Brands />
      <Projects />
      <Footer />
    </>
  )
}
