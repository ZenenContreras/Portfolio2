import { BrowserRouter, Route, Routes } from "react-router"
import { SiteLayout } from "@/components/layout/SiteLayout"
import { ContactPage } from "@/pages/ContactPage"
import { EducationsPage } from "@/pages/EducationsPage"
import { HomePage } from "@/pages/HomePage"
import { ProjectsPage } from "@/pages/ProjectsPage"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="educations" element={<EducationsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
