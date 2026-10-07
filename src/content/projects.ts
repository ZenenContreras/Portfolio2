import type { BrandName } from "@/components/icons/brands"

export type ProjectStack = {
  name: string
  icon: BrandName
}

export type Project = {
  title: string
  summary: string
  stack: ProjectStack[]
  image: string
  imageAlt: string
  repo?: string
  site?: string
}

export const projects: Project[] = [
  {
    title: "Tout à un Clic Là",
    summary:
      "A shop for Latin American products in Montreal, with delivery across Montreal. 600+ users and 300+ orders.",
    stack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Express", icon: "express" },
      { name: "Supabase", icon: "supabase" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Vercel", icon: "vercel" },
    ],
    image: "/projects/toutaunclicla.webp",
    imageAlt: "Hero of the Tout à un Clic Là shop",
    site: "https://www.toutaunclicla.com",
  },
  {
    title: "DevPulse",
    summary:
      "Github profile search tool built with React and Tailwind CSS to search for users, their repositories and their commits.",
    stack: [
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Vercel", icon: "vercel" },
    ],
    image: "/projects/devpulse.webp",
    imageAlt: "Hero of the DevPulse site",
    site: "https://devpulse.zenen.tech",
    repo: "https://github.com/ZenenContreras/Roadmap/tree/main/Mes1/Semana3/DevPulse",
  },
  {
    title: "Fabio Canchila",
    summary:
      "A professional site for a consultant working on territorial development, With admin dashboard for managing content.",
    stack: [
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Supabase", icon: "supabase" },
      { name: "Vercel", icon: "vercel" },
    ],
    image: "/projects/fabio.webp",  
    imageAlt: "Hero of the Fabio Canchila site",
    site: "https://www.fabiocanchila.com",
    repo: "https://github.com/ZenenContreras/fabiocanchila",
  },
]
