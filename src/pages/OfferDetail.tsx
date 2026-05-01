import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { offers } from "../data/offers";
import CTA from "../components/CTA";

export default function OfferDetail() {
  const { slug } = useParams();
  const offer = offers.find((item) => item.slug === slug);

  if (!offer) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-black">Offer not found.</h1>
        <Link to="/services" className="mt-6 inline-block text-axi-red font-bold">
          Back to Services
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,6,0,0.22),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-axi-red">
              {offer.internalName}
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">
              {offer.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
              {offer.description}
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-axi-red px-7 py-4 font-black text-white transition hover:scale-[1.01]"
            >
              Get My Breakdown
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="rounded-2xl border border-red-600/70 bg-[#111111] p-8 shadow-[0_0_60px_rgba(225,6,0,0.12)]">
            <p className="text-sm uppercase text-white/50">{offer.priceNote}</p>
            <p className="mt-2 text-6xl font-black text-axi-red">{offer.price}</p>
            <p className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4 text-white/70">
              Turnaround: <span className="font-bold text-white">{offer.turnaround}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold tracking-[0.25em] text-axi-red">
          DELIVERABLES
        </p>
        <h2 className="mt-3 text-4xl font-black">What you get</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {offer.deliverables.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-axi-red" />
              <p className="font-bold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}