import CTA from "../components/CTA";
import PageHeader from "../components/PageHeader";

const pillars = [
  "Business Intelligence",
  "Customer Strategy",
  "Workflow Analysis",
  "Decision Systems",
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT AXI"
        title="Built for decision-making, not decoration."
        subtitle="AXI exists to cut through noise, expose what matters, and turn scattered business signals into practical next steps."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-4">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-axi-border bg-axi-gray p-8">
            <h2 className="text-3xl font-black">
              The work starts where reports usually stop.
            </h2>

            <p className="mt-5 text-white/75">
              Most businesses already have data. What they often lack is a clear
              decision layer: what is broken, what it is costing them, and what
              should be fixed first.
            </p>

            <p className="mt-5 text-white/75">
              AXI was built by Shawn Foster, a business intelligence and customer
              strategy operator combining data science, customer success,
              workflow analysis, and executive storytelling.
            </p>
          </div>

          <div className="grid gap-4">
            {pillars.map((item) => (
              <div
                key={item}
                className="card rounded-2xl border border-axi-border bg-black p-6"
              >
                <p className="font-black text-axi-red">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}