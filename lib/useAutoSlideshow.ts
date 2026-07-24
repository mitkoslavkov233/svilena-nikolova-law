"use client";

import { TouchEvent, useEffect, useRef, useState } from "react";

const SWIPE_THRESHOLD = 40;

export function useAutoSlideshow(count: number, intervalMs = 5000) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

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

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStart.current) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }
    goTo(deltaX < 0 ? index + 1 : index - 1);
  };

  return { index, goTo, handleTouchStart, handleTouchEnd };
}

// Shortest-path distance from `i` to the active `index` on a looping track,
// e.g. with count=4: index=0 → item 3 is -1 away, not +3.
export function getSlideOffset(i: number, index: number, count: number) {
  let offset = i - index;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}
