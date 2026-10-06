import { BrandIcon } from "@/components/icons/BrandIcon"
import { Icon } from "@/components/icons/Icon"
import type { Project } from "@/content/projects"

export function ProjectDetails({
  project,
  align = "center",
}: {
  project: Project
  align?: "center" | "start"
}) {
  const row = align === "center" ? "justify-center" : "justify-start"

  return (
    <div>
      <ul className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 ${row}`}>
        {project.stack.map((item) => (
          <li
            key={item.name}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground"
          >
            <BrandIcon name={item.icon} colored className="size-3.5" />
            {item.name}
          </li>
        ))}
      </ul>
      <p className={`mt-2 flex flex-wrap gap-4 text-xs ${row}`}>
        {project.repo ? (
          <a
            href={project.repo}
            className="inline-flex items-center gap-1 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" className="size-3.5" />
            GitHub
          </a>
        ) : null}
        {project.site ? (
          <a
            href={project.site}
            className="inline-flex items-center gap-1 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="link" className="size-3.5" />
            Link
          </a>
        ) : null}
      </p>
    </div>
  )
}
