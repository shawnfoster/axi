import { Link } from "react-router-dom";

export default function OfferCard({ offer, featured = false }: any) {
  return (
    <div
      className={`rounded-xl border bg-axi-gray p-6 ${
        featured ? "border-red-600" : "border-axi-border"
      }`}
    >
      {featured && (
        <p className="mb-3 inline-block rounded bg-axi-red px-3 py-1 text-xs font-bold">
          START HERE
        </p>
      )}

      <h3 className="text-2xl font-bold">{offer.title}</h3>
      <p className="mt-1 text-sm text-axi-red">{offer.internalName}</p>

      <div className="mt-6">
        <span className="text-4xl font-bold">{offer.price}</span>
        <span className="ml-2 text-xs uppercase text-white/50">
          {offer.priceNote}
        </span>
      </div>

      <p className="mt-5 text-sm text-white/65">{offer.description}</p>

      <ul className="mt-6 space-y-2 text-sm text-white/80">
        {offer.deliverables.slice(0, 5).map((item: string) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>

      <Link
        to={`/services/${offer.slug}`}
        className="mt-6 inline-block rounded-md bg-axi-red px-5 py-2 text-sm font-bold"
      >
        View Offer
      </Link>
    </div>
  );
}