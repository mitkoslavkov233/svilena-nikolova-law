"use client";

import { ReactNode, useRef } from "react";

export default function Carousel({
  children,
  tone = "light",
}: {
  children: ReactNode[];
  tone?: "dark" | "light";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isLight = tone === "light";

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelector<HTMLElement>("[data-carousel-item]");
    const amount = item ? item.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const arrowClasses = isLight
    ? "text-gold hover:text-navy"
    : "text-gold-light hover:text-cream";

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="mt-8 flex items-center gap-8">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Предишен"
          className={`group flex items-center gap-0.5 transition-colors ${arrowClasses}`}
        >
          <span className="text-base leading-none">&larr;</span>
          <span className="h-px w-10 bg-current transition-all duration-200 group-hover:w-14" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Следващ"
          className={`group flex items-center gap-0.5 transition-colors ${arrowClasses}`}
        >
          <span className="h-px w-10 bg-current transition-all duration-200 group-hover:w-14" />
          <span className="text-base leading-none">&rarr;</span>
        </button>
      </div>
    </div>
  );
}
