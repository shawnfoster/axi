import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT AXI"
        title="Built for leaders who need decisions, not decoration."
        subtitle="AXI was built by Shawn Foster, a business intelligence and customer strategy operator who combines data science, customer success, workflow analysis, and executive storytelling."
      />

      <section className="mx-auto max-w-4xl px-6 py-8 text-lg leading-8 text-white/70">
        <p>
          The work is built for leaders who do not just need another report —
          they need a decision system. AXI exists to cut through noise, expose
          what matters, and turn scattered signals into practical next steps.
        </p>
      </section>

      <CTA />
    </>
  );
}