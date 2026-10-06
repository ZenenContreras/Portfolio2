import FlexCarousel from "@/components/FlexCarousel"
import { projects } from "@/content/projects"

export function ProjectCarousel() {

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
            captions
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
          />
        </div>
      </div>
    </section>
  )
}
