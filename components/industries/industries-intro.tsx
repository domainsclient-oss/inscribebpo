import { CircleCheck } from "lucide-react";
import { SectionLabel } from "@/components/site/section-label";
import { ServiceCard, type ServiceItem } from "@/components/site/services";
import { cn } from "@/lib/utils";

const highlights = [
  "Helping healthcare providers streamline digitization and documentation tasks.",
  "Aiding insurance companies in simplifying claims and underwriting processes.",
  "Supporting legal professionals with efficient litigation and document management.",
];

/** The three audiences served, rendered with the shared `ServiceCard`. */
export const industryItems: ServiceItem[] = [
  {
    anchor: "healthcare-providers",
    title: "Healthcare Providers",
    description:
      "Inscribe’s Medical Record Service is a cornerstone of our expertise, honed over two decades in the Medico-Legal and Insurance industries.",
    image: "/images/industry/ser_1.webp",
    href: "/industries/health-care-providers",
  },
  {
    anchor: "insurance-companies",
    title: "Insurance Companies",
    description:
      "Insurance companies operate in a highly regulated environment where accuracy, speed, and compliance are paramount.",
    image: "/images/industry/ser_2.webp",
    href: "/industries/insurance-companies",
  },
  {
    anchor: "legal-professionals",
    title: "Legal Professionals",
    description:
      "Legal professionals, including attorneys and law firms, operate in a highly competitive and demanding environment where the ability to access",
    image: "/images/industry/ser_3.webp",
    href: "/industries/legal-professionals",
  },
];

/**
 * Lead section of /industries: the "Who We Serve / Industries" split
 * heading + checklist block, followed by the three audience cards.
 */
export function IndustriesIntro({
  className,
  eyebrow = "Who We Serve",
  heading = "Industries",
}: {
  className?: string;
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section
      aria-label={heading}
      className={cn("bg-paper py-14 sm:py-16 lg:py-20", className)}
      id="industries"
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
            {highlights.map((item) => (
              <li className="flex items-start gap-3" key={item}>
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

        {/* Audience cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {industryItems.map((item) => (
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
