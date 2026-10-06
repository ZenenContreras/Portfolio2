import { Outlet } from "react-router"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

export function SiteLayout() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="view-container flex-1 py-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
