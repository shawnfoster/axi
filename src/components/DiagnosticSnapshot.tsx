import { Activity, ArrowRight, CircleDollarSign, Crosshair } from "lucide-react";

const rows = [
  {
    label: "Signal Noise",
    value: "High",
    Icon: Activity,
  },
  {
    label: "Revenue Leak Risk",
    value: "Active",
    Icon: CircleDollarSign,
  },
  {
    label: "Priority Needed",
    value: "Immediate",
    Icon: Crosshair,
  },
];

export default function DiagnosticSnapshot() {
  return (
    <div className="signal-surface live-card rounded-xl border border-red-600/50 bg-black/65 p-7 shadow-[0_0_35px_rgba(225,6,0,0.18)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_70px_rgba(225,6,0,0.24)] md:p-9">
      <p className="mb-7 text-sm font-black tracking-[0.25em] text-white/85">
        <span className="mr-2 text-axi-red">AXI</span> DIAGNOSTIC SNAPSHOT
      </p>

      <div className="space-y-0">
        {rows.map(({ label, value, Icon }) => (
          <div
            key={label}
            className="signal-line grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-white/10 py-4"
          >
            <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
            <span className="text-white/80">{label}</span>
            <span className="font-black text-axi-red">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-7 grid grid-cols-[2.5rem_1fr_auto] items-center gap-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-red-600 text-axi-red">
          <ArrowRight className="h-5 w-5" />
        </span>
        <span className="font-black text-white/90">Recommended Action</span>
        <span className="font-black text-axi-red">Find What’s Wrong</span>
      </div>
    </div>
  );
}