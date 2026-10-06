import { useEffect, useState } from "react"
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

const START = "2025-10-07"

export function GithubActivity() {
  const [activity, setActivity] = useState<Activity[]>(activityFallback)

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

  return (
    <div className="activity-graph rounded-xl bg-muted p-4">
      <ContributionGraph
        data={activity}
        blockSize={8}
        blockMargin={2}
        blockRadius={2}
        fontSize={11}
        totalCount={total}
        labels={{ totalCount: "{{count}} contributions in the last year" }}
      >
        <ContributionGraphCalendar>
          {({ activity: day, dayIndex, weekIndex }) => (
            <ContributionGraphBlock
              activity={day}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
            >
              <title>
                {day.count} contributions on {day.date}
              </title>
            </ContributionGraphBlock>
          )}
        </ContributionGraphCalendar>
        <ContributionGraphFooter className="mt-3 items-center justify-between text-sm">
          <ContributionGraphTotalCount />
          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </div>
  )
}
