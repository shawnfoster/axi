import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CircleDollarSign,
  Eye,
  Gauge,
  Workflow,
} from "lucide-react";
import DiagnosticSnapshot from "../components/DiagnosticSnapshot";
import OfferCard from "../components/OfferCard";
import CTA from "../components/CTA";
import { offers } from "../data/offers";
import { methodSteps } from "../data/method";

const finds = [
  { title: "Broken workflows", icon: Workflow, text: "Where process drag is slowing execution." },
  { title: "Revenue leaks", icon: CircleDollarSign, text: "Where money is slipping through the cracks." },
  { title: "Customer friction", icon: Eye, text: "Where people stall, churn, or disappear." },
  { title: "Reporting blind spots", icon: BarChart3, text: "Where dashboards show data but not decisions." },
  { title: "Operational drag", icon: Gauge, text: "Where teams burn time without moving outcomes." },
  { title: "Missed opportunities", icon: Brain, text: "Where signal exists but action is unclear." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,6,0,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.07),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold tracking-[0.35em] text-axi-red">
              ALGORITHMS BY IDEA
            </p>

            <h1 className="text-5xl font-black leading-[0.95] md:text-7xl">
              I turn messy business signals into{" "}
              <span className="text-axi-red">revenue decisions.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              AXI helps businesses find what’s broken, where money is leaking,
              and what to fix first — before wasted effort becomes wasted revenue.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/services/find-whats-wrong"
                className="group flex items-center gap-2 rounded-xl bg-axi-red px-7 py-4 font-black text-white transition hover:scale-[1.02] hover:opacity-95"
              >
                Find What’s Wrong
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 font-black text-white transition hover:border-red-600 hover:bg-white/[0.06]"
              >
                View Services
              </Link>
            </div>

            <p className="mt-8 border-l-4 border-axi-red pl-5 text-sm font-bold text-white/75">
              You don’t need another report. You need to know what to do next.
            </p>
          </div>

          <DiagnosticSnapshot />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.25em] text-axi-red">
              SIGNAL SCAN
            </p>
            <h2 className="mt-3 text-4xl font-black">
              What <span className="text-axi-red">AXI</span> finds
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-white/55">
            Most businesses don’t lack data. They lack clarity on what actually matters.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {finds.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 transition hover:border-red-600/60 hover:shadow-[0_0_40px_rgba(225,6,0,0.15)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                  <Icon className="h-5 w-5 text-axi-red" />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold tracking-[0.25em] text-axi-red">
              OFFER LADDER
            </p>
            <h2 className="mt-3 text-4xl font-black">
              Find it. Fix it. Keep it fixed.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55">
              AXI starts with clarity, then builds only what the business actually needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {offers.map((offer, index) => (
              <OfferCard key={offer.slug} offer={offer} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold tracking-[0.25em] text-axi-red">
          METHOD
        </p>

        <h2 className="mt-3 text-4xl font-black">
          Calm intake. Sharp diagnosis. Clean execution.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {methodSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="text-sm font-black text-axi-red">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-black">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-8 md:p-10">
          <p className="text-sm font-bold tracking-[0.25em] text-axi-red">
            BUILT BY AN OPERATOR
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            AXI is built for leaders who need decisions, not decoration.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
            AXI was built by Shawn Foster, a business intelligence and customer
            strategy operator who combines data science, customer success,
            workflow analysis, and executive storytelling.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Business Intelligence", "Customer Strategy", "Decision Systems"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/30 p-4 font-bold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}