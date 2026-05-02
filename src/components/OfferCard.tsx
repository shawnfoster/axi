import { Link } from "react-router-dom";

export default function OfferCard({ offer, featured = false }: any) {
  return (
    <div
      className={`card rounded-xl border bg-axi-gray p-6 transition-all duration-300 ${
        featured
          ? "border-red-600 shadow-[0_0_35px_rgba(225,6,0,0.12)]"
          : "border-axi-border"
      } hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)]`}
    >
      {featured && (
        <p className="mb-3 inline-block rounded bg-axi-red px-3 py-1 text-xs font-black tracking-wide">
          START HERE
        </p>
      )}

      <h3 className="text-2xl font-black">{offer.title}</h3>

      <p className="mt-1 text-sm font-semibold text-axi-red">
        {offer.internalName}
      </p>

      <div className="mt-6">
        <span className="text-4xl font-black">{offer.price}</span>
        <span className="ml-2 text-xs uppercase text-white/50">
          {offer.priceNote}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-white/75">
        {offer.description}
      </p>

      <ul className="mt-6 space-y-2 text-sm text-white/75">
        {offer.deliverables.slice(0, 5).map((item: string) => (
          <li key={item} className="flex gap-2">
            <span className="text-axi-red">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/services/${offer.slug}`}
        className="mt-6 inline-block rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-black text-white/80 hover:border-red-600 hover:bg-white/5"
      >
        View Offer
      </Link>
    </div>
  );
}