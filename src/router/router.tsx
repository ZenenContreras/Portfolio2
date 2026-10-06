import { createBrowserRouter } from "react-router"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { ContactPage } from "@/pages/ContactPage"
import { EducationsPage } from "@/pages/EducationsPage"
import { HomePage } from "@/pages/HomePage"
import { ProjectsPage } from "@/pages/ProjectsPage"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SiteLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "projects", Component: ProjectsPage },
      { path: "educations", Component: EducationsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
])
