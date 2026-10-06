import { NavLink } from "react-router"
import { navItems } from "@/content/navigation"

export function Navbar() {
  return (
    <header className="view-container pt-10">
      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className="nav-link"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
