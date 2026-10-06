declare module "*.svg?raw" {
  const content: string
  export default content
}

import github from "./github.svg?raw"
import moon from "./moon.svg?raw"
import sun from "./sun.svg?raw"

const icons = { github, moon, sun }

export function Icon({
  name,
  className = "size-4",
}: {
  name: keyof typeof icons
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 ${className}`}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  )
}
