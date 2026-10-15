import { useEffect } from "react"
import { useLocation } from "react-router"
import { canonicalUrl, pageFor } from "@/content/seo"

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

export function DocumentMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = pageFor(pathname)
    const url = canonicalUrl(pathname)

    document.title = page.title
    setMeta('meta[name="description"]', "name", "description", page.description)
    setMeta('meta[property="og:title"]', "property", "og:title", page.title)
    setMeta('meta[property="og:description"]', "property", "og:description", page.description)
    setMeta('meta[property="og:url"]', "property", "og:url", url)
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", page.title)
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", page.description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }
    canonical.setAttribute("href", url)
  }, [pathname])

  return null
}
