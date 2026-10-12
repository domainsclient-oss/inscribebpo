import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/site/section-label";
import { WaveLine } from "@/components/site/wave-line";

export function WhyChoose() {
  return (
    <section
      aria-label="Why choose Inscribe"
      className="relative isolate overflow-hidden bg-navy"
      id="why-choose"
    >
      {/* Background photo + navy wash */}
      <Image
        alt=""
        className="object-cover"
        fill
        sizes="100vw"
        src="/images/home/inscribe-bg03.webp"
      />
      <span aria-hidden="true" className="absolute inset-0 bg-navy/85" />

      {/* Orange panel occupying the left third on large screens */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-1/3 bg-brand lg:block"
      />

      {/* Decorative accents on the orange panel */}
      <span
        aria-hidden="true"
        className="absolute top-4 left-[6%] hidden size-[150px] rounded-full bg-white/25 lg:block"
      />
      <WaveLine
        className="absolute bottom-10 left-[5%] hidden h-5 lg:block"
        color="#ffffff"
        width={230}
      />

      <div className="container-site relative z-10 grid grid-cols-1 items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        {/* Blob-masked photo */}
        <div className="mx-auto w-full max-w-[536px]">
          <div className="relative aspect-[536/527]">
            <Image
              alt="Attorneys reviewing and signing a contract"
              className="blob-b object-cover"
              fill
              sizes="(min-width: 1024px) 536px, 90vw"
              src="/images/home/about2.webp"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="max-w-[640px] text-white">
          <SectionLabel className="text-brand">
            Why Choose Inscribe
          </SectionLabel>

          <WaveLine className="mt-4" width={118} />

          <p className="mt-6 text-[15px] leading-[1.95] text-white/90 sm:text-base">
            At Inscribe, our legacy of over two decades of experience in the
            Medico-Legal and Insurance industries speaks for itself. We are your
            trusted partner in navigating the complexities of medical records,
            legal cases, and insurance requirements. Our unwavering commitment
            to accuracy ensures that you receive the most precise and reliable
            information to support your medico-legal decisions. Our dedication
            to excellence and efficiency means your cases are handled promptly
            and with the utmost care. We take pride in the trust we&apos;ve
            earned from attorneys, law firms, insurance companies, and life care
            planners nationwide. Inscribe is more than a service provider;
            we&apos;re your ally in achieving the best outcomes for your clients,
            no matter the complexity of the task at hand.
          </p>

          <Link
            className="mt-9 inline-flex min-h-[46px] items-center justify-center bg-brand px-7 text-[15px] font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href="/about-us"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
