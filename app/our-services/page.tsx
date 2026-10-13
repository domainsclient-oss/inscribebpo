import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/site/page-banner";
import { ServicesIntro } from "@/components/services/services-intro";
import { ConsultantCta } from "@/components/services/consultant-cta";
import { RequestProposal } from "@/components/site/request-proposal";
import { Recognitions } from "@/components/site/recognitions";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title:
    "Mass Tort Litigation Support Services | Medical Record Review | APS Summary - Inscribe INC",
  description:
    "Inscribe is a Leading Medical Record Review Service Provider to The Law Firms and Independent Legal Practices and Teams Throughout the United States.",
};

/** Certification artwork shipped alongside the services page. */
const recognitionLead = {
  src: "/images/service/tuv-white-text-300x300.png",
  alt: "TÜV Rheinland certified",
  width: 300,
  height: 300,
};

const recognitionBadges = [
  {
    src: "/images/service/an-image-of-Hipaa-compliant.webp",
    alt: "HIPAA compliant",
    width: 500,
    height: 214,
  },
  {
    src: "/images/service/an-image-of-a-iso.webp",
    alt: "ISO 27001 certified — Information Security Management System",
    width: 500,
    height: 214,
  },
  {
    src: "/images/service/iso-9001.png",
    alt: "ISO 9001 certified",
    width: 300,
    height: 128,
  },
];

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <PageBanner
        alt="Two colleagues reviewing medical records together"
        crumbs={[{ href: "/", label: "Inscribe INC" }, { label: "Services" }]}
        height={500}
        priority
        src="/images/service/inner3.webp"
        title="Services"
        width={1920}
      />

      <ServicesIntro />
      <ConsultantCta />
      <RequestProposal eyebrow="Have any project" variant="brand" />
      <Recognitions badges={recognitionBadges} lead={recognitionLead} />
      <SiteFooter />
    </main>
  );
}
