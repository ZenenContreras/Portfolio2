import { educations } from "@/content/education"

export function EducationsPage() {
  return (
    <section aria-labelledby="educations-heading">
      <h1 id="educations-heading" className="section-title">
        educations.
      </h1>
      {educations.length === 0 ? (
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Schools and programs will be listed here.
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-border">
          {educations.map((item) => (
            <li key={`${item.school}-${item.program}`} className="py-4">
              <h2 className="text-base text-primary">{item.program}</h2>
              <p className="text-sm text-foreground">{item.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.period}</p>
              {item.detail ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
