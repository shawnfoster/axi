import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
            <img src={logo} alt="AXI" className="h-8 w-auto object-contain" />
          </div>

          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-black tracking-wide text-white">
              Algorithms by Idea
            </p>
            <p className="mt-1 text-xs text-white/50">
              Business Intelligence & Decision Systems
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {links.slice(0, 5).map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/services/find-whats-wrong"
          className="hidden rounded-xl bg-axi-red px-5 py-3 text-sm font-black text-white transition hover:scale-[1.02] hover:opacity-95 sm:inline-flex"
        >
          Find What’s Wrong
        </Link>

        <Link
          to="/services/find-whats-wrong"
          className="rounded-xl bg-axi-red px-4 py-2 text-xs font-black text-white sm:hidden"
        >
          Start
        </Link>
      </div>
    </header>
  );
}