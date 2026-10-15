import { Outlet } from "react-router"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { useInteract } from "@/hooks/useInteract"
import { BackgroundASCII } from "@/components/home/BackgroundASCII"

export function SiteLayout() {
  const scope = useInteract()

  return (
    <div ref={scope} className="page-shell relative min-h-screen w-full flex flex-col">
      
      <div className="pointer-events-none fixed inset-0 z-0">
        <BackgroundASCII />
      </div>

      <div className="relative z-10 flex flex-col flex-1 w-full pointer-events-none">       
        <div className="pointer-events-auto">
          <Navbar />
        </div>
        <main className="view-container flex-1 py-14 pointer-events-auto">
          <Outlet />
        </main>
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>

    </div>
  )
}
