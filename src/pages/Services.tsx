import PageHeader from "../components/PageHeader";
import OfferCard from "../components/OfferCard";
import CTA from "../components/CTA";
import { offers } from "../data/offers";

const capabilities = [
  "Business Intelligence Dashboard Build",
  "Customer Success & Retention Analysis",
  "Workflow & Operations Audit",
  "Career Intelligence & Positioning System",
  "Custom Decision Engine Build",
  "Executive Reporting System",
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICES"
        title="Start with clarity. Then build the system."
        subtitle="AXI services follow one clean ladder: find the problem, fix the problem, then keep the business aligned."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard key={offer.slug} offer={offer} featured={index === 0} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-8">
          <p className="text-sm font-bold tracking-[0.25em] text-axi-red">
            CAPABILITIES
          </p>
          <h2 className="mt-3 text-3xl font-black">
            Built around the work that actually moves decisions.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/30 p-5 font-bold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}