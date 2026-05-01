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
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-axi-red">
            ALGORITHMS BY IDEA
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-6xl">
            I turn messy business signals into{" "}
            <span className="text-axi-red">revenue decisions.</span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            AXI helps businesses find what’s broken, where money is leaking,
            and what to fix first — before wasted effort becomes wasted revenue.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services/find-whats-wrong"
              className="rounded-md bg-axi-red px-6 py-3 font-bold"
            >
              Find What’s Wrong
            </Link>
            <Link
              to="/services"
              className="rounded-md border border-axi-border px-6 py-3 font-bold"
            >
              View Services
            </Link>
          </div>

          <p className="mt-6 border-l-4 border-axi-red pl-4 text-sm font-bold text-white/80">
            You don’t need another report. You need to know what to do next.
          </p>
        </div>

        <DiagnosticSnapshot />
      </section>

      <section className="border-y border-axi-border bg-axi-gray/40">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="mb-6 text-2xl font-black uppercase">
            What <span className="text-axi-red">AXI</span> Finds
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {finds.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-axi-border bg-black p-5 text-center font-bold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-center text-3xl font-black uppercase">
          The <span className="text-axi-red">AXI</span> Offer Ladder
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard key={offer.slug} offer={offer} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-14 text-black">
        <h2 className="mb-10 text-center text-3xl font-black uppercase">
          The <span className="text-axi-red">AXI</span> Method
        </h2>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-5">
          {methodSteps.map((step, index) => (
            <div key={step.title}>
              <p className="text-sm font-bold text-axi-red">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-black">{step.title}</h3>
              <p className="mt-2 text-sm text-black/65">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}