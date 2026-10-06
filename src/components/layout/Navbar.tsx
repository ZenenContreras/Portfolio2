import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import { Icon } from "@/components/icons/Icon"
import { navItems } from "@/content/navigation"
import { site } from "@/content/site"

function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  )

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const follow = () => {
      if (localStorage.getItem("theme")) return
      const next = media.matches
      document.documentElement.classList.toggle("dark", next)
      setDark(next)
    }
    media.addEventListener("change", follow)
    return () => media.removeEventListener("change", follow)
  }, [])

  function toggle() {
    const next = !document.documentElement.classList.contains("dark")
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
    setDark(next)
  }

  return (
    <button
      type="button"
      className="nav-link inline-flex cursor-pointer items-center border-0 bg-transparent"
      data-interact
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      onClick={toggle}
    >
      <Icon name={dark ? "sun" : "moon"} />
    </button>
  )
}

export function Navbar() {
  return (
    <header className="view-container flex items-center justify-between gap-2 pt-10">
      <nav aria-label="Primary" className="min-w-0">
        <ul className="site-nav flex flex-nowrap items-center">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className="nav-link"
                data-interact
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex shrink-0 items-center">
        <a
          href={`https://github.com/${site.github}`}
          className="nav-link inline-flex items-center"
          data-interact
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" />
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
