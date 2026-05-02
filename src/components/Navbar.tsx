import { Link, NavLink } from "react-router-dom";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Method", "/method"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-axi-border bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo.png" alt="AXI logo" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <p className="font-bold leading-tight">Algorithms by Idea</p>
            <p className="text-xs text-white/60">
              Business Intelligence & Decision Systems
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/services/find-whats-wrong"
          className="rounded-md bg-axi-red px-5 py-2 text-sm font-bold text-white transition hover:opacity-90"
        >
          Find What’s Wrong
        </Link>
      </div>
    </header>
  );
}