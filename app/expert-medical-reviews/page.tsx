import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faClock,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { CaseStudyForm, TestimonialCarousel } from "@/components/site/case-study-interactions";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Efficient Medical Records Reviews for Accurate IME Reports - Inscribe INC",
  description:
    "Explore how we analyze and condense patient records effectively, ensuring precise independent medical examiner (IME) reports. Overcome challenges with our expert solutions.",
  alternates: {
    canonical: new URL("/expert-medical-reviews", siteUrl).toString(),
  },
};

const takeaways = [
  {
    icon: faClock,
    text: "Learn the key strategies for reducing turnaround time.",
    className: "bg-navy text-white",
  },
  {
    icon: faShieldHalved,
    text: "Uncover innovative approaches to data accuracy and security.",
    className: "bg-white text-navy",
  },
  {
    icon: faChartLine,
    text: "Gain insights from real-world applications and success stories.",
    className: "bg-brand text-white",
  },
];

export default function ExpertMedicalReviewsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate bg-navy">
          <Image
            alt=""
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src="/images/APS-Summary-1-scaled-1.webp"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-navy/75"
          />

          <div className="container-site relative grid min-h-[calc(100dvh-72px)] grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:gap-16 lg:py-16">
            <div className="max-w-2xl text-white">
              <Image
                alt="Inscribe BPO"
                className="mb-9 h-auto w-[190px]"
                height={65}
                priority
                src="/images/home/footer-logo.webp"
                width={300}
              />
              <h1 className="max-w-[17ch] text-[clamp(2.35rem,4.6vw,4.25rem)] leading-[1.1] font-bold text-white">
                Discover How We Boosted TAT for a NewYork-Based IME
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
                Analyze challenges and efficiently condense patient records for
                independent medical examiners’ review.
              </p>
            </div>

            <CaseStudyForm />
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <div className="max-w-2xl">
              <p className="text-base leading-relaxed font-semibold text-brand sm:text-lg">
                Expert Medical Records Reviews for Precise IME Reports
              </p>
              <h2 className="mt-4 text-[clamp(2rem,3.8vw,3.25rem)] leading-tight font-bold">
                Inside, find how one simple change can reduce the efforts of
                IMEs by half
              </h2>
              <p className="mt-5 text-base leading-[1.85] text-ink-2 sm:text-lg">
                Led by Sulthan Hameed, Director Operations, our team of experts
                in healthcare documentation has pioneered solutions for the
                medico-legal and insurance industry.
              </p>
            </div>

            <Image
              alt="Healthcare professionals reviewing medical records together"
              className="h-auto w-full"
              height={1024}
              sizes="(min-width: 1024px) 600px, 100vw"
              src="/images/Discover_APS.png"
              width={1350}
            />
          </div>
        </section>

        <section aria-label="Case study highlights" className="bg-[#F3F3F3] py-16 sm:py-20">
          <div className="container-site">
            <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
              {takeaways.map(({ icon, text, className }) => (
                <article
                  className={`flex min-h-[260px] flex-col items-start gap-10 p-7 sm:min-h-[280px] sm:p-9 ${className}`}
                  key={text}
                >
                  <FontAwesomeIcon
                    aria-hidden="true"
                    className="size-16 shrink-0"
                    icon={icon}
                  />
                  <h2 className="max-w-[22ch] text-xl leading-snug font-semibold text-inherit sm:text-2xl">
                    {text}
                  </h2>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative isolate overflow-hidden bg-cover bg-center py-16 sm:py-20 lg:py-24"
          style={{ backgroundImage: "url('/images/inscribe-bg3-1.webp')" }}
        >
          <div className="container-site relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <Image
              alt="A doctor and legal professional reviewing a medical case together"
              className="h-auto w-full"
              height={1060}
              sizes="(min-width: 1024px) 500px, 100vw"
              src="/images/APS_Case_Study.png"
              width={1060}
            />

            <div className="max-w-2xl">
              <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] leading-tight font-bold text-white">
                What will I learn from this case study?
              </h2>
              <p className="mt-4 text-base leading-[1.85] text-white sm:text-lg">
                This document provides an in-depth look at the challenges and
                solutions in medical record summary generation.
              </p>

              <h3 className="mt-9 text-xl leading-snug font-bold text-white sm:text-2xl">
                Is this case study relevant to my company?
              </h3>
              <p className="mt-3 text-base leading-[1.85] text-white sm:text-lg">
                If you work in health insurance or medical documentation, this
                case study offers practical insights for your team.
              </p>

              <a
                className="mt-7 inline-flex min-h-12 items-center justify-center bg-brand px-7 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:text-base"
                href="#download-form"
              >
                Download Case Study Now!
              </a>
            </div>
          </div>
        </section>

        <TestimonialCarousel />
      </main>
      <SiteFooter />
    </>
  );
}
