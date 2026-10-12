import Image from "next/image";
import { CountUp } from "@/components/site/count-up";

const facts = [
  { value: 20, suffix: "+", label: "years of experience", grouped: false },
  {
    value: 1000000,
    suffix: " +",
    label: "pages handled every month",
    grouped: true,
  },
  { value: 230, suffix: "+", label: "Portfolios", grouped: false },
  { value: 100, suffix: "+", label: "Satisfied Clients", grouped: false },
];

export function Facts() {
  return (
    <section
      aria-label="Facts for choosing us"
      className="relative isolate overflow-hidden bg-brand"
    >
      {/* Angular orange backdrop (artwork already carries the brand colour) */}
      <Image
        alt=""
        className="object-cover"
        fill
        sizes="100vw"
        src="/images/about/bg21.webp"
      />

      <div className="container-site relative z-10 py-14 sm:py-16 lg:py-20">
        <h2 className="text-center text-[clamp(1.6rem,2.8vw,2.25rem)] leading-tight font-bold text-white">
          Facts For Choosing Us
        </h2>

        <dl className="mt-10 grid grid-cols-2 gap-8 text-center lg:mt-14 lg:grid-cols-4 lg:gap-10">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-heading text-[clamp(1.75rem,3.6vw,2.75rem)] leading-none font-bold text-white">
                <CountUp
                  grouped={fact.grouped}
                  suffix={fact.suffix}
                  value={fact.value}
                />
              </dt>
              <dd className="mt-3 text-[15px] leading-snug text-white/90">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
