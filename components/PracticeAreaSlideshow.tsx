"use client";

import { KeyboardEvent, MouseEvent } from "react";
import Link from "next/link";
import { getSlideOffset, useAutoSlideshow } from "@/lib/useAutoSlideshow";
import { PracticeArea } from "@/lib/data";

export default function PracticeAreaSlideshow({
  areas,
}: {
  areas: PracticeArea[];
}) {
  const { index, goTo, handleTouchStart, handleTouchEnd } = useAutoSlideshow(
    areas.length,
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
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Практики"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
    >
      <div
        className="relative h-80 touch-pan-y overflow-hidden sm:h-96"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {areas.map((area, i) => {
          const offset = getSlideOffset(i, index, areas.length);
          const isActive = offset === 0;
          const isVisible = Math.abs(offset) <= 1;

          const handleClick = (e: MouseEvent) => {
            if (!isActive) {
              e.preventDefault();
              goTo(i);
            }
          };

          return (
            <Link
              key={area.slug}
              href={`/praktika#${area.slug}`}
              onClick={handleClick}
              aria-hidden={!isActive}
              tabIndex={isActive ? 0 : -1}
              style={{
                transform: `translate(-50%, 0) translateX(${offset * 108}%) scale(${isActive ? 1 : 0.85})`,
                opacity: isVisible ? (isActive ? 1 : 0.55) : 0,
                zIndex: 10 - Math.abs(offset),
                pointerEvents: isVisible ? "auto" : "none",
              }}
              className="group absolute left-1/2 top-0 flex h-full w-64 flex-col overflow-hidden bg-navy p-8 transition-[transform,opacity,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-navy-dark sm:w-80 sm:p-10"
            >
              <span className="font-serif text-7xl leading-none text-gold-light/40">
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
          );
        })}
      </div>
    </div>
  );
}
