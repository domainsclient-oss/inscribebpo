"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Counts from 0 to `value` once the element scrolls into view. Uses
 * IntersectionObserver so the animation fires on load for stats already in the
 * viewport, and rAF for frame-accurate easing. Honours reduced-motion by
 * jumping straight to the final value.
 */
export function CountUp({
  value,
  suffix = "",
  duration = 2000,
  grouped = false,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  /** Render thousands separators (1,000,000) instead of raw digits. */
  grouped?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        // Run once — the count-up should not replay on re-entry.
        observer.disconnect();

        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduced) {
          setDisplay(value);
          return;
        }

        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast start, gentle settle
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

          setDisplay(Math.round(eased * value));

          if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [duration, value]);

  return (
    <span className={cn("tabular-nums", className)} ref={ref}>
      {grouped ? display.toLocaleString("en-US") : display}
      {suffix}
    </span>
  );
}
