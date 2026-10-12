import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Certification badges. All four source files are white artwork on a
 * transparent background, so they sit directly on the orange band with no
 * filters. Intrinsic sizes are read from the files themselves; `object-contain`
 * keeps each mark centred within its row height regardless of canvas padding.
 */
export type Badge = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const tuv: Badge = {
  src: "/images/home/tuv-white-text-300x300.png",
  alt: "TÜV Rheinland certified",
  width: 300,
  height: 300,
};

const certifications: Badge[] = [
  {
    src: "/images/home/an-image-of-Hipaa-compliant.webp",
    alt: "HIPAA compliant",
    width: 500,
    height: 214,
  },
  {
    src: "/images/home/an-image-of-a-iso.webp",
    alt: "ISO 27001 certified — Information Security Management System",
    width: 500,
    height: 214,
  },
  {
    src: "/images/home/iso-9001.png",
    alt: "ISO 9001 certified",
    width: 300,
    height: 128,
  },
];

export function Recognitions({
  badges = certifications,
  className,
  heading = "Our Recognitions",
  lead = tuv,
}: {
  badges?: Badge[];
  className?: string;
  heading?: string;
  /** Pass `null` to render the badge row without a lead mark above it. */
  lead?: Badge | null;
}) {
  return (
    <section
      aria-label="Our recognitions"
      className={cn("bg-brand py-14 sm:py-16 lg:py-20", className)}
      id="recognitions"
    >
      <div className="container-site">
        <h2 className="text-center text-[clamp(1.5rem,2.6vw,2rem)] leading-tight font-bold text-white">
          {heading}
        </h2>

        {/* Lead badge */}
        {lead && (
          <div className="mt-10 flex justify-center lg:mt-12">
            <Image
              alt={lead.alt}
              className="h-[140px] w-auto object-contain sm:h-[170px]"
              height={lead.height}
              src={lead.src}
              width={lead.width}
            />
          </div>
        )}

        {/* Supporting badges, divided by hairlines on larger screens */}
        <ul
          className={cn(
            "mt-10 grid grid-cols-1 items-center gap-10 sm:gap-0 lg:mt-14",
            badges.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
          )}
        >
          {badges.map((badge, index) => (
            <li
              className={cn(
                "flex items-center justify-center px-6 sm:px-8",
                index > 0 && "sm:border-l sm:border-white/35"
              )}
              key={badge.src}
            >
              <Image
                alt={badge.alt}
                className="h-[100px] w-auto max-w-full object-contain sm:h-[120px] lg:h-[140px]"
                height={badge.height}
                src={badge.src}
                width={badge.width}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
