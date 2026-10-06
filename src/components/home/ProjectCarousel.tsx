import { useState } from "react"
import FlexCarousel from "@/components/FlexCarousel"
import { projects, type Project } from "@/content/projects"

function ProjectCaption({ project }: { project: Project }) {
  return (
    <div className="mx-auto mt-4 max-w-md text-center">
      <p className="text-[15px] text-foreground">{project.title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{project.stack}</p>
      <p className="mt-2 flex justify-center gap-4 text-xs">
        {project.repo ? (
          <a
            href={project.repo}
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ) : null}
        {project.site ? (
          <a
            href={project.site}
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        ) : null}
      </p>
    </div>
  )
}

export function ProjectCarousel() {
  const [active, setActive] = useState(0)
  const project = projects[active] ?? projects[0]

  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-title">
        projects.
      </h2>
      <div className="carousel-breakout mt-6">
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
            interval={2.5}
            captureWheel
            onChange={(index) => setActive(index)}
          />
        </div>
      </div>
      <ProjectCaption project={project} />
    </section>
  )
}
