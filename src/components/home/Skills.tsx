import { BrandIcon } from "@/components/icons/BrandIcon"
import { skillGroups } from "@/content/skills"

export function Skills() {
  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-title">
        skills.
      </h2>
      <div className="mt-6 grid gap-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm text-muted-foreground">{group.label}</h3>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              {group.items.map((skill) => (
                <li
                  key={`${group.label}-${skill.name}`}
                  className="inline-flex items-center gap-1.5 text-sm text-foreground cursor-pointer"
                  data-interact
                >
                  <BrandIcon name={skill.icon} colored />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
