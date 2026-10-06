export type Project = {
  title: string
  summary: string
  stack: string
  image: string
  imageAlt: string
  repo?: string
  site?: string
}

export const projects: Project[] = [
  {
    title: "Tout à un Clic Là",
    summary:
      "A shop for Latin American products in Montreal, with delivery across Canada.",
    stack: "Next.js",
    image: "/projects/toutaunclicla.webp",
    imageAlt: "Hero of the Tout à un Clic Là shop",
    site: "https://www.toutaunclicla.com",
  },
  {
    title: "Fabio Canchila",
    summary:
      "A professional site for a consultant working on territorial development.",
    stack: "TypeScript · React · Tailwind",
    image: "/projects/fabio.png",
    imageAlt: "Hero of the Fabio Canchila site",
    site: "https://fabiocanchila.vercel.app",
    repo: "https://github.com/zenencontreras/fabiocanchila",
  },
  {
    title: "Nazly Royero",
    summary:
      "A site for a mentor working on personal and organizational transformation.",
    stack: "TypeScript · React · Tailwind",
    image: "/projects/nazly.png",
    imageAlt: "Hero of the Nazly Royero site",
    site: "https://nazlyroyero.vercel.app",
    repo: "https://github.com/zenencontreras/NazlyRoyero",
  },
]
