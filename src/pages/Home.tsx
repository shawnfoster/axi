import { Link } from "react-router-dom";
import DiagnosticSnapshot from "../components/DiagnosticSnapshot";
import OfferCard from "../components/OfferCard";
import CTA from "../components/CTA";
import { offers } from "../data/offers";
import { methodSteps } from "../data/method";

const finds = [
  "Broken workflows",
  "Revenue leaks",
  "Customer friction",
  "Reporting blind spots",
  "Operational drag",
  "Missed opportunities",
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:py-36">
        <div>
          <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-axi-red">
            ALGORITHMS BY IDEA
          </p>

          <h1 className="text-5xl font-black leading-[0.92] md:text-7xl">
            I turn messy business signals into{" "}
            <span className="text-axi-red">revenue decisions.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-white/70">
            AXI helps businesses find what’s broken, where money is leaking,
            and what to fix first — before wasted effort becomes wasted revenue.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/services/find-whats-wrong"
              className="rounded-xl bg-axi-red px-7 py-4 font-black shadow-[0_10px_30px_rgba(225,6,0,0.25)] transition hover:scale-[1.02] hover:opacity-95"
            >
              Find What’s Wrong
            </Link>

            <Link
              to="/services"
              className="rounded-xl border border-axi-border px-7 py-4 font-semibold text-white/80 transition hover:border-red-600"
            >
              View Services
            </Link>
          </div>

          <p className="mt-8 border-l-4 border-axi-red pl-5 text-sm font-semibold text-white/80">
            You don’t need another report. You need to know what to do next.
          </p>
        </div>

        <DiagnosticSnapshot />
      </section>

      <section className="border-y border-axi-border bg-axi-gray/40">
        <div className="section mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-3xl font-black uppercase">
            What <span className="text-axi-red">AXI</span> Finds
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {finds.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-axi-border bg-black p-6 text-center font-semibold text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-black uppercase">
          The <span className="text-axi-red">AXI</span> Offer Ladder
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard key={offer.slug} offer={offer} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="section bg-white px-6 text-black">
        <h2 className="mb-12 text-center text-3xl font-black uppercase">
          The <span className="text-axi-red">AXI</span> Method
        </h2>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 lg:grid-cols-5">
          {methodSteps.map((step, index) => (
            <div key={step.title}>
              <p className="text-sm font-semibold text-axi-red">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-black">{step.title}</h3>
              <p className="mt-3 text-sm text-black/65">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}