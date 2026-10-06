import type { BrandName } from "@/components/icons/brands"

export type Social = {
  name: string
  handle: string
  href: string
  icon: BrandName
  plain?: boolean
}

export const socials: Social[] = [
  {
    name: "GitHub",
    handle: "zenencontreras",
    href: "https://github.com/zenencontreras",
    icon: "github",
  },
  {
    name: "X",
    handle: "zenendev",
    href: "https://x.com/zenendev",
    icon: "x",
  },
  {
    name: "LinkedIn",
    handle: "zenencontreras",
    href: "https://www.linkedin.com/in/zenencontreras",
    icon: "linkedin",
  },
  {
    name: "Discord",
    handle: "zenencontreras",
    href: "https://discord.com/users/zenencontreras",
    icon: "discord",
  },
  {
    name: "Instagram",
    handle: "zenen_c",
    href: "https://www.instagram.com/zenen_c",
    icon: "instagram",
  },
  {
    name: "Gmail",
    handle: "zenencontreras1@gmail.com",
    href: "mailto:zenencontreras1@gmail.com",
    icon: "gmail",
    plain: true,
  },
]
