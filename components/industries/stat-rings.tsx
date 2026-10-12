import { cn } from "@/lib/utils";

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * A single progress ring: a track circle with the brand arc drawn over it.
 * Pure SVG + `stroke-dasharray`, so it renders on the server with no JS.
 */
function StatRing({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center bg-paper px-6 py-9">
      <div className="relative size-[124px]">
        <svg
          aria-hidden="true"
          className="size-full -rotate-90"
          viewBox="0 0 124 124"
        >
          <circle
            className="text-black/8"
            cx="62"
            cy="62"
            fill="none"
            r={RADIUS}
            stroke="currentColor"
            strokeWidth="8"
          />
          <circle
            className="text-brand"
            cx="62"
            cy="62"
            fill="none"
            r={RADIUS}
            stroke="currentColor"
            strokeDasharray={`${(value / 100) * CIRCUMFERENCE} ${CIRCUMFERENCE}`}
            strokeLinecap="round"
            strokeWidth="8"
          />
        </svg>

        <span className="absolute inset-0 flex items-center justify-center font-heading text-[20px] font-semibold text-navy">
          {value}%
        </span>
      </div>

      <p className="mt-5 font-heading text-[17px] font-semibold text-navy">
        {label}
      </p>
    </div>
  );
}

/** Three-up row of progress rings used on the industry detail pages. */
export function StatRings({
  className,
  stats,
}: {
  className?: string;
  stats: { label: string; value: number }[];
}) {
  return (
    <ul
      className={cn("grid grid-cols-1 gap-6 sm:grid-cols-3", className)}
      aria-label="Performance highlights"
    >
      {stats.map((stat) => (
        <li key={stat.label}>
          <StatRing label={stat.label} value={stat.value} />
        </li>
      ))}
    </ul>
  );
}
