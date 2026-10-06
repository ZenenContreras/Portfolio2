import { Hero } from "@/components/home/Hero"
import { ProjectCarousel } from "@/components/home/ProjectCarousel"
import { Skills } from "@/components/home/Skills"
import { Socials } from "@/components/home/Socials"
import { useReveal } from "@/hooks/useReveal"

export function HomePage() {
  const scope = useReveal()

  return (
    <div ref={scope} className="page-stack">
      <div data-reveal>
        <Hero />
      </div>
      <div data-reveal>
        <ProjectCarousel />
      </div>
      <div data-reveal>
        <Skills />
      </div>
      <div data-reveal>
        <Socials />
      </div>
    </div>
  )
}
