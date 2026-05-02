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
        Find What’s <span className="text-axi-red">Wrong</span>
      </h1>

      <p className="mt-4 text-white/75">
        This takes 60–90 seconds. You’ll get a focused breakdown of what’s broken
        and what to fix first.
      </p>

      {!sent ? (
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <textarea
            name="problem"
            required
            placeholder="What are you trying to fix?"
            className="w-full rounded-xl border border-axi-border bg-black p-4 text-white"
          />

          <textarea
            name="tools"
            placeholder="What data/tools do you currently use?"
            className="w-full rounded-xl border border-axi-border bg-black p-4 text-white"
          />

          <textarea 
            name="impact"
            placeholder="What happens if this does not get fixed?"
            className="w-full rounded-xl border border-axi-border bg-black p-4 text-white"
          />

          <input
            type="text"
            name="timeline"
            placeholder="Timeline"
            className="w-full rounded-xl border border-axi-border bg-black p-4 text-white"
          />

          <input
            type="text"
            name="budget"
            placeholder="Budget range"
            className="w-full rounded-xl border border-axi-border bg-black p-4 text-white"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full rounded-xl border border-axi-border bg-black p-4 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-axi-red py-4 font-black disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Diagnostic"}
          </button>
        </form>
      ) : (
        <div className="mt-10 text-lg font-bold text-axi-red">
          Submitted. I’ll review and get back to you.
        </div>
      )}
    </section>
  );
}