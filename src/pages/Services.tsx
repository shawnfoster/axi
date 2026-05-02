import PageHeader from "../components/PageHeader";
import OfferCard from "../components/OfferCard";
import CTA from "../components/CTA";
import { offers } from "../data/offers";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICES"
        title="Start with clarity. Build with intention."
        subtitle="AXI services are structured around one simple ladder: find the problem, fix the problem, then keep the business aligned."
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