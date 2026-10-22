import { Hero } from "@/components/home/Hero"
import { ProjectCarousel } from "@/components/home/ProjectCarousel"
import { Skills } from "@/components/home/Skills"
import { Socials } from "@/components/home/Socials"
import { useReveal } from "@/hooks/useReveal"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger) 

export function HomePage() {
  const scope = useReveal()

  useGSAP(() => {
    gsap.from(".socials", {
      opacity: 0,
      y: 25,
      duration: 1,
      scrollTrigger: {
        trigger: ".socials",
        start: "top 85%",
        toggleActions: "play none none reverse" 
      }})
  })

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
      <div className="socials">
        <Socials />
      </div>
    </div>
  )
}
