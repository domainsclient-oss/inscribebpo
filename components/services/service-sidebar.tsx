import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { contact, services } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Right-hand rail shared by the service and industry detail pages: the link
 * switcher (with the current page highlighted), an optional illustration and
 * the "call us today" card.
 *
 * `activeHref` is matched against `items` — which defaults to `lib/site.ts`'s
 * `services` — so adding a new detail page only requires updating that list.
 */
export function ServiceSidebar({
  activeHref,
  className,
  image,
  items = services,
  navLabel = "Services",
}: {
  activeHref: string;
  className?: string;
  /**
   * Omit to render the rail as nav + call-us card only. Grouped into one
   * object so a half-specified image (src without alt) can't type-check.
   */
  image?: { src: string; alt: string; width: number; height: number };
  items?: { label: string; href: string }[];
  navLabel?: string;
}) {
  return (
    <aside className={cn("flex flex-col gap-8", className)}>
      <nav aria-label={navLabel}>
        <ul className="flex flex-col gap-3">
          {items.map((service) => {
            const isActive = service.href === activeHref;

            return (
              <li key={service.label}>
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between gap-4 px-6 py-4 text-[15px] font-medium transition-colors",
                    isActive
                      ? "bg-brand text-white"
                      : "border border-black/10 bg-white text-navy hover:bg-brand hover:text-white"
                  )}
                  href={service.href}
                >
                  <span>{service.label}</span>
                  <ChevronRight aria-hidden="true" className="size-4 shrink-0" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {image && (
        <Image
          alt={image.alt}
          className="h-auto w-full object-cover"
          height={image.height}
          sizes="(min-width: 1024px) 340px, 90vw"
          src={image.src}
          width={image.width}
        />
      )}

      {/* Call us today */}
      <div className="relative isolate overflow-hidden bg-navy px-7 py-10 text-center">
        <Image
          alt=""
          className="object-cover opacity-25"
          fill
          sizes="(min-width: 1024px) 340px, 90vw"
          src="/images/service/cta-bg.webp"
        />

        <div className="relative z-10 flex flex-col items-center">
          <span
            aria-hidden="true"
            className="flex size-[64px] items-center justify-center rounded-full bg-white text-brand"
          >
            <Phone className="size-7 fill-current" />
          </span>

          <p className="mt-6 font-heading text-[20px] leading-snug font-bold text-white">
            Have any Questions? Call us Today!
          </p>

          <a
            className="mt-5 font-heading text-[22px] font-bold text-white transition-colors hover:text-brand"
            href={contact.phoneHref}
          >
            {contact.phone}
          </a>
        </div>
      </div>
    </aside>
  );
}
