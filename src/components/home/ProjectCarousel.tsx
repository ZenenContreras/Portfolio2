import { useState } from "react"
import FlexCarousel from "@/components/FlexCarousel"
import { ProjectDetails } from "@/components/home/ProjectDetails"
import { projects } from "@/content/projects"

export function ProjectCarousel() {
  const [active, setActive] = useState(0)
  const project = projects[active] ?? projects[0]

  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-title">
        projects.
      </h2>
      <div className="carousel-breakout mt-6 md:mt-3">
        <div className="carousel-stage">
          <FlexCarousel
            items={projects.map((item) => ({
              src: item.image,
              alt: item.imageAlt,
              title: item.title,
              subtitle: item.summary,
            }))}
            preset="arch"
            intro="rise"
            cardHeight={0.5}
            gap={15}
            squeeze={0}
            focusOnClick
            captions={false}
            fit="landscape"
            radius={10}
            lensWidth={0.8}
            lensHeight={0.8}
            tilt={0}
            roundness={1}
            bend={0}
            reach={0.31}
            curl="rise"
            dispersion={0}
            liquid={0}
            followCursor={false}
            autoplay
            interval={3.5}
            captureWheel
            onChange={(index) => setActive(index)}
          />
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-md text-center md:mt-2">
        <p className="text-[15px] text-foreground">{project.title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-4">
          <ProjectDetails project={project} />
        </div>
      </div>
    </section>
  )
}
