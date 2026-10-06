# Styles

The visual system follows the landing at [aniketpawar.com](https://www.aniketpawar.com/): a light page, a 40rem column, and Geist for text and section titles.

## Where things live

| File | What it owns |
| --- | --- |
| `src/index.css` | Tailwind, the shadcn Nova tokens, and the Geist font. Change colors here. |
| `src/styles/layout.css` | Reusable layout: the column, section titles, nav, social list, contribution cells, carousel stage. |
| `src/content/` | Copy and data. The pages read from here so wording is not buried in components. |

## Tokens

Colors, radius, and the sans font are the shadcn Nova variables in `src/index.css` (`--background`, `--foreground`, `--muted`, `--muted-foreground`, `--primary`, `--border`, `--radius`).

## Classes to reuse

- `view-container` centers content at 40rem with horizontal padding. The navbar, the page, and the footer all use it, so they share one edge.
- `section-title` is the section heading (`projects.`, `skills.`, `socials.`), Geist at 600, upright.
- `page-stack` spaces the landing sections. The first child has no extra top margin.
- `nav-link` is the muted navigation item. The active page uses `aria-current="page"`.
- `social-list` / `social-link` is the two-column social row. Hovering the list fades the other links.
- `activity-graph` paints the contribution cells in GitHub green (a darker scale under `.dark`). The calendar is centered. On narrow screens it opens on the latest days, so older days sit to the left, and the scrollbar stays hidden.
- `carousel-breakout` and `carousel-stage` let the project carousel leave the column. Do not restyle the carousel component itself.

## Motion

The landing reveal uses GSAP (`src/hooks/useReveal.ts`): a short fade and rise, staggered, once. It is skipped when `prefers-reduced-motion` is set. Transitions in this file only change `color`, `opacity`, or `transform`.
