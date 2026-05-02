import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import { offers } from "../data/offers";

const comparison = [
  {
    name: "Find What’s Wrong",
    bestFor: "When the problem is unclear",
    outcome: "A prioritized diagnosis of what is broken and what to fix first",
    timing: "48–72 hours",
  },
  {
    name: "Fix It For You",
    bestFor: "When the problem is known",
    outcome: "A built dashboard, workflow, report, dataset, or decision system",
    timing: "Custom timeline",
  },
  {
    name: "Stay Fixed",
    bestFor: "When the business needs ongoing alignment",
    outcome: "Monthly reporting, iteration, advisory support, and decision review",
    timing: "Monthly",
  },
];

export default function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="PRICING"
        title="Simple entry point. Serious upside."
        subtitle="Start with Find What’s Wrong, then build only what the business actually needs."
      />

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-6 pt-4 md:grid-cols-3">
        {offers.map((offer, index) => (
          <div
            key={offer.slug}
            className={`card relative rounded-xl border bg-axi-gray p-5 transition-all duration-300 ${
              index === 0
                ? "border-red-600 shadow-[0_0_35px_rgba(225,6,0,0.12)]"
                : "border-axi-border"
            } hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)]`}
          >
            {index === 0 && (
              <p className="mb-3 inline-block rounded bg-axi-red px-3 py-1 text-xs font-black tracking-wide">
                START HERE
              </p>
            )}

            <h3 className="text-[1.65rem] font-black leading-tight">
              {offer.title}
            </h3>

            <p className="mt-1 text-sm font-semibold text-axi-red">
              {offer.internalName}
            </p>

            <div className="mt-5">
              <span className="text-[2.65rem] font-black leading-none">
                {offer.price}
              </span>
              <span className="ml-2 text-xs uppercase text-white/50">
                {offer.priceNote}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/72">
              {offer.description}
            </p>

            <ul className="mt-5 space-y-1.5 text-sm text-white/75">
              {offer.deliverables.slice(0, 5).map((item: string) => (
                <li key={item} className="flex gap-2">
                  <span className="text-axi-red">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to={`/services/${offer.slug}`}
              className="mt-5 inline-block rounded-xl border border-white/10 bg-black/30 px-5 py-2.5 text-sm font-black text-white/80 hover:border-red-600 hover:bg-white/5"
            >
              View Offer
            </Link>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-6">
        <div className="rounded-2xl border border-axi-border bg-black p-5 md:p-6">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-axi-red">
                Compare Options
              </p>
              <h2 className="mt-2 text-2xl font-black">
                Choose by problem stage, not package size.
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-white/65">
              Most clients should start with the diagnostic unless the problem is already clear and ready to build.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {comparison.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-axi-border bg-axi-gray/70 p-5"
              >
                <h3 className="text-lg font-black">{item.name}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <p>
                    <span className="font-black text-axi-red">Best for: </span>
                    <span className="text-white/72">{item.bestFor}</span>
                  </p>
                  <p>
                    <span className="font-black text-axi-red">Outcome: </span>
                    <span className="text-white/72">{item.outcome}</span>
                  </p>
                  <p>
                    <span className="font-black text-axi-red">Timing: </span>
                    <span className="text-white/72">{item.timing}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}