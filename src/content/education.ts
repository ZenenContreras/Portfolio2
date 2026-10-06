export type Education = {
  school: string
  program: string
  period: string
  detail?: string
  img?: string
}

export const educations: Education[] = [{
  school: "Universidad Del Norte",
  program: "Bachelor of Engineering in Systems Engineering",
  period: "2022-2026",
  detail: "Relevant Coursework: Data Structures, Algorithms, Software Architecture, Web Development.",
  img: "/educations/uninorte.webp",
},{
  school: "Pontificia Universidad Javeriana",
  program: "Bachelor of Engineering in Systems Engineering",
  period: "2024-2025",
  detail: "Academic Exchange Program - Systems Engineering",
  img: "/educations/javeriana.webp",
}]
