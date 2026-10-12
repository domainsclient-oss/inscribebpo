import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Full-bleed CTA band. The split white/orange treatment is baked into
 * `inscribe-bg02-768x319.webp` (768x319), so the photo is simply covered and a
 * centered white card is laid over it.
 */
export function JourneyCta({
  className,
  heading = "let us be a part of your journey",
  ctaLabel = "Contact Now",
  ctaHref = "/contact-us",
}: {
  className?: string;
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section
      aria-label="Contact Inscribe"
      className={cn("relative isolate overflow-hidden bg-brand", className)}
      id="journey-cta"
    >
      <Image
        alt=""
        className="object-cover"
        fill
        sizes="100vw"
        src="/images/home/inscribe-bg02-768x319.webp"
      />

      <div className="container-site relative z-10 flex justify-center py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[810px] bg-white px-6 py-12 text-center sm:px-12 sm:py-14 lg:px-16 lg:py-16">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] leading-[1.2] font-bold text-navy">
            {heading}
          </h2>

          <Link
            className="mt-9 inline-flex min-h-[52px] items-center justify-center bg-brand px-10 text-[15px] font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            href={ctaHref}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
