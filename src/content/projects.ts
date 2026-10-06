export type Project = {
  title: string
  summary: string
  image: string
  imageAlt: string
  repo: string
  site?: string
}

export const projects: Project[] = [
  {
    title: "Fabio Canchila",
    summary:
      "A professional site for a consultant working on territorial development.",
    image: "/projects/fabio.png",
    imageAlt: "Hero of the Fabio Canchila site",
    site: "https://fabiocanchila.vercel.app",
    repo: "https://github.com/zenencontreras/fabiocanchila",
  },
  {
    title: "Nazly Royero",
    summary:
      "A site for a mentor working on personal and organizational transformation.",
    image: "/projects/nazly.png",
    imageAlt: "Hero of the Nazly Royero site",
    site: "https://nazlyroyero.vercel.app",
    repo: "https://github.com/zenencontreras/NazlyRoyero",
  },
  {
    title: "DevPulse",
    summary:
      "Search a GitHub profile and read the bio, repositories, and activity in one place.",
    image: "/projects/devpulse.png",
    imageAlt: "DevPulse search screen",
    site: "https://roadmap-chi-sepia.vercel.app",
    repo: "https://github.com/zenencontreras/Roadmap",
  },
  {
    title: "gitStory",
    summary: "Turns a GitHub history into LinkedIn posts for developers.",
    image: "/projects/gitstory.svg",
    imageAlt: "gitStory cover",
    repo: "https://github.com/zenencontreras/gitStory",
  },
  {
    title: "MicroForge",
    summary: "A dashboard for creating, managing, and deleting microservices.",
    image: "/projects/microforge.svg",
    imageAlt: "MicroForge cover",
    repo: "https://github.com/zenencontreras/MicroForge",
  },
  {
    title: "CubeHost",
    summary: "A self-hosted platform for container-based web hosting.",
    image: "/projects/cubehost.svg",
    imageAlt: "CubeHost cover",
    repo: "https://github.com/zenencontreras/CubeHost",
  },
]
