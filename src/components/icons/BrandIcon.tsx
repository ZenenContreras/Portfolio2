import { useId } from "react"
import zustandMark from "./zustand.png"
import { brandColors, brandPaths, type BrandName } from "@/components/icons/brands"

type BrandIconProps = {
  name: BrandName
  colored?: boolean
  className?: string
}

export function BrandIcon({
  name,
  colored = false,
  className = "size-4",
}: BrandIconProps) {
  const gradientId = useId().replace(/:/g, "")
  const instagram = colored && name === "instagram"
  const fill = !colored
    ? "currentColor"
    : instagram
      ? `url(#${gradientId})`
      : (brandColors[name] ?? "currentColor")

  if (name === "zustand") {
    return (
      <span
        aria-hidden="true"
        className={`inline-block shrink-0 ${className}`}
        style={{
          backgroundColor: fill,
          WebkitMask: `url(${zustandMark}) center / contain no-repeat`,
          mask: `url(${zustandMark}) center / contain no-repeat`,
        }}
      />
    )
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {instagram ? (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FCCC63" />
            <stop offset="35%" stopColor="#F77737" />
            <stop offset="65%" stopColor="#E1306C" />
            <stop offset="100%" stopColor="#833AB4" />
          </linearGradient>
        </defs>
      ) : null}
      <path fill={fill} d={brandPaths[name]} />
    </svg>
  )
}
