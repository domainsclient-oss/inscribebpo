import Image from "next/image";

// Placeholder artwork lives in /public/images/home/badges — swap in the
// official certification files (same names) when available.
export const badges = {
  tuv: { src: "/images/home/badges/tuv.svg", alt: "TÜV Rheinland certified", w: 120, h: 120 },
  hipaa: { src: "/images/home/badges/hipaa.svg", alt: "HIPAA compliant", w: 260, h: 100 },
  iso27001: { src: "/images/home/badges/iso-27001.svg", alt: "ISO 27001 certified", w: 120, h: 120 },
  iso9001: { src: "/images/home/badges/iso-9001.svg", alt: "ISO 9001 certified", w: 120, h: 120 },
};

export type BadgeKey = keyof typeof badges;

export function Badge({
  name,
  height,
  className,
}: {
  name: BadgeKey;
  height: number;
  className?: string;
}) {
  const b = badges[name];
  return (
    <Image
      src={b.src}
      alt={b.alt}
      width={Math.round((b.w / b.h) * height)}
      height={height}
      unoptimized
      className={className}
    />
  );
}
