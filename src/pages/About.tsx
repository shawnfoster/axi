import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT AXI"
        title="Built for leaders who need decisions, not decoration."
        subtitle="AXI combines business intelligence, customer strategy, workflow analysis, and executive storytelling."
      />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-8">
            <p className="text-lg leading-8 text-white/70">
              AXI was built by Shawn Foster, a business intelligence and customer
              strategy operator who combines data science, customer success,
              workflow analysis, and executive storytelling.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/70">
              The work is built for leaders who do not just need another report.
              They need a decision system: a practical way to see what is happening,
              understand why it matters, and act before opportunity leaks away.
            </p>
          </div>

          <div className="grid gap-4">
            {["Business Intelligence", "Customer Strategy", "Workflow Analysis", "Decision Systems"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#111111] p-6">
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