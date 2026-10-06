import { brandPaths, type BrandName } from "@/components/icons/brands"

type BrandIconProps = {
  name: BrandName
  className?: string
}

export function BrandIcon({ name, className = "size-4" }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d={brandPaths[name]} />
    </svg>
  )
}
