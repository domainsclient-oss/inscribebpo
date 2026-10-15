import { cn } from "@/lib/utils";

/**
 * Animated squiggle accent. The wave is an inline SVG tiled on the x-axis so
 * it can scroll seamlessly; the tiled strip is 40px wider than the visible
 * area and slides with a compositor-only transform (see `wave-line` in
 * globals.css). Motion is disabled under `prefers-reduced-motion`.
 */
export function WaveLine({
  className,
  color = "#ea551c",
  width = 118,
}: {
  className?: string;
  color?: string;
  width?: number | string;
}) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="12" viewBox="0 0 40 12"><path d="M0 6c3.3-5 6.7-5 10 0s6.7 5 10 0 6.7-5 10 0 6.7 5 10 0" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/></svg>`;

  return (
    <span
      aria-hidden="true"
      className={cn("block h-3 overflow-hidden", className)}
      style={{ width: typeof width === "number" ? `${width}px` : width }}
    >
      <span
        className="wave-line block h-full w-[calc(100%+40px)] will-change-transform"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "40px 12px",
        }}
      />
    </span>
  );
}
