import Image from "next/image";

// All three marks share a 704x290 canvas, so a single aspect ratio keeps the
// logo row optically aligned.
const certifications = [
  {
    title: "HIPAA Compliant",
    image: "/images/about/hippa-logo-1.webp",
    alt: "HIPAA — Health Insurance Portability & Accountability Act",
    body: "Inscribe knows how important HIPAA is for the health care industry. We adhere to the physical, administrative, and technical safeguards outlined in HIPAA and uphold them to protect the integrity of Protected Health Information (PHI).",
  },
  {
    title: "ISO 27001 Compliant",
    image: "/images/about/iso-logo-1-1-1.webp",
    alt: "ISO 27001 certified — Information Security Management System",
    body: "Inscribe complies with the strict data privacy and security measures established by the International Organization for Standardization (ISO) for enhancing the information security management system.",
  },
  {
    title: "ISO 9001 Compliant",
    image: "/images/about/iso-logo-1.webp",
    alt: "ISO 9001 certified",
    body: "Inscribe complies with the rigorous quality management standards established by the International Organization for Standardization (ISO) to enhance our Quality Management System (QMS). We focus on delivering consistent, high-quality services and continuously improving our processes to meet customer and regulatory requirements.",
  },
];

export function Certifications() {
  return (
    <section
      aria-label="Our certifications"
      className="bg-paper py-14 sm:py-16 lg:py-20"
      id="certifications"
    >
      <div className="container-site grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
        {certifications.map((item) => (
          <article className="text-center" key={item.title}>
            <div className="flex justify-center">
              <Image
                alt={item.alt}
                className="h-[90px] w-auto object-contain sm:h-[100px]"
                height={290}
                sizes="(min-width: 768px) 240px, 60vw"
                src={item.image}
                width={704}
              />
            </div>

            <h2 className="mt-5 font-heading text-[19px] font-bold text-navy sm:text-[21px]">
              {item.title}
            </h2>

            <p className="mt-4 text-[15px] leading-[1.9] text-ink-2">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
