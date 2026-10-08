import { site } from "@/content/site"
import { useState, useEffect } from "react"


export function Footer() {

  const [hora, setHora] = useState<string>(new Date().toLocaleDateString('es-ES'))

  useEffect(() =>{
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString('es-ES'))
    }, 1000)

    return () => clearInterval(intervalo)
      
  }, [])

  return (
    <footer className="view-container mt-auto pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-4 border-t border-border pt-3">
        <p className="text-xs text-muted-foreground">
          Last updated · {site.lastUpdated}
        </p>
        <p className="text-xs text-muted-foreground">
          © {site.year} {site.name}
        </p>
        <p className="text-xs text-muted-foreground">{hora} in Colombia</p>
      </div>
    </footer>
  )
}
