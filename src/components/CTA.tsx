import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,6,0,0.14),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-red-600/40 bg-axi-gray p-12 text-center shadow-[0_0_40px_rgba(225,6,0,0.08)] transition-all duration-300 hover:shadow-[0_0_70px_rgba(225,6,0,0.15)]">
          
          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Find What’s <span className="text-axi-red">Costing You Money</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            In 48 hours, AXI breaks down what’s unclear, what’s leaking revenue,
            and what to fix first — without bloated reports or wasted time.
          </p>

          {/* urgency line */}
          <p className="mt-4 text-sm font-semibold text-white/60">
            Takes 60–90 seconds to start.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-block rounded-xl bg-axi-red px-8 py-4 font-black shadow-[0_10px_30px_rgba(225,6,0,0.25)] transition-all duration-300 ease-out hover:delay-75 hover:scale-[1.04] hover:shadow-[0_25px_70px_rgba(225,6,0,0.35)] active:scale-[0.98]"
          >
            Get My Breakdown
          </Link>
        </div>
      </div>
    </section>
  );
}