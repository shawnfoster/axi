import { useState } from "react";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] p-4 text-white placeholder:text-white/30 outline-none transition duration-200 focus:border-red-600 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(225,6,0,0.12)]";

  return (
    <>
      <PageHeader
        eyebrow="DISCOVERY"
        title="Send the signal."
        subtitle="Tell AXI what is happening, what feels broken, and what needs to change."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT PANEL */}
          <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 shadow-2xl">
            <p className="text-sm font-bold tracking-[0.25em] text-axi-red">
              AXI INTAKE
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight">
              This is not a contact form. It is the first signal scan.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/60">
              Give AXI enough context to identify what feels broken, where
              money may be leaking, and what should be fixed first.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="flex gap-3 rounded-xl border border-white/10 bg-black/30 p-4">
                <Clock className="mt-1 h-5 w-5 text-axi-red" />
                <div>
                  <p className="font-bold">60–90 seconds</p>
                  <p className="text-sm text-white/50">
                    Quick enough to complete. Sharp enough to matter.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-xl border border-white/10 bg-black/30 p-4">
                <ShieldCheck className="mt-1 h-5 w-5 text-axi-red" />
                <div>
                  <p className="font-bold">Built for clarity</p>
                  <p className="text-sm text-white/50">
                    The questions are designed to expose priority, urgency, and impact.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 rounded-xl border border-white/10 bg-black/30 p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 text-axi-red" />
                <div>
                  <p className="font-bold">Outcome-focused</p>
                  <p className="text-sm text-white/50">
                    You are not asking for a report. You are asking what to do next.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-[0_0_60px_rgba(0,0,0,0.45)] md:p-8"
          >
            <div className="mb-8 border-b border-white/10 pb-6">
              <p className="text-lg font-bold">Diagnostic intake</p>
              <p className="mt-2 text-sm text-white/50">
                You’ll get a focused breakdown of what’s broken and what to fix first.
              </p>
            </div>

            <div className="grid gap-6">

              {/* PROBLEM */}
              <label className="grid gap-2">
                <span className="text-sm font-bold">
                  What feels broken or unclear right now?
                </span>
                <textarea
                  placeholder={`Example:
"We have data across multiple tools but no clear view of what's driving revenue.
We're making decisions without confidence in the numbers."`}
                  className={`${inputClass} min-h-36`}
                  required
                />
              </label>

              {/* SYSTEMS */}
              <label className="grid gap-2">
                <span className="text-sm font-bold">
                  What systems are you currently using?
                </span>
                <textarea
                  placeholder="Google Analytics, CRM, spreadsheets, dashboards, POS, internal reports..."
                  className={`${inputClass} min-h-24`}
                  required
                />
              </label>

              {/* COST */}
              <label className="grid gap-2">
                <span className="text-sm font-bold">
                  What’s the cost of not fixing this?
                </span>
                <textarea
                  placeholder="Missed revenue, wasted time, unclear reporting, team confusion, bad decisions..."
                  className={`${inputClass} min-h-24`}
                  required
                />
              </label>

              {/* ROW */}
              <div className="grid gap-6 md:grid-cols-2">

                {/* TIMELINE */}
                <label className="grid gap-2">
                  <span className="text-sm font-bold">Timeline</span>
                  <select className={inputClass} required>
                    <option value="">Select timeline</option>
                    <option>ASAP</option>
                    <option>Next 1–2 weeks</option>
                    <option>This month</option>
                    <option>This quarter</option>
                    <option>Exploring options</option>
                  </select>
                </label>

                {/* BUDGET */}
                <label className="grid gap-2">
                  <span className="text-sm font-bold">Budget range</span>
                  <select className={inputClass} required>
                    <option value="">Select budget</option>
                    <option>Under $500</option>
                    <option>$500 – $1,500</option>
                    <option>$1,500 – $5,000</option>
                    <option>$5,000+</option>
                  </select>
                </label>
              </div>

              {/* CTA */}
              <button className="group mt-3 flex items-center justify-center gap-2 rounded-xl bg-axi-red px-7 py-4 font-black text-white transition hover:scale-[1.01] hover:opacity-95">
                Get My Breakdown
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </button>

              {/* SUCCESS */}
              {sent && (
                <div className="rounded-xl border border-red-600 bg-red-600/10 p-5">
                  <p className="flex items-center gap-2 text-lg font-black">
                    <CheckCircle2 className="h-5 w-5 text-axi-red" />
                    Signal received.
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    AXI will review your input and identify what’s broken,
                    what matters, and what to fix first.
                  </p>
                </div>
              )}
            </div>
          </form>

        </div>
      </section>
    </>
  );
}