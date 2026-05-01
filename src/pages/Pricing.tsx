import PageHeader from "../components/PageHeader";
import OfferCard from "../components/OfferCard";
import CTA from "../components/CTA";
import { offers } from "../data/offers";

export default function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="PRICING"
        title="Simple entry point. Serious upside."
        subtitle="Start with Find What’s Wrong, then build only what the business actually needs."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard key={offer.slug} offer={offer} featured={index === 0} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center text-white/60">
          Pricing is scoped around clarity first. The diagnostic identifies whether a full build or retainer is actually needed.
        </div>
      </section>

      <CTA />
    </>
  );
}