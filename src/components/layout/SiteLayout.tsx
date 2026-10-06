import { Outlet } from "react-router"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { useInteract } from "@/hooks/useInteract"

export function SiteLayout() {
  const scope = useInteract()

  return (
    <div ref={scope} className="page-shell">
      <Navbar />
      <main className="view-container flex-1 py-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
