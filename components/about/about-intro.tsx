import { PageBanner } from "@/components/site/page-banner";
import { SectionLabel } from "@/components/site/section-label";

export function AboutIntro() {
  return (
    <>
      {/* Hero banner */}
      <PageBanner
        alt="The Inscribe team collaborating around a laptop"
        crumbs={[{ href: "/", label: "Inscribe INC" }, { label: "About" }]}
        height={882}
        priority
        src="/images/about/about-us.webp"
        title="About"
        width={1920}
      />

      {/* Intro copy */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-site max-w-[980px] text-center">
          <SectionLabel>About Inscribe</SectionLabel>

          <h1 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.25] font-bold text-navy">
            We provide exclusive services to individual attorneys, law firms,
            Insurance Companies, Life Care Planning and IME&apos;s.
          </h1>

          <p className="mt-6 text-[15px] leading-[1.95] text-ink-2 sm:text-base">
            Global Medical Records Services Provider since 2003. Our clients are
            provided with complete Medical record analysis and assistance for
            effective response to litigation and Insurance Process.
          </p>
        </div>
      </section>
    </>
  );
}
