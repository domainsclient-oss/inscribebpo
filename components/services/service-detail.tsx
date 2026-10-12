import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { RequestProposal } from "@/components/site/request-proposal";
import { ServiceSidebar } from "@/components/services/service-sidebar";
import type { ServiceDetailContent } from "@/lib/service-details";
import { cn } from "@/lib/utils";

/**
 * Two-column body shared by every `/our-services/[slug]` page: the article and
 * proposal form on the left, the service rail on the right. All copy comes from
 * `lib/service-details.ts`.
 */
export function ServiceDetail({
  className,
  content,
}: {
  className?: string;
  content: ServiceDetailContent;
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
            priority
            src={content.image}
            width={content.imageWidth}
          />

          <h2 className="mt-9 text-[clamp(1.6rem,3vw,2.25rem)] leading-tight font-bold text-navy">
            {content.heading}
          </h2>

          <p className="mt-5 text-[15px] leading-[1.9] text-ink-2">
            {content.intro}
          </p>

          {content.introExtra?.map((paragraph) => (
            <p
              className="mt-6 text-[15px] leading-[1.9] text-ink-2"
              key={paragraph.slice(0, 48)}
            >
              {paragraph}
            </p>
          ))}

          {content.subServicesHeading && (
            <h3 className="mt-10 font-heading text-[17px] font-semibold text-brand">
              {content.subServicesHeading}
            </h3>
          )}

          <ul
            className={cn(
              "flex flex-col gap-5",
              content.subServicesHeading ? "mt-6" : "mt-8"
            )}
          >
            {content.subServices.map((item) => (
              <li className="flex items-start gap-4" key={item.label}>
                <CircleCheck
                  aria-hidden="true"
                  className="mt-0.5 size-6 shrink-0 fill-brand text-white"
                  strokeWidth={2}
                />
                <p className="text-[15px] leading-[1.8] text-ink-2">
                  <strong className="font-semibold text-navy">
                    {item.label}:
                  </strong>{" "}
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>

          {content.closing?.map((paragraph) => (
            <p
              className="mt-6 text-[15px] leading-[1.9] text-ink-2"
              key={paragraph.slice(0, 48)}
            >
              {paragraph}
            </p>
          ))}

          <RequestProposal
            className="mt-12"
            eyebrow="Have any project"
            variant="panel"
          />
        </div>

        <ServiceSidebar
          activeHref={content.href}
          image={{
            alt: content.imageAlt,
            height: content.sidebarImageHeight,
            src: content.sidebarImage,
            width: content.sidebarImageWidth,
          }}
        />
      </div>
    </section>
  );
}
