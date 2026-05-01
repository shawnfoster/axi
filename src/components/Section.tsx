export default function Section({ title, children }: any) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {title && (
        <h2 className="mb-8 text-3xl font-black uppercase tracking-tight">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}