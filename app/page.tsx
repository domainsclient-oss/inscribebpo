import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/site/hero";
import { Expertise } from "@/components/site/expertise";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { WhyChoose } from "@/components/site/why-choose";
import { RequestProposal } from "@/components/site/request-proposal";
import { JourneyCta } from "@/components/site/journey-cta";
import { Recognitions } from "@/components/site/recognitions";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title:
    "Medical Record Review | Litigation Support Services | Mass Tort Case Specialists Inscribe INC",
  description:
    "Inscribe provides Medical Record Review and Summary Services, APS Summary for Under Writing Services and Sorting and Categorising Medical Records Services USA",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white" id="top">
      <SiteHeader />
      <Hero />
      <Expertise />
      <About />
      <Services />
      <WhyChoose />
      <RequestProposal />
      <JourneyCta />
      <Recognitions />
      <SiteFooter />
    </main>
  );
}
