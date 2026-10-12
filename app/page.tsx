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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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
