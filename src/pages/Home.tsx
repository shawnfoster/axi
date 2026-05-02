import { Link } from "react-router-dom";
import {
  BarChart3,
  CircleDollarSign,
  Database,
  EyeOff,
  Rocket,
  Search,
  Settings,
  UserRound,
  Workflow,
  Wrench,
} from "lucide-react";
import DiagnosticSnapshot from "../components/DiagnosticSnapshot";
import CTA from "../components/CTA";
import { offers } from "../data/offers";
import { methodSteps } from "../data/method";

const finds = [
  { title: "Broken workflows", Icon: Wrench },
  { title: "Revenue leaks", Icon: CircleDollarSign },
  { title: "Customer friction", Icon: UserRound },
  { title: "Reporting blind spots", Icon: EyeOff },
  { title: "Operational drag", Icon: Settings },
  { title: "Missed opportunities", Icon: BarChart3 },
];

const methodIcons = [Database, Search, Settings, Workflow, Rocket];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-axi-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_24%,rgba(225,6,0,0.18),transparent_28%)]" />
        <div className="pointer-events-none absolute -right-10 top-0 hidden h-full w-[32%] skew-x-[-18deg] bg-gradient-to-b from-white/[0.08] via-red-600/20 to-red-700/55 opacity-80 lg:block" />
        <div className="pointer-events-none absolute right-[8%] top-0 hidden h-full w-[9%] skew-x-[-18deg] bg-red-700/80 blur-[1px] lg:block" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-12 md:grid-cols-[1fr_0.92fr] md:py-16 lg:py-20">
          <div>
            <p className="text-sm font-black tracking-[0.32em] text-axi-red">
              ALGORITHMS BY IDEA
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.03] md:text-6xl lg:text-7xl">
              I turn messy business signals into{" "}
              <span className="text-axi-red">revenue decisions.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-white/78">
              AXI helps businesses find what’s broken, where money is leaking,
              and what to fix first — before wasted effort becomes wasted revenue.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-xl bg-axi-red px-8 py-4 font-black text-white shadow-[0_14px_40px_rgba(225,6,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_65px_rgba(225,6,0,0.36)] active:scale-[0.98]"
              >
                Find What’s Wrong
              </Link>

              <Link
                to="/services"
                className="rounded-xl border border-white/35 bg-black/30 px-8 py-4 font-black text-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-600 hover:bg-white/5 active:scale-[0.98]"
              >
                View Services
              </Link>
            </div>

            <p className="mt-6 flex items-center gap-4 text-sm font-black text-white/85">
              <span className="h-[3px] w-8 rounded-full bg-axi-red" />
              You don’t need another report. You need to know what to do next.
            </p>
          </div>

          <DiagnosticSnapshot />
        </div>
      </section>

      <section className="border-b border-axi-border bg-black/70 py-6">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-3 text-xl font-black uppercase tracking-wide">
            What <span className="text-axi-red">AXI</span> Finds
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {finds.map(({ title, Icon }) => (
              <div
                key={title}
                className="card flex min-h-24 flex-col items-center justify-center rounded-xl border border-axi-border bg-white/[0.025] p-4 text-center hover:border-red-600 hover:bg-white/[0.045]"
              >
                <Icon className="mb-3 h-8 w-8 text-axi-red" strokeWidth={1.7} />
                <p className="max-w-28 text-sm font-black leading-tight text-white">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="mb-4 text-center text-2xl font-black uppercase tracking-wide">
          The <span className="text-axi-red">AXI</span> Offer Ladder
        </h2>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr_0.92fr]">
          {offers.map((offer, index) => (
            <div
              key={offer.slug}
              className={`card relative flex h-full flex-col rounded-xl border bg-axi-gray/80 p-6 ${
                index === 0
                  ? "border-red-600 shadow-[0_0_30px_rgba(225,6,0,0.16)]"
                  : "border-axi-border"
              }`}
            >
              {index === 0 && (
                <p className="absolute -top-3 left-6 rounded bg-axi-red px-4 py-1 text-xs font-black tracking-wide text-white">
                  START HERE
                </p>
              )}

              <div className="flex flex-1 flex-col">
                <h3 className="text-2xl font-black">
                  {index + 1}. {offer.title}
                </h3>
                <p className="mt-2 text-sm font-black text-axi-red">
                  {offer.internalName}
                </p>

                <ul className="mt-5 space-y-2 text-sm text-white/80">
                  {offer.deliverables.slice(0, 5).map((item: string) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-axi-red">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm leading-6 text-white/70">
                  {offer.description}
                </p>
              </div>

              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="text-xs font-bold uppercase tracking-wide text-white/45">
                  Starting at
                </p>
                <div className="mt-1 flex items-end gap-3">
                  <span className="text-4xl font-black">{offer.price}</span>
                  <span className="pb-1 text-xs text-white/45">{offer.priceNote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-7 text-black">
        <h2 className="mb-6 text-center text-2xl font-black uppercase tracking-wide">
          The <span className="text-axi-red">AXI</span> Method
        </h2>

        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-5">
          {methodSteps.map((step, index) => {
            const Icon = methodIcons[index] ?? Database;

            return (
              <div key={step.title} className="relative flex gap-4 md:block">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/20 bg-white shadow-sm md:mx-auto md:h-16 md:w-16">
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </div>

                <div className="md:mt-3 md:text-center">
                  <h3 className="text-base font-black">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-black/68">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}