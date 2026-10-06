import { Socials } from "@/components/home/Socials"

export function ContactPage() {
  return (
    <section aria-labelledby="contact-heading">
      <h1 id="contact-heading" className="section-title">
        contact.
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        The fastest way to reach me is through any of these.
      </p>
      <div className="mt-4">
        <Socials labelled={false} />
      </div>
    </section>
  )
}
