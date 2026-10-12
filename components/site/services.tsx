import Image from "next/image";
import Link from "next/link";
import { FileText, Plus } from "lucide-react";
import { SectionLabel } from "@/components/site/section-label";
import { cn } from "@/lib/utils";

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  href: string;
  /** Scroll target used by the header's "Our Services" dropdown. */
  anchor?: string;
};

export const serviceItems: ServiceItem[] = [
  {
    anchor: "medical-record-service",
    title: "Streamlined Medical Records for Smarter Decisions",
    description:
      "Accurate, organized, and HIPAA-compliant record retrieval and summarization for legal and insurance needs.",
    image: "/images/home/Medical-Record.webp",
    href: "/our-services/medical-record-services",
  },
  {
    anchor: "aps-summary",
    title: "Concise APS Summaries That Save Time",
    description:
      "Clear, actionable summaries of attending physician statements to support underwriting and claims processes.",
    image: "/images/home/APS-Summary-services.webp",
    href: "/our-services/aps-summary-services",
  },
  {
    anchor: "litigation-support",
    title: "Litigation Support That Strengthens Your Case",
    description:
      "Reliable documentation, case chronology, and medical insights to empower legal teams at every stage.",
    image: "/images/home/Litigation-Support.webp",
    href: "/our-services/litigation-support-services",
  },
  {
    anchor: "mass-tort-cases",
    title: "Mass Tort Case Management Made Easy",
    description:
      "Scalable support for law firms handling high-volume tort cases, with accurate medical data and efficient workflows.",
    image: "/images/home/Mass-Tort-Cases-service.webp",
    href: "/our-services/mass-tort-cases-services",
  },
];

export function ServiceCard({
  item,
  priority = false,
  /** Only the /our-services grid opts in, so anchor ids stay unique per page. */
  withAnchor = false,
}: {
  item: ServiceItem;
  priority?: boolean;
  withAnchor?: boolean;
}) {
  return (
    <article
      id={withAnchor ? item.anchor : undefined}
      className="group relative flex h-full flex-col scroll-mt-28 overflow-hidden border border-black/8 bg-white pb-16 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(0,0,0,0.1)]">
      {/* Image + floating badge */}
      <div className="relative px-4 pt-4">
        <div className="relative aspect-[247/158] w-full overflow-hidden">
          <Image
            alt=""
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            priority={priority}
            sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 90vw"
            src={item.image}
          />
        </div>
        <span
          aria-hidden="true"
          className="absolute -bottom-7 left-1/2 flex size-[62px] -translate-x-1/2 items-center justify-center rounded-full bg-brand text-white shadow-[0_6px_16px_rgba(234,85,28,0.4)] ring-4 ring-white"
        >
          <FileText className="size-7" strokeWidth={2} />
        </span>
      </div>

      {/* Copy */}
      <div className="flex flex-1 flex-col px-6 pt-12 text-center">
        <h3 className="font-heading text-[17px] leading-snug font-bold text-navy">
          <Link className="after:absolute after:inset-0" href={item.href}>
            {item.title}
          </Link>
        </h3>
        <p className="mt-4 text-[15px] leading-[1.75] text-ink-2">
          {item.description}
        </p>
      </div>

      {/* Hover reveal: circular action button */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 flex size-[72px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white group-focus-within:border-brand group-focus-within:bg-brand group-focus-within:text-white"
      >
        <Plus className="size-7 -translate-y-3" strokeWidth={2.5} />
      </span>
    </article>
  );
}

export function Services({
  className,
  eyebrow = "Our",
  heading = "Services",
  id = "services",
}: {
  className?: string;
  eyebrow?: string;
  heading?: string;
  id?: string;
}) {
  return (
    <section
      aria-label="Our services"
      className={cn("bg-paper py-14 sm:py-16 lg:py-20", className)}
      id={id}
    >
      <div className="container-site">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h2 className="mt-2 text-[clamp(2rem,3.4vw,2.75rem)] leading-tight font-bold text-navy">
          {heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 xl:grid-cols-4">
          {serviceItems.map((item, index) => (
            <ServiceCard item={item} key={item.title} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
