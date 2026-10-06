# Styles

The visual system follows the landing at [aniketpawar.com](https://www.aniketpawar.com/): a light page, a 40rem column, Geist for text, and Instrument Serif italic for section titles.

## Where things live

| File | What it owns |
| --- | --- |
| `src/index.css` | Tailwind, the shadcn Nova tokens, and the two font imports. Change colors here. |
| `src/styles/layout.css` | Reusable layout: the column, section titles, nav, social list, contribution cells, carousel stage. |
| `src/content/` | Copy and data. The pages read from here so wording is not buried in components. |

## Tokens

Colors, radius, and the sans font are the shadcn Nova variables in `src/index.css` (`--background`, `--foreground`, `--muted`, `--muted-foreground`, `--primary`, `--border`, `--radius`).

`--font-heading` is Instrument Serif. shadcn initially points it at Geist. The override in `src/index.css` is intentional. If a later `shadcn` update rewrites that line, set it back to Instrument Serif.

## Classes to reuse

- `view-container` centers content at 40rem with horizontal padding. The navbar, the page, and the footer all use it, so they share one edge.
- `section-title` is the italic heading (`projects.`, `skills.`, `socials.`).
- `page-stack` spaces the landing sections. The first child has no extra top margin.
- `nav-link` is the muted navigation item. The active page uses `aria-current="page"`.
- `social-list` / `social-link` is the two-column social row. Hovering the list fades the other links.
- `activity-graph` keeps empty contribution cells on the page background so they stay visible on the muted card. The calendar scrolls sideways on narrow screens, with the scrollbar hidden.
- `carousel-breakout` and `carousel-stage` let the project carousel leave the column. Do not restyle the carousel component itself.

## Motion

The landing reveal uses GSAP (`src/hooks/useReveal.ts`): a short fade and rise, staggered, once. It is skipped when `prefers-reduced-motion` is set. Transitions in this file only change `color`, `opacity`, or `transform`.
