function renderTitle(title: string, accent: string | undefined, accentClass: string) {
  if (!accent) return title;
  const index = title.indexOf(accent);
  if (index === -1) return title;

  return (
    <>
      {title.slice(0, index)}
      <em className={`italic ${accentClass}`}>{accent}</em>
      {title.slice(index + accent.length)}
    </>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            isLight ? "text-gold-light" : "text-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-semibold text-balance sm:text-4xl ${
          isLight ? "text-cream" : "text-navy"
        }`}
      >
        {renderTitle(title, accent, isLight ? "text-gold-light" : "text-gold")}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isLight ? "text-cream/80" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
