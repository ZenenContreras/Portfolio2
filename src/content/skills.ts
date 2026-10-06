import type { BrandName } from "@/components/icons/brands"

export type Skill = {
  name: string
  icon: BrandName
}

export type SkillGroup = {
  label: string
  items: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming Languages",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Go", icon: "go" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Zustand", icon: "zustand" },
      { name: "GSAP", icon: "gsap" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "Go", icon: "go" },
    ],
  },
  {
    label: "Tools and Platforms",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Linux", icon: "linux" },
      { name: "Stripe", icon: "stripe" },
      { name: "Postman", icon: "postman" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
]
