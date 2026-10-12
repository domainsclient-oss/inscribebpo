import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/site/page-banner";
import { ServiceDetail } from "@/components/services/service-detail";
import { SiteFooter } from "@/components/site/site-footer";
import { massTortCasesServices as content } from "@/lib/service-details";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function MassTortCasesServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <PageBanner
        alt={content.bannerAlt}
        crumbs={[
          { href: "/", label: "Inscribe INC" },
          { label: content.bannerTitle },
        ]}
        height={500}
        priority
        src={content.bannerImage}
        title={content.bannerTitle}
        width={1920}
      />

      <ServiceDetail content={content} />
      <SiteFooter />
    </main>
  );
}
