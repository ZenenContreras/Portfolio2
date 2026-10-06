import { site } from "@/content/site"

export function Footer() {
  return (
    <footer className="view-container mt-auto pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-4 border-t border-border pt-3">
        <p className="text-xs text-muted-foreground">
          Last updated · {site.lastUpdated}
        </p>
        <p className="text-xs text-muted-foreground">
          © {site.year} {site.name}
        </p>
      </div>
    </footer>
  )
}
