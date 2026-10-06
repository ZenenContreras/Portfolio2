import { useEffect, useRef, useState, type MouseEvent } from "react"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
  type Activity,
} from "@/components/kibo-ui/contribution-graph"
import { activityFallback } from "@/content/activity-fallback"
import { site } from "@/content/site"

type ContributionsResponse = {
  contributions: Activity[]
}

type Tip = {
  x: number
  y: number
  text: string
}

const START = "2025-10-07"

function dayLabel(day: Activity) {
  const [year, month, date] = day.date.split("-").map(Number)
  const when = new Date(year, month - 1, date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
  const noun = day.count === 1 ? "commit" : "commits"
  return `${day.count} ${noun} · ${when}`
}

export function GithubActivity() {
  const frame = useRef<HTMLDivElement>(null)
  const [activity, setActivity] = useState<Activity[]>(activityFallback)
  const [tip, setTip] = useState<Tip | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetch(
      `https://github-contributions-api.jogruber.de/v4/${site.github}`,
      { signal: controller.signal },
    )
      .then((response) => {
        if (!response.ok) throw new Error("contributions request failed")
        return response.json() as Promise<ContributionsResponse>
      })
      .then((payload) => {
        const next = payload.contributions
          .filter((day) => day.date >= START && day.date <= "2026-10-06")
          .sort((a, b) => a.date.localeCompare(b.date))
        if (next.length > 0) setActivity(next)
      })
      .catch(() => {
        /* The snapshot in activity-fallback stays on screen. */
      })

    return () => controller.abort()
  }, [])

  const total = activity.reduce((sum, day) => sum + day.count, 0)

  useEffect(() => {
    const scroller = frame.current?.querySelector<HTMLElement>(".overflow-x-auto")
    if (!scroller) return
    const media = window.matchMedia("(max-width: 39.999rem)")
    const pin = () => {
      scroller.scrollLeft = media.matches ? scroller.scrollWidth : 0
    }
    const frameId = requestAnimationFrame(() => requestAnimationFrame(pin))
    media.addEventListener("change", pin)
    return () => {
      cancelAnimationFrame(frameId)
      media.removeEventListener("change", pin)
    }
  }, [activity])

  function showTip(event: MouseEvent<SVGRectElement>, day: Activity) {
    const graph = frame.current
    if (!graph) return
    const graphBox = graph.getBoundingClientRect()
    const cell = event.currentTarget.getBoundingClientRect()
    setTip({
      x: cell.left + cell.width / 2 - graphBox.left,
      y: cell.top - graphBox.top,
      text: dayLabel(day),
    })
  }

  return (
    <div className="activity-graph flex justify-center rounded-xl bg-muted p-4">
      <div
        ref={frame}
        className="relative max-w-full"
        onMouseLeave={() => setTip(null)}
      >
      <ContributionGraph
        className="mx-auto"
        data={activity}
        blockSize={8}
        blockMargin={2}
        blockRadius={2}
        fontSize={11}
        totalCount={total}
        labels={{ totalCount: "{{count}} contributions in the last year" }}
      >
        <ContributionGraphCalendar className="mx-auto w-fit max-w-full">
          {({ activity: day, dayIndex, weekIndex }) => (
            <ContributionGraphBlock
              activity={day}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
              aria-label={dayLabel(day)}
              onMouseEnter={(event) => showTip(event, day)}
            />
          )}
        </ContributionGraphCalendar>
        <ContributionGraphFooter className="mt-3 items-center justify-between text-sm">
          <ContributionGraphTotalCount />
          <ContributionGraphLegend />
        </ContributionGraphFooter>
        {tip ? (
          <div
            role="tooltip"
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-md bg-foreground px-2 py-1 text-[11px] whitespace-nowrap text-background"
            style={{ left: tip.x, top: tip.y - 6 }}
          >
            {tip.text}
          </div>
        ) : null}
      </ContributionGraph>
      </div>
    </div>
  )
}
