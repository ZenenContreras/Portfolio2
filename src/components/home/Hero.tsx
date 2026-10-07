import { lazy, Suspense } from "react"
import { GithubActivity } from "@/components/home/GithubActivity"
import { roles, site } from "@/content/site"

const DitherVeil = lazy(() => import("@/components/DitherVeil"))
const RotatingText = lazy(() => import("@/components/RotatingText"))

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
            <Suspense fallback={null}>
              <DitherVeil
                src={site.portrait}
                fit="cover"
                pixelSize={1}
                revealRadius={60}
              />
            </Suspense>
          </div>
        </div>
        <div className="min-w-0">
          <h1
            id="profile-name"
            className="text-2xl leading-snug font-bold tracking-tight text-primary"
          >
            {site.name}
          </h1>
          <div className="overflow-hidden text-base leading-6 text-foreground">
            <Suspense fallback={<span>{roles[0]}</span>}>
              <RotatingText
                texts={roles}
                splitBy="words"
                rotationInterval={2600}
                staggerDuration={0.03}
                mainClassName="text-base leading-6 text-foreground font-medium"
              />
            </Suspense>
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
