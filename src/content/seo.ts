import { site } from "@/content/site"

export const siteOrigin = "https://www.zenen.tech"

export const shareImage = {
  url: `${siteOrigin}/og.jpg`,
  width: 1200,
  height: 652,
  type: "image/jpeg",
  alt: "Zenen Contreras, software engineer. Portfolio homepage with a contribution graph and project previews.",
} as const

export const pages = {
  "/": {
    title: "Zenen Contreras — Software Engineer",
    description: site.summary,
  },
  "/projects": {
    title: "Projects — Zenen Contreras",
    description:
      "Selected projects by Zenen Contreras, including Tout à un Clic Là, DevPulse, and Fabio Canchila.",
  },
  "/educations": {
    title: "Education — Zenen Contreras",
    description:
      "Systems engineering at Universidad del Norte, and an academic exchange at Pontificia Universidad Javeriana.",
  },
  "/contact": {
    title: "Contact — Zenen Contreras",
    description:
      "The fastest way to reach Zenen Contreras is by email or the links on this page.",
  },
} as const

export type SitePath = keyof typeof pages

export function pageFor(pathname: string) {
  const path = (pathname.replace(/\/+$/, "") || "/") as SitePath
  return pages[path] ?? pages["/"]
}

export function canonicalUrl(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/"
  return siteOrigin + (path === "/" ? "/" : path)
}
