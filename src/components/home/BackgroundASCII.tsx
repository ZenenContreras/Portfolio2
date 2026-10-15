import { useEffect, useState } from "react"
import GradientASCII from "@/components/GradientASCII"

const lightColors = ["#84cc16", "#e9f7d3", "#10b981", "#16cc3d"]
const darkColors = ["#052e16", "#14532d", "#166534", "#84cc16"]

function useLightTheme() {
  const [light, setLight] = useState(
    () => !document.documentElement.classList.contains("dark"),
  )

  useEffect(() => {
    const root = document.documentElement
    const sync = () => setLight(!root.classList.contains("dark"))
    const observer = new MutationObserver(sync)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return light
}

export function BackgroundASCII() {
  const light = useLightTheme()

  return (
    <GradientASCII
      className="absolute inset-0"
      colors={light ? lightColors : darkColors}
      cellSize={8}
      lightMode={light}
      grain={0.2}
    />
  )
}
