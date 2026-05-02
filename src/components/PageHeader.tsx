export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-8 pt-12 md:pb-10 md:pt-14">
      <p className="text-sm font-semibold tracking-[0.3em] text-axi-red">
        {eyebrow}
      </p>

      <h1 className="mt-5 w-full text-5xl font-black leading-[1.02] tracking-tight md:text-6xl">
        {title}
      </h1>

      <p className="mt-4 w-full text-lg text-white/75">
        {subtitle}
      </p>
    </section>
  );
}