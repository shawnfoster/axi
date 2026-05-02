import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Method", path: "/method" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-5">
          <img src={logo} alt="AXI" className="h-16 w-auto object-contain" />

          <div className="hidden sm:block">
            <p className="text-sm font-black tracking-wide">
              Algorithms by Idea
            </p>
            <p className="mt-1 text-xs text-white/50">
              Business Intelligence & Decision Systems
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/60 hover:bg-white/[0.08] hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="rounded-xl bg-axi-red px-5 py-3 text-sm font-black text-white shadow-[0_10px_30px_rgba(225,6,0,0.22)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_45px_rgba(225,6,0,0.32)] active:scale-[0.98]"
        >
          Find What’s Wrong
        </Link>
      </div>
    </header>
  );
}