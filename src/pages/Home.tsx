import { Link } from "react-router-dom";
import DiagnosticSnapshot from "../components/DiagnosticSnapshot";
import OfferCard from "../components/OfferCard";
import CTA from "../components/CTA";
import { offers } from "../data/offers";
import { methodSteps } from "../data/method";

const finds = [
  {
    title: "Broken workflows",
    text: "Find the process friction slowing decisions, delivery, or revenue.",
  },
  {
    title: "Revenue leaks",
    text: "Spot where money is slipping through gaps in data, operations, or follow-up.",
  },
  {
    title: "Customer friction",
    text: "Identify where people stall, churn, disappear, or fail to convert.",
  },
  {
    title: "Reporting blind spots",
    text: "Expose what your dashboards are not clearly telling you.",
  },
  {
    title: "Operational drag",
    text: "Separate busy work from the work that actually moves outcomes.",
  },
  {
    title: "Missed opportunities",
    text: "Turn buried signals into clear next moves before they fade.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,6,0,0.14),transparent_34%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-[0.3em] text-axi-red">
              ALGORITHMS BY IDEA
            </p>

            <h1 className="text-5xl font-black leading-[1.02] md:text-6xl">
              I turn messy business signals into{" "}
              <span className="text-axi-red">revenue decisions.</span>
            </h1>

            <p className="max-w-xl text-lg text-white/75">
              If your reports, workflows, or customer data are creating more questions than answers,
              AXI finds what’s leaking revenue, what’s unclear, and what to fix first.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/contact"
                className="rounded-xl bg-axi-red px-7 py-4 font-black shadow-[0_10px_30px_rgba(225,6,0,0.25)] transition-all duration-300 ease-out hover:delay-75 hover:scale-[1.04] hover:shadow-[0_20px_60px_rgba(225,6,0,0.35)] active:scale-[0.98]"
              >
                Get My Breakdown
              </Link>

              <Link
                to="/services"
                className="rounded-xl border border-axi-border px-7 py-4 font-semibold text-white/80 transition-all duration-300 hover:border-red-600 hover:bg-white/5 active:scale-[0.98]"
              >
                How It Works
              </Link>
            </div>

            <p className="border-l-4 border-axi-red pl-5 text-sm font-semibold text-white/75">
              48-hour breakdown. No bloated report. Just what’s broken, what it’s costing you, and what to fix first.
            </p>
          </div>

          <DiagnosticSnapshot />
        </div>
      </section>

      <section className="border-y border-axi-border bg-axi-gray/40">
        <div className="section mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.3em] text-axi-red">
              SIGNAL SCAN
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase">
              What <span className="text-axi-red">AXI</span> Finds
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {finds.map((item) => (
              <div
                key={item.title}
                className="card rounded-2xl border border-axi-border bg-black p-8 text-left hover:border-red-600 hover:bg-[#111] hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              >
                <p className="text-lg font-black text-white">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-black uppercase">
          The <span className="text-axi-red">AXI</span> Offer Ladder
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard key={offer.slug} offer={offer} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="section bg-white px-6 text-black">
        <h2 className="mb-12 text-center text-3xl font-black uppercase">
          The <span className="text-axi-red">AXI</span> Method
        </h2>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 lg:grid-cols-5">
          {methodSteps.map((step, index) => (
            <div key={step.title}>
              <p className="text-sm font-semibold text-axi-red">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-black">{step.title}</h3>
              <p className="mt-3 text-sm text-black/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}