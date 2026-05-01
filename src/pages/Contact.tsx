import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="DISCOVERY"
        title="Send the signal."
        subtitle="Tell AXI what is happening, what feels broken, and what needs to change."
      />

      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-20 grid max-w-3xl gap-5 px-6"
      >
        {[
          "Name",
          "Email",
          "Company",
          "What are you trying to fix?",
          "What data/tools do you currently use?",
          "What happens if this does not get fixed?",
          "Timeline",
          "Budget range",
        ].map((label) => (
          <label key={label} className="grid gap-2">
            <span className="text-sm font-bold">{label}</span>
            <textarea
              className="min-h-12 rounded-md border border-axi-border bg-axi-gray p-3 text-white outline-none focus:border-red-600"
              required
            />
          </label>
        ))}

        <button className="rounded-md bg-axi-red px-7 py-3 font-bold">
          Send the Signal
        </button>

        {sent && (
          <p className="rounded-md border border-red-600 bg-axi-gray p-4 text-center font-bold">
            Signal received. AXI will review the problem.
          </p>
        )}
      </form>
    </>
  );
}