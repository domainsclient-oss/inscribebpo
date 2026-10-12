import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Services } from "@/components/site/services";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Our Services | Inscribe BPO",
  description:
    "Medical record retrieval and summarization, APS summaries, litigation support and mass tort case management for attorneys, law firms and insurance companies.",
};

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="bg-navy py-12 sm:py-16" aria-label="Page heading">
        <div className="container-site">
          <h1 className="text-[clamp(2rem,3.4vw,2.75rem)] leading-tight font-bold text-white">
            Our Services
          </h1>
          <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-white/80">
            Accurate, HIPAA-compliant medical record services built for the
            Medico Legal and Insurance Industries.
          </p>
        </div>
      </section>

      <Services className="bg-white" eyebrow="What we" heading="Offer" />
      <SiteFooter />
    </main>
  );
}
