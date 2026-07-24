import Container from "@/components/Container";

export type Stat = {
  value: string;
  label: string;
};

function renderHeading(heading: string, accent?: string) {
  if (!accent) return heading;
  const index = heading.indexOf(accent);
  if (index === -1) return heading;

  return (
    <>
      {heading.slice(0, index)}
      <em className="italic text-gold-light">{accent}</em>
      {heading.slice(index + accent.length)}
    </>
  );
}

export default function StatBand({
  stats,
  heading,
  accent,
}: {
  stats: Stat[];
  heading?: string;
  accent?: string;
}) {
  return (
    <section className="bg-navy-dark py-16 sm:py-20">
      <Container
        className={`grid grid-cols-1 gap-12 ${
          heading ? "lg:grid-cols-[minmax(0,340px)_1fr] lg:items-center lg:gap-16" : ""
        }`}
      >
        {heading && (
          <p className="font-serif text-3xl font-semibold text-balance text-cream sm:text-4xl">
            {renderHeading(heading, accent)}
          </p>
        )}
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl font-semibold text-gold-light sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
