import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
              <img src={logo} alt="AXI" className="h-8 w-auto object-contain" />
            </div>

            <div>
              <p className="font-black">Algorithms by Idea</p>
              <p className="mt-1 text-sm text-white/50">
                Business Intelligence & Decision Systems
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
            AXI helps businesses find what’s broken, where money is leaking,
            and what to fix first.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-black tracking-[0.2em] text-axi-red">
            SITE
          </p>
          <div className="grid gap-3 text-sm">
            <Link to="/" className="text-white/55 hover:text-white">
              Home
            </Link>
            <Link to="/services" className="text-white/55 hover:text-white">
              Services
            </Link>
            <Link to="/method" className="text-white/55 hover:text-white">
              Method
            </Link>
            <Link to="/pricing" className="text-white/55 hover:text-white">
              Pricing
            </Link>
            <Link to="/about" className="text-white/55 hover:text-white">
              About
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-black tracking-[0.2em] text-axi-red">
            START
          </p>
          <p className="text-sm leading-6 text-white/50">
            Ready to stop guessing?
          </p>

          <Link
            to="/services/find-whats-wrong"
            className="mt-5 inline-flex rounded-xl bg-axi-red px-5 py-3 text-sm font-black text-white transition hover:scale-[1.02]"
          >
            Find What’s Wrong
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Algorithms by Idea / AXI. All rights reserved.
      </div>
    </footer>
  );
}