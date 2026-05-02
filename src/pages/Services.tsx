import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";

const serviceAreas = [
  {
    title: "Business Diagnostic",
    label: "Find what is broken",
    text: "A focused review of workflows, reporting, customer friction, and revenue leakage so the business knows what to fix first.",
    points: ["Revenue leak review", "Workflow friction scan", "Priority stack", "Next-step roadmap"],
  },
  {
    title: "Clean Data & Reporting",
    label: "Make the numbers usable",
    text: "Clean, structure, reconcile, and organize messy spreadsheets, exports, dashboards, or operating reports so decisions are based on reality instead of noise.",
    points: ["Spreadsheet cleanup", "Data structure repair", "Report reconciliation", "Dashboard-ready datasets"],
  },
  {
    title: "Dashboard & Decision Systems",
    label: "Turn signals into action",
    text: "Build dashboards, trackers, scorecards, and decision tools that show what matters, what changed, and what action should happen next.",
    points: ["KPI dashboards", "Executive scorecards", "Decision trackers", "Operational command views"],
  },
  {
    title: "Workflow & Process Improvement",
    label: "Remove operational drag",
    text: "Map how work actually moves, identify bottlenecks, and redesign processes so teams stop losing time in manual handoffs and unclear ownership.",
    points: ["Workflow mapping", "Process redesign", "Handoff clarity", "SOP support"],
  },
  {
    title: "Customer & Revenue Intelligence",
    label: "Understand behavior",
    text: "Analyze customer activity, retention signals, sales patterns, and friction points to uncover what drives growth, churn, loyalty, and missed opportunity.",
    points: ["Customer behavior analysis", "Retention signals", "Sales pattern review", "Opportunity discovery"],
  },
  {
    title: "Ongoing Decision Support",
    label: "Stay aligned after the fix",
    text: "Monthly reporting, dashboard iteration, advisory support, and decision reviews so the business keeps improving instead of drifting back into confusion.",
    points: ["Monthly reporting", "Dashboard iteration", "Decision reviews", "Advisory support"],
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICES"
        title="Start with clarity. Build with intention."
        subtitle="AXI services are built around a simple operating truth: clean the signal, understand the problem, then build the system that helps the business act."
      />

      <section className="mx-auto max-w-7xl px-6 pb-6 pt-4">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((service) => (
            <div
              key={service.title}
              className="card flex h-full flex-col rounded-2xl border border-axi-border bg-axi-gray p-6 hover:border-red-600 hover:bg-white/[0.035]"
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-axi-red">
                {service.label}
              </p>

              <h2 className="mt-4 text-2xl font-black leading-tight">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/70">
                {service.text}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-white/78">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-axi-red">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-red-600/35 bg-black p-6 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-axi-red">
              Not sure where to start?
            </p>
            <p className="mt-3 max-w-3xl text-white/75">
              Start with the diagnostic when the problem feels unclear. Move into clean data, dashboards, workflow repair, or ongoing support once the signal is obvious.
            </p>
          </div>

          <Link
            to="/pricing"
            className="mt-5 inline-block shrink-0 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-black text-white/85 hover:border-red-600 hover:bg-white/[0.07] md:mt-0"
          >
            Compare Pricing
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}