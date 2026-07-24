"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroPhoto({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="hero-parallax-layer absolute inset-[-8%]">
        <Image
          src={src}
          alt={alt}
          fill
          preload
          onLoad={() => setLoaded(true)}
          className={`object-cover transition-all duration-[1400ms] ease-out ${
            loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/50" />
      <div className="absolute inset-0 bg-navy-dark/30" />
    </div>
  );
}
