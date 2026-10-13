import { CircleCheck } from "lucide-react";
import { SectionLabel } from "@/components/site/section-label";
import { ServiceCard, serviceItems } from "@/components/site/services";
import { cn } from "@/lib/utils";

const highlights = [
  "The Medical Record documents are categorized, indexed, and hyperlinked for easy retrieval.",
  "The Medical Records from various sources are then arranged in their appropriate sequence, are bookmarked and are placed in the chronological order",
  "The Medical Record documents are categorized, indexed, and hyperlinked for easy retrieval.",
];

/**
 * Lead section of /our-services: the "E-Sorting and Categorizing" split
 * heading/checklist block followed by the service cards, on a plain paper
 * background.
 */
export function ServicesIntro({
  className,
  eyebrow = "E-Sorting and Categorizing",
  heading = "Medical Record Services",
}: {
  className?: string;
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section
      aria-label={heading}
      className={cn("bg-paper py-14 sm:py-16 lg:py-20", className)}
      id="medical-record-services"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-12">
          {/* Heading — right aligned against the vertical rule on large screens */}
          <div className="lg:border-r lg:border-black/12 lg:pr-12 lg:text-right">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="mt-3 text-[clamp(1.6rem,2.8vw,2.25rem)] leading-[1.25] font-bold text-navy">
              {heading}
            </h2>
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-5">
            {highlights.map((item, index) => (
              <li className="flex items-start gap-3" key={`${item}-${index}`}>
                <CircleCheck
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-brand"
                  strokeWidth={2}
                />
                <span className="text-[15px] leading-[1.75] text-ink-2">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
          {serviceItems.map((item) => (
            <ServiceCard
              item={item}
              key={item.title}
              withAnchor
            />
          ))}
        </div>
      </div>
    </section>
  );
}
