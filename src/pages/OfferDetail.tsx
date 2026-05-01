import { useParams, Link } from "react-router-dom";
import { offers } from "../data/offers";

export default function OfferDetail() {
  const { slug } = useParams();
  const offer = offers.find((item) => item.slug === slug);

  if (!offer) {
    return <div className="px-6 py-20">Offer not found.</div>;
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-4 text-sm font-bold tracking-[0.25em] text-axi-red">
        {offer.internalName}
      </p>

      <h1 className="text-5xl font-black">{offer.title}</h1>

      <p className="mt-6 text-xl text-white/70">{offer.description}</p>

      <div className="mt-10 rounded-xl border border-axi-border bg-axi-gray p-8">
        <p className="text-sm uppercase text-white/50">{offer.priceNote}</p>
        <p className="mt-2 text-5xl font-black text-axi-red">{offer.price}</p>
        <p className="mt-2 text-white/60">{offer.turnaround}</p>
      </div>

      <h2 className="mt-12 text-2xl font-black">Deliverables</h2>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {offer.deliverables.map((item) => (
          <li key={item} className="rounded border border-axi-border bg-axi-gray p-4">
            ✓ {item}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="mt-10 inline-block rounded-md bg-axi-red px-7 py-3 font-bold"
      >
        Send the Signal
      </Link>
    </section>
  );
}