import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="border-t border-white/10 bg-[#111111]">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-4xl font-black leading-tight md:text-5xl">
          Bring the problem. AXI will find the signal.
        </h2>

        <p className="mt-6 text-lg text-white/60">
          A focused breakdown of your business to identify what’s costing you
          money and what to fix first.
        </p>

        <Link
          to="/services/find-whats-wrong"
          className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-axi-red px-8 py-4 font-black text-white transition hover:scale-[1.02]"
        >
          Find What’s Wrong
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}