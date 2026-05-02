import { ArrowRight, Database, Rocket, Search, Settings, Workflow } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { methodSteps } from "../data/method";
import CTA from "../components/CTA";

const methodIcons = [Database, Search, Workflow, Settings, Rocket];

export default function Method() {
  return (
    <>
      <PageHeader
        eyebrow="AXI METHOD"
        title="Turn signals into decisions. Then execute."
        subtitle="The method is built to turn scattered business signals into clear action."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-4">
        <div className="rounded-3xl border border-axi-border bg-axi-gray/70 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] md:p-7">
          <div className="grid gap-4 lg:grid-cols-5">
            {methodSteps.map((step, index) => {
              const Icon = methodIcons[index] ?? Database;
              const isLast = index === methodSteps.length - 1;

              return (
                <div key={step.title} className="relative">
                  <div className="card h-full rounded-2xl border border-axi-border bg-black p-6 hover:border-red-600 hover:bg-white/[0.035]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white">
                        <Icon className="h-7 w-7" strokeWidth={1.8} />
                      </div>

                      <p className="text-sm font-black text-axi-red">
                        0{index + 1}
                      </p>
                    </div>

                    <h2 className="mt-8 text-2xl font-black">{step.title}</h2>
                    <p className="mt-4 text-sm leading-6 text-white/65">
                      {step.description}
                    </p>
                  </div>

                  {!isLast && (
                    <div className="hidden lg:absolute lg:-right-4 lg:top-1/2 lg:z-10 lg:flex lg:h-8 lg:w-8 lg:-translate-y-1/2 lg:items-center lg:justify-center lg:rounded-full lg:border lg:border-red-600/40 lg:bg-black lg:text-axi-red">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-axi-border bg-black p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-axi-red">
              Input
            </p>
            <p className="mt-3 text-white/70">
              Data, screenshots, workflows, tools, customer signals, and context.
            </p>
          </div>

          <div className="rounded-2xl border border-axi-border bg-black p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-axi-red">
              Decision Layer
            </p>
            <p className="mt-3 text-white/70">
              What is broken, what it costs, what matters, and what gets fixed first.
            </p>
          </div>

          <div className="rounded-2xl border border-axi-border bg-black p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-axi-red">
              Output
            </p>
            <p className="mt-3 text-white/70">
              A cleaner operating system for action, reporting, and execution.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}