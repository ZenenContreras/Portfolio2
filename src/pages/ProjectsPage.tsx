import { ProjectDetails } from "@/components/home/ProjectDetails"
import { projects } from "@/content/projects"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function ProjectsPage() {

  useGSAP(() => {
    gsap.from(".projects", {
      opacity: 0,
      duration: 1
    })
  }, [])

  return (
    <section aria-labelledby="projects-page-heading" className="projects">
      <h1 id="projects-page-heading" className="section-title">
        projects.
      </h1>
      <ul className="mt-6 divide-y divide-border">
        {projects.map((project) => (
          <li key={project.title} className="py-4">
            <h2 className="text-base font-normal text-primary">{project.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-4">
              <ProjectDetails project={project} align="start" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
