import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/site/page-banner";
import { IndustriesIntro } from "@/components/industries/industries-intro";
import { ConsultantCta } from "@/components/services/consultant-cta";
import { RequestProposal } from "@/components/site/request-proposal";
import { Recognitions } from "@/components/site/recognitions";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "BPO Services for Healthcare | Insurance | Legal Professionals - Inscribe INC",
  description:
    "Inscribe BPO services across healthcare, insurance, and legal industries. Our custom solutions are designed for each sector's unique needs.",
};

/** Certification artwork shipped alongside the industries page. */
const recognitionLead = {
  src: "/images/industry/tuv-white-text-300x300.png",
  alt: "TÜV Rheinland certified",
  width: 300,
  height: 300,
};

const recognitionBadges = [
  {
    src: "/images/industry/an-image-of-Hipaa-compliant.webp",
    alt: "HIPAA compliant",
    width: 500,
    height: 214,
  },
  {
    src: "/images/industry/an-image-of-a-iso.webp",
    alt: "ISO 27001 certified — Information Security Management System",
    width: 500,
    height: 214,
  },
  {
    src: "/images/industry/iso-9001.png",
    alt: "ISO 9001 certified",
    width: 300,
    height: 128,
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <PageBanner
        alt="Two colleagues collaborating at a desk"
        crumbs={[{ href: "/", label: "Inscribe INC" }, { label: "industries" }]}
        height={500}
        priority
        src="/images/industry/inner3.webp"
        title="Industries"
        width={1920}
      />

      <IndustriesIntro />
      <ConsultantCta />
      <RequestProposal eyebrow="Have any project" variant="brand" />
      <Recognitions badges={recognitionBadges} lead={recognitionLead} />
      <SiteFooter />
    </main>
  );
}
