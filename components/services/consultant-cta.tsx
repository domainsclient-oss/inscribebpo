import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Full-bleed orange consultation band. `bg21.webp` (1920x698) carries the faint
 * world-map artwork. It is multiplied onto the brand colour with
 * `background-blend-mode` and a 40% brand wash on top, which reproduces a 60%
 * opacity multiply. `mix-blend-mode` is avoided because axe (Lighthouse)
 * then misreads the CTA button background and reports a contrast failure.
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
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-brand bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgb(234 85 28 / 0.4), rgb(234 85 28 / 0.4)), url(/images/service/bg21.webp)",
          backgroundBlendMode: "normal, multiply",
        }}
      />

      <div className="container-site relative z-10 py-14 text-center sm:py-16 lg:py-20">
        <p className="text-[15px] font-medium text-white">{eyebrow}</p>

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
