import PageHeader from "../components/PageHeader";
import { methodSteps } from "../data/method";
import CTA from "../components/CTA";

export default function Method() {
  return (
    <>
      <PageHeader
        eyebrow="AXI METHOD"
        title="Ingest. Diagnose. Model. Decide. Execute."
        subtitle="The method turns scattered business signals into clear action without drowning the client in noise."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-[#111111]">
          {methodSteps.map((step, index) => (
            <div
              key={step.title}
              className="grid gap-6 border-b border-white/10 p-8 last:border-b-0 md:grid-cols-[0.25fr_1fr]"
            >
              <p className="text-5xl font-black text-axi-red">0{index + 1}</p>
              <div>
                <h2 className="text-3xl font-black">{step.title}</h2>
                <p className="mt-3 max-w-2xl text-white/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}