import { Testimonial } from "@/lib/data";

export default function TestimonialCard({
  testimonial,
  tone = "dark",
}: {
  testimonial: Testimonial;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <figure
      className={`flex h-full flex-col border p-8 ${
        isLight ? "border-cream/15 bg-cream/[0.04]" : "border-navy/10 bg-white"
      }`}
    >
      <span className={`font-serif text-4xl leading-none ${isLight ? "text-gold-light" : "text-gold"}`}>
        &ldquo;
      </span>
      <blockquote
        className={`mt-2 flex-1 font-serif text-lg leading-relaxed ${
          isLight ? "text-cream/90" : "text-ink/85"
        }`}
      >
        {testimonial.quote}
      </blockquote>
      <figcaption
        className={`mt-6 text-xs font-semibold uppercase tracking-wider ${
          isLight ? "text-cream/50" : "text-ink/45"
        }`}
      >
        {testimonial.role}
      </figcaption>
    </figure>
  );
}
