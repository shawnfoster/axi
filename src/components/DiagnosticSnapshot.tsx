import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function DiagnosticSnapshot() {
  const items = [
    { label: "Signal Noise", value: "High" },
    { label: "Revenue Leak Risk", value: "Active" },
    { label: "Priority Needed", value: "Immediate" },
    { label: "Recommended Action", value: "Find What’s Wrong" },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
      <p className="text-sm font-bold tracking-[0.25em] text-axi-red">
        AXI DIAGNOSTIC SNAPSHOT
      </p>

      <div className="mt-6 grid gap-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex justify-between rounded-xl border border-white/10 bg-black/30 p-4"
          >
            <span className="text-sm text-white/60">{item.label}</span>
            <span className="font-bold text-white">{item.value}</span>
          </div>
        ))}
      </div>

      <Link
        to="/services/find-whats-wrong"
        className="group mt-6 flex items-center justify-center gap-2 rounded-xl bg-axi-red px-6 py-3 font-black text-white transition hover:scale-[1.02]"
      >
        Find What’s Wrong
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </div>
  );
}