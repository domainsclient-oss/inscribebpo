import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { AboutIntro } from "@/components/about/about-intro";
import { Values } from "@/components/about/values";
import { Facts } from "@/components/about/facts";
import { Team } from "@/components/about/team";
import { Certifications } from "@/components/about/certifications";
import { JourneyCta } from "@/components/site/journey-cta";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Leading Medical Record Review Companies in USA - Inscribe INC",
  description:
    "Inscribe-Global Medical Record Service Provider since 2003. We provide exclusive services to individual attorneys, law firms, Insurance Companies, Life Care Planning and IME's",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <AboutIntro />
      <Values />
      <Facts />
      <Team />
      <Certifications />
      <JourneyCta />
      <SiteFooter />
    </main>
  );
}
