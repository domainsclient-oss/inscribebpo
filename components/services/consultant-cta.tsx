import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Full-bleed orange consultation band. `bg21.webp` (1920x698) carries the faint
 * world-map artwork; `mix-blend-multiply` lets the brand colour underneath show
 * through the light areas, and keeps the band solid while the image loads.
 */
export function ConsultantCta({
  className,
  ctaHref = "/contact-us",
  ctaLabel = "Contact Now",
  eyebrow = "Any plan to start a project",
  heading = "Our Expert Consultants Always Ready to Help You.",
}: {
  className?: string;
  ctaHref?: string;
  ctaLabel?: string;
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section
      aria-label={heading}
      className={cn("relative isolate overflow-hidden bg-brand", className)}
      id="consultant-cta"
    >
      <Image
        alt=""
        className="object-cover opacity-60 mix-blend-multiply"
        fill
        sizes="100vw"
        src="/images/service/bg21.webp"
      />

      <div className="container-site relative z-10 py-14 text-center sm:py-16 lg:py-20">
        <p className="text-[15px] font-medium text-white/90">{eyebrow}</p>

        <h2 className="mx-auto mt-3 max-w-[820px] text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.3] font-bold text-white">
          {heading}
        </h2>

        <Link
          className="mt-8 inline-flex min-h-[48px] items-center justify-center bg-white px-8 text-[15px] font-medium text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          href={ctaHref}
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
