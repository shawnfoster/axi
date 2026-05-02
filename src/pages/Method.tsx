import PageHeader from "../components/PageHeader";
import { methodSteps } from "../data/method";
import CTA from "../components/CTA";

export default function Method() {
  return (
    <>
      <PageHeader
        eyebrow="AXI METHOD"
        title="Turn signals into decisions. Then execute."
        subtitle="The method is built to turn scattered business signals into clear action."
      />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-4">
        {methodSteps.map((step, index) => (
          <div key={step.title} className="border-b border-axi-border py-8">
            <p className="text-sm font-bold text-axi-red">0{index + 1}</p>
            <h2 className="mt-2 text-3xl font-black">{step.title}</h2>
            <p className="mt-3 text-white/65">{step.description}</p>
          </div>
        ))}
      </section>

      <CTA />
    </>
  );
}