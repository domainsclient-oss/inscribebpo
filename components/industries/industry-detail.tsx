import Image from "next/image";
import { StatRings } from "@/components/industries/stat-rings";
import { ServiceSidebar } from "@/components/services/service-sidebar";
import type { IndustryDetailContent } from "@/lib/industry-details";
import { industries } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Two-column body shared by every `/industries/[slug]` page: the article,
 * optional stat rings and photo pair on the left, the industry rail on the
 * right. All copy comes from `lib/industry-details.ts`.
 */
export function IndustryDetail({
  className,
  content,
}: {
  className?: string;
  content: IndustryDetailContent;
}) {
  return (
    <section
      aria-label={content.heading}
      className={cn("bg-white py-14 sm:py-16 lg:py-20", className)}
    >
      <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-12">
        <div>
          <Image
            alt={content.imageAlt}
            className="h-auto w-full object-cover"
            height={content.imageHeight}
            src={content.image}
            width={content.imageWidth}
          />

          <h2 className="mt-9 text-[clamp(1.6rem,3vw,2.25rem)] leading-tight font-bold text-navy">
            {content.heading}
          </h2>

          {content.paragraphs.map((paragraph, index) => (
            <p
              className="mt-6 text-[15px] leading-[1.9] text-ink-2"
              key={index}
            >
              {paragraph}
            </p>
          ))}

          {content.stats && (
            <StatRings className="mt-12" stats={content.stats} />
          )}

          {content.gallery && (
            <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {content.gallery.map((photo) => (
                <li key={photo.src}>
                  <Image
                    alt={photo.alt}
                    className="h-auto w-full object-cover"
                    height={photo.height}
                    sizes="(min-width: 640px) 50vw, 90vw"
                    src={photo.src}
                    width={photo.width}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        <ServiceSidebar
          activeHref={content.href}
          items={industries}
          navLabel="Industries"
        />
      </div>
    </section>
  );
}
