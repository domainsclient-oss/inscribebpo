import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/site/page-banner";
import { IndustryDetail } from "@/components/industries/industry-detail";
import { SiteFooter } from "@/components/site/site-footer";
import { healthCareProviders as content } from "@/lib/industry-details";

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
};

export default function HealthCareProvidersPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <PageBanner
        alt={content.bannerAlt}
        crumbs={[
          { href: "/", label: "Inscribe INC" },
          { href: "/industries", label: "industries" },
          { label: content.bannerTitle },
        ]}
        height={500}
        priority
        src={content.bannerImage}
        title={content.bannerTitle}
        width={1920}
      />

      <IndustryDetail content={content} />
      <SiteFooter />
    </main>
  );
}
