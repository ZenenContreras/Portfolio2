import { Socials } from "@/components/home/Socials"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function ContactPage() {

  useGSAP(() => {
    gsap.from(".socials" , {
      opacity: 0,
      duration: 1
    })
  }, [])

  return (
    <section aria-labelledby="contact-heading" className="socials">
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
