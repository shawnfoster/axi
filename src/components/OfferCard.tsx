import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function OfferCard({ offer, featured = false }: any) {
  return (
    <div
      className={`rounded-2xl border p-6 transition ${
        featured
          ? "border-red-600 bg-[#111111] shadow-[0_0_40px_rgba(225,6,0,0.15)]"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <p className="text-sm font-bold text-axi-red">
        {offer.internalName}
      </p>

      <h3 className="mt-3 text-2xl font-black">
        {offer.title}
      </h3>

      <p className="mt-4 text-sm text-white/60">
        {offer.description}
      </p>

      <div className="mt-6">
        <p className="text-xs text-white/40">
          {offer.priceNote}
        </p>
        <p className="text-4xl font-black text-axi-red">
          {offer.price}
        </p>
      </div>

      <ul className="mt-6 space-y-3">
        {offer.deliverables.map((item: string) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="mt-1 h-4 w-4 text-axi-red" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/services/${offer.slug}`}
        className="group mt-6 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/30 px-5 py-3 font-bold transition hover:border-red-600"
      >
        View Offer
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </div>
  );
}