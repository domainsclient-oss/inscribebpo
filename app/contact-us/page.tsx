import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/site/page-banner";
import { ContactDetails } from "@/components/contact/contact-details";
import { RequestProposal } from "@/components/site/request-proposal";
import { Recognitions } from "@/components/site/recognitions";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title:
    "Medical Record Review | APS Retrievals and Summaries |Litigation Support Services - Inscribe INC",
  description:
    "Medical Record Review Services by Inscribe BPO. Contact us through email or phone to learn more about how our medico-legal services can benefit your law firm",
};

/** The contact page ships only the two wide badges — no TÜV lead mark. */
const recognitionBadges = [
  {
    src: "/images/contact/an-image-of-Hipaa-compliant.webp",
    alt: "HIPAA compliant",
    width: 500,
    height: 214,
  },
  {
    src: "/images/contact/an-image-of-a-iso.webp",
    alt: "ISO 27001 certified — Information Security Management System",
    width: 500,
    height: 214,
  },
];

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <PageBanner
        alt="Inscribe BPO team members working at their desks"
        crumbs={[{ href: "/", label: "Inscribe INC" }, { label: "Contact" }]}
        height={882}
        priority
        src="/images/contact/contact-us.webp"
        title="Contact"
        width={1920}
      />

      <ContactDetails />

      <RequestProposal
        eyebrow="Let's Talk"
        heading="Get In Touch"
        variant="contact"
      />

      <Recognitions badges={recognitionBadges} lead={null} />
      <SiteFooter />
    </main>
  );
}
