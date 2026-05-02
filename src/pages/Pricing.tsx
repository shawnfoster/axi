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

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 pt-4 md:grid-cols-3">
        {offers.map((offer, index) => (
          <OfferCard key={offer.slug} offer={offer} featured={index === 0} />
        ))}
      </section>

      <CTA />
    </>
  );
}