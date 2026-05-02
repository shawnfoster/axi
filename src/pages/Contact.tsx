import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mgodvbav", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      alert("Something went wrong. Try again.");
    }

    setLoading(false);
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-4xl font-black">
        Get Your <span className="text-axi-red">Business Breakdown</span>
      </h1>

      <p className="mt-4 text-white/75">
        Tell AXI what feels broken. You’ll get a focused read on what’s unclear,
        what may be costing you money, and what to fix first.
      </p>

      {!sent ? (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            type="hidden"
            name="_subject"
            value="New AXI Diagnostic Submission"
          />

          <textarea
            name="problem"
            required
            placeholder="What feels broken, unclear, or harder than it should be?"
            className="min-h-32 w-full rounded-xl border border-axi-border bg-black p-4 text-white placeholder:text-white/35 focus:border-red-600 focus:outline-none"
          />

          <textarea
            name="tools"
            placeholder="What tools/data do you use now? CRM, spreadsheets, dashboards, POS, analytics..."
            className="min-h-24 w-full rounded-xl border border-axi-border bg-black p-4 text-white placeholder:text-white/35 focus:border-red-600 focus:outline-none"
          />

          <textarea
            name="impact"
            placeholder="What happens if this does not get fixed? Missed revenue, wasted time, bad reporting..."
            className="min-h-24 w-full rounded-xl border border-axi-border bg-black p-4 text-white placeholder:text-white/35 focus:border-red-600 focus:outline-none"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="timeline"
              placeholder="Timeline"
              className="w-full rounded-xl border border-axi-border bg-black p-4 text-white placeholder:text-white/35 focus:border-red-600 focus:outline-none"
            />

            <input
              type="text"
              name="budget"
              placeholder="Budget range"
              className="w-full rounded-xl border border-axi-border bg-black p-4 text-white placeholder:text-white/35 focus:border-red-600 focus:outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full rounded-xl border border-axi-border bg-black p-4 text-white placeholder:text-white/35 focus:border-red-600 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-axi-red py-4 font-black shadow-[0_10px_30px_rgba(225,6,0,0.25)] disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Get My Breakdown"}
          </button>
        </form>
      ) : (
        <div className="mt-10 rounded-xl border border-red-600/40 bg-axi-gray p-6">
          <p className="text-lg font-black text-axi-red">Signal received.</p>
          <p className="mt-2 text-white/75">
            I’ll review what you submitted and follow up with the next move.
          </p>
        </div>
      )}
    </section>
  );
}