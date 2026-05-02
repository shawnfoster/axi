export default function DiagnosticSnapshot() {
  return (
    <div className="rounded-xl border border-red-600 bg-axi-gray p-8 shadow-[0_0_30px_rgba(225,6,0,0.25)]">
      <p className="mb-8 text-sm font-bold tracking-[0.25em]">
        <span className="text-axi-red">AXI</span> DIAGNOSTIC SNAPSHOT
      </p>

      {[
        ["Signal Noise", "High"],
        ["Revenue Leak Risk", "Active"],
        ["Priority Needed", "Immediate"],
      ].map(([label, value]) => (
        <div
          key={label}
          className="flex justify-between border-b border-white/10 py-4"
        >
          <span className="text-white/70">{label}</span>
          <span className="font-bold text-axi-red">{value}</span>
        </div>
      ))}

      <div className="mt-8 flex justify-between">
        <span className="font-bold">Recommended Action</span>
        <span className="font-bold text-axi-red">Find What’s Wrong</span>
      </div>
    </div>
  );
}