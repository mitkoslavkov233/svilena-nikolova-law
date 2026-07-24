"use client";

import { KeyboardEvent } from "react";
import Link from "next/link";
import { useAutoSlideshow } from "@/lib/useAutoSlideshow";
import { PracticeArea } from "@/lib/data";

export default function PracticeAreaSlideshow({
  areas,
}: {
  areas: PracticeArea[];
}) {
  const { index, goTo } = useAutoSlideshow(areas.length);

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
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Практики"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
    >
      <div className="flex items-center gap-4 sm:gap-8">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Предишна практика"
          className="hidden shrink-0 text-2xl text-gold transition-colors hover:text-navy sm:block"
        >
          &larr;
        </button>

        <div className="relative h-80 w-full sm:h-96">
          {areas.map((area, i) => (
            <Link
              key={area.slug}
              href={`/praktika#${area.slug}`}
              aria-hidden={i !== index}
              tabIndex={i === index ? 0 : -1}
              className={`group absolute inset-0 flex flex-col overflow-hidden bg-navy p-10 transition-[opacity,background-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-navy-dark ${
                i === index
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
            >
              <span className="font-serif text-7xl leading-none text-cream/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-auto font-serif text-2xl font-semibold text-cream sm:text-3xl">
                {area.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
                {area.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-light">
                Научете повече
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Следваща практика"
          className="hidden shrink-0 text-2xl text-gold transition-colors hover:text-navy sm:block"
        >
          &rarr;
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Предишна практика"
          className="text-2xl text-gold"
        >
          &larr;
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Следваща практика"
          className="text-2xl text-gold"
        >
          &rarr;
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {areas.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Практика ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-gold" : "w-2 bg-navy/20 hover:bg-navy/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
