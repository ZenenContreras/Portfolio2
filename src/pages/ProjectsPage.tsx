import { projects } from "@/content/projects"

export function ProjectsPage() {
  return (
    <section aria-labelledby="projects-page-heading">
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
            <p className="mt-2 flex gap-4 text-xs text-muted-foreground">
              {project.site ? (
                <a
                  href={project.site}
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  Website
                </a>
              ) : null}
              <a
                href={project.repo}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                GitHub
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
