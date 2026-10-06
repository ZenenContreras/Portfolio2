import DitherVeil from "@/components/DitherVeil"
import RotatingText from "@/components/RotatingText"
import { GithubActivity } from "@/components/home/GithubActivity"
import { roles, site } from "@/content/site"

export function Hero() {
  return (
    <section aria-labelledby="profile-name">
      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <div
            className="size-18 overflow-hidden rounded-full"
            role="img"
            aria-label={`Portrait of ${site.name}`}
          >
            <DitherVeil
              src={site.portrait}
              fit="cover"
              pixelSize={1}
              revealRadius={45}
            />
          </div>
        </div>
        <div className="min-w-0">
          <h1
            id="profile-name"
            className="text-2xl leading-snug font-semibold tracking-tight text-primary"
          >
            {site.name}
          </h1>
          <div className="overflow-hidden text-base leading-6 text-foreground">
            <RotatingText
              texts={roles}
              splitBy="words"
              rotationInterval={2400}
              staggerDuration={0.03}
              mainClassName="text-base leading-6 text-foreground"
            />
          </div>
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
