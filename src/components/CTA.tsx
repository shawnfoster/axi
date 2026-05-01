import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-red-600 bg-axi-gray p-10 text-center">
        <h2 className="text-4xl font-black">
          Bring the problem. <span className="text-axi-red">AXI will find the signal.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/65">
          A focused breakdown of your business to identify what’s costing you money and what to fix first.
        </p>
        <Link
          to="/services/find-whats-wrong"
          className="mt-8 inline-block rounded-md bg-axi-red px-7 py-3 font-bold"
        >
          Find What’s Wrong
        </Link>
      </div>
    </section>
  );
}