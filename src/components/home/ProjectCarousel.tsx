import { lazy, Suspense, useState } from "react"
import { ProjectDetails } from "@/components/home/ProjectDetails"
import { projects } from "@/content/projects"

const FlexCarousel = lazy(() => import("@/components/FlexCarousel"))

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
          <Suspense fallback={null}>
            <FlexCarousel
              items={projects.map((item) => ({
                src: item.image,
                alt: item.imageAlt,
                title: item.title,
                subtitle: item.summary,
              }))}
              preset="arch"
              intro="rise"
              cardHeight={0.6}
              gap={12}
              squeeze={0.2}
              focusOnClick
              captions={false}
              fit="landscape"
              radius={10}
              lensWidth={2}
              lensHeight={0.79}
              tilt={0}
              roundness={1}
              bend={0.3}
              reach={0.36}
              curl="fall"
              dispersion={0.4}
              liquid={0}
              followCursor={false}
              autoplay
              interval={4}
              captureWheel
              onChange={(index) => setActive(index)}
            />
          </Suspense>
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
