"use client";

import { KeyboardEvent } from "react";
import Container from "@/components/Container";
import { useAutoSlideshow } from "@/lib/useAutoSlideshow";
import { Testimonial } from "@/lib/data";

export default function TestimonialSpotlight({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const { index, goTo, handleTouchStart, handleTouchEnd } = useAutoSlideshow(
    testimonials.length,
  );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    }
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Отзиви"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="bg-navy py-24 outline-none focus-visible:ring-2 focus-visible:ring-gold-light/50 sm:py-32"
    >
      <Container className="flex items-center justify-center gap-4 sm:gap-10">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Предишен отзив"
          className="hidden shrink-0 text-2xl text-gold-light transition-colors hover:text-cream sm:block"
        >
          &larr;
        </button>

        <div
          className="relative min-h-[260px] w-full max-w-2xl touch-pan-y sm:min-h-[300px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              aria-hidden={i !== index}
              className={`absolute inset-0 flex flex-col items-center text-center transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                i === index ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            >
              <div className="mb-6 flex justify-center gap-1 text-gold-light">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s}>&#9733;</span>
                ))}
              </div>
              <blockquote className="font-serif text-2xl leading-relaxed text-balance text-cream sm:text-3xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Следващ отзив"
          className="hidden shrink-0 text-2xl text-gold-light transition-colors hover:text-cream sm:block"
        >
          &rarr;
        </button>
      </Container>

      <div className="mt-10 flex justify-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Предишен отзив"
          className="text-2xl text-gold-light"
        >
          &larr;
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Следващ отзив"
          className="text-2xl text-gold-light"
        >
          &rarr;
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Отзив ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-gold-light" : "w-2 bg-cream/30 hover:bg-cream/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
