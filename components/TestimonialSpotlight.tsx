"use client";

import { KeyboardEvent, MouseEvent } from "react";
import Container from "@/components/Container";
import { getSlideOffset, useAutoSlideshow } from "@/lib/useAutoSlideshow";
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
      <Container>
        <div
          className="relative h-80 touch-pan-y overflow-hidden sm:h-72"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, i) => {
            const offset = getSlideOffset(i, index, testimonials.length);
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            const handleClick = (e: MouseEvent) => {
              if (!isActive) {
                e.preventDefault();
                goTo(i);
              }
            };

            return (
              <div
                key={i}
                onClick={handleClick}
                aria-hidden={!isActive}
                style={{
                  transform: `translate(-50%, 0) translateX(${offset * 106}%) scale(${isActive ? 1 : 0.85})`,
                  opacity: isVisible ? (isActive ? 1 : 0.45) : 0,
                  zIndex: 10 - Math.abs(offset),
                  pointerEvents: isVisible ? "auto" : "none",
                  cursor: isActive ? "default" : "pointer",
                }}
                className="absolute left-1/2 top-0 flex h-full w-72 flex-col border border-cream/15 bg-cream/[0.04] p-8 text-center transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[26rem]"
              >
                <div className="flex justify-center gap-1 text-gold-light">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s}>&#9733;</span>
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-lg leading-relaxed text-cream sm:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                  {testimonial.role}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
