import { BrandIcon } from "@/components/icons/BrandIcon"
import { socials } from "@/content/socials"

type SocialsProps = {
  labelled?: boolean
}

export function Socials({ labelled = true }: SocialsProps) {
  return (
    <section aria-labelledby={labelled ? "socials-heading" : undefined}>
      {labelled ? (
        <h2 id="socials-heading" className="section-title">
          socials.
        </h2>
      ) : null}
      <ul className={`social-list ${labelled ? "mt-4" : ""}`}>
        {socials.map((social) => (
          <li key={social.name}>
            <a
              className="social-link"
              href={social.href}
              rel="noreferrer"
              target="_blank"
            >
              <BrandIcon name={social.icon} colored />
              <span>
                {social.name}
                <span className="text-muted-foreground"> @{social.handle}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
