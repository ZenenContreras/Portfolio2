import { site } from "@/content/site"
import { GithubActivity } from "@/components/home/GithubActivity"

export function Hero() {
  return (
    <section aria-labelledby="profile-name">
      <div className="flex items-center gap-4">
        <img
          src={site.portrait}
          alt=""
          width={72}
          height={72}
          className="size-[4.5rem] shrink-0 rounded-full object-cover"
        />
        <div className="min-w-0">
          <h1
            id="profile-name"
            className="text-2xl leading-snug font-semibold tracking-tight text-primary"
          >
            {site.name}
          </h1>
          <p className="text-base text-foreground">{site.role}</p>
        </div>
      </div>
      <p className="mt-6 max-w-[65ch] text-sm leading-relaxed text-muted-foreground">
        {site.summary}
      </p>
      <div className="mt-6">
        <GithubActivity />
      </div>
    </section>
  )
}
