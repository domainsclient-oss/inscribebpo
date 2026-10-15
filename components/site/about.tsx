import Image from "next/image";
import { SectionLabel } from "@/components/site/section-label";

const stats = [
  {
    value: "25k",
    label: "Projects",
    text: "1 Million Pages Handled Every Month",
  },
  {
    value: "100+",
    label: "Clients",
    text: "Satisfied Clients",
  },
];

export function About() {
  return (
    <section
      aria-label="About Inscribe"
      className="bg-white py-14 sm:py-16 lg:py-20"
      id="about"
    >
      <div className="container-site grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="max-w-[560px]">
          <SectionLabel>About Inscribe</SectionLabel>

          <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.22] font-bold text-navy">
            We provide exclusive services to individual attorneys, law firms,
            Insurance Companies, Life Care Planning and IME&apos;s.
          </h2>

          <p className="mt-6 text-[15px] leading-[1.9] text-ink-2">
            With over 2 decades of experience, handling a staggering 1 million
            pages every month as we offer medical record services to the Medico
            Legal and Insurance Industries.
          </p>

          <div className="mt-10 space-y-8">
            {stats.map((stat) => (
              <div
                className="flex items-center gap-6 sm:gap-10"
                key={stat.label}
              >
                <div className="min-w-[140px] shrink-0">
                  <p className="font-heading text-[clamp(2.25rem,4vw,3rem)] leading-none font-bold text-brand">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-heading text-[15px] font-semibold tracking-[0.14em] text-navy uppercase">
                    {stat.label}
                  </p>
                </div>
                <div className="border-l border-black/10 pl-6 sm:pl-10">
                  <p className="text-[15px] leading-relaxed text-ink-2">
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image — rendered at its natural aspect ratio, uncropped */}
        <div className="mx-auto w-full max-w-[601px]">
          <Image
            alt="Medical records specialist typing at a desk"
            className="h-auto w-full"
            height={604}
            sizes="(min-width: 1024px) 601px, 90vw"
            src="/images/home/about-us.webp"
            width={601}
          />
        </div>
      </div>
    </section>
  );
}
