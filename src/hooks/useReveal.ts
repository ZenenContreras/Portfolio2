import { useEffect, useRef } from "react"
import gsap from "gsap"

export function useReveal() {
  const scope = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = scope.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        y: 10,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.05,
        ease: "power3.out",
        clearProps: "transform",
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return scope
}
