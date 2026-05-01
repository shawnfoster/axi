export default function PageHeader({ eyebrow, title, subtitle }: any) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {eyebrow && (
        <p className="mb-4 text-sm font-bold tracking-[0.25em] text-axi-red">
          {eyebrow}
        </p>
      )}
      <h1 className="max-w-4xl text-5xl font-black leading-tight">{title}</h1>
      {subtitle && <p className="mt-6 max-w-3xl text-lg text-white/65">{subtitle}</p>}
    </section>
  );
}