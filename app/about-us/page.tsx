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
  title: "About Us | Inscribe BPO",
  description:
    "Global Medical Records Services Provider since 2003, serving individual attorneys, law firms, insurance companies, life care planning and IME's.",
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
