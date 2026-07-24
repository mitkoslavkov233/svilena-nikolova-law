"use client";

import { useEffect, useRef, useState } from "react";

export function useAutoSlideshow(count: number, intervalMs = 5000) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [count, intervalMs]);

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goTo = (n: number) => {
    stopAutoplay();
    setIndex((n + count) % count);
  };

  return { index, goTo };
}
