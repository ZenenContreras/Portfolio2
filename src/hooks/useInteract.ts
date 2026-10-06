import { useEffect, useRef } from "react"
import gsap from "gsap"

function move(element: Element, vars: gsap.TweenVars) {
  gsap.to(element, { ease: "power2.out", overwrite: "auto", ...vars })
}

const cellScale = new WeakMap<Element, { scale: number }>()

function scaleCell(cell: Element, scale: number, duration: number) {
  const state = cellScale.get(cell) ?? { scale: 1 }
  cellScale.set(cell, state)
  gsap.to(state, {
    scale,
    duration,
    ease: "power2.out",
    overwrite: "auto",
    onUpdate: () => {
      if (cell instanceof SVGElement) cell.style.transform = `scale(${state.scale})`
    },
  })
}

function targetOf(event: Event, selector: string) {
  const node = event.target
  if (!(node instanceof Element)) return null
  return node.closest(selector)
}

export function useInteract() {
  const scope = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = scope.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches

    const onOver = (event: PointerEvent) => {
      if (!fine) return
      const control = targetOf(event, "[data-interact]")
      if (control && root.contains(control)) move(control, { y: -2, duration: 0.22 })
      const cell = targetOf(event, "rect[data-level]")
      if (cell && root.contains(cell)) scaleCell(cell, 1.35, 0.16)
    }

    const onOut = (event: PointerEvent) => {
      const control = targetOf(event, "[data-interact]")
      if (control && root.contains(control)) {
        const next = event.relatedTarget
        if (!(next instanceof Node) || !control.contains(next)) {
          move(control, { y: 0, scale: 1, duration: 0.28 })
        }
      }
      const cell = targetOf(event, "rect[data-level]")
      if (cell && root.contains(cell)) scaleCell(cell, 1, 0.2)
    }

    const onDown = (event: PointerEvent) => {
      const control = targetOf(event, "[data-interact]")
      if (control && root.contains(control)) move(control, { scale: 0.96, duration: 0.1 })
    }

    const onUp = (event: PointerEvent) => {
      const control = targetOf(event, "[data-interact]")
      if (!control || !root.contains(control)) return
      move(control, { y: fine ? -2 : 0, scale: 1, duration: 0.16 })
    }

    root.addEventListener("pointerover", onOver)
    root.addEventListener("pointerout", onOut)
    root.addEventListener("pointerdown", onDown)
    root.addEventListener("pointerup", onUp)
    root.addEventListener("pointercancel", onUp)

    return () => {
      root.removeEventListener("pointerover", onOver)
      root.removeEventListener("pointerout", onOut)
      root.removeEventListener("pointerdown", onDown)
      root.removeEventListener("pointerup", onUp)
      root.removeEventListener("pointercancel", onUp)
      gsap.killTweensOf(root.querySelectorAll("[data-interact]"))
      root.querySelectorAll("rect[data-level]").forEach((cell) => {
        const state = cellScale.get(cell)
        if (state) gsap.killTweensOf(state)
      })
    }
  }, [])

  return scope
}
