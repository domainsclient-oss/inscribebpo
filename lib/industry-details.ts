/**
 * Copy + artwork for the `/industries/[slug]` detail pages.
 *
 * Mirrors `lib/service-details.ts`: the page picks its entry and the `href`
 * must match the matching entry in `industries` (lib/site.ts) so the sidebar
 * can highlight the active item.
 */
export type IndustryDetailContent = {
  href: string;
  /** Banner <h1> and breadcrumb leaf. */
  bannerTitle: string;
  bannerImage: string;
  bannerAlt: string;
  /** In-page <h2>. */
  heading: string;
  /** Body copy, one entry per paragraph. */
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** Optional progress rings rendered under the body copy. */
  stats?: { label: string; value: number }[];
  /** Optional photo pair rendered under the stats. */
  gallery?: { src: string; alt: string; width: number; height: number }[];
  metaTitle: string;
  metaDescription: string;
};

export const healthCareProviders: IndustryDetailContent = {
  href: "/industries/health-care-providers",
  bannerTitle: "Health Care Providers",
  bannerImage: "/images/industry/Health-Care-Providers/inner4.webp",
  bannerAlt: "Two healthcare colleagues reviewing records on a laptop",
  heading: "Empowering Healthcare Providers with Medico-Legal Solutions",
  image: "/images/industry/Health-Care-Providers/Healthcare-1536x1024-1.webp",
  imageAlt: "Healthcare team collaborating around a laptop",
  imageWidth: 1536,
  imageHeight: 1024,
  stats: [
    { label: "Strategy", value: 89 },
    { label: "Analytics", value: 82 },
    { label: "Result", value: 95 },
  ],
  gallery: [
    {
      src: "/images/industry/Health-Care-Providers/service1.webp",
      alt: "Three legal professionals standing in an open-plan office",
      width: 460,
      height: 539,
    },
    {
      src: "/images/industry/Health-Care-Providers/service2.webp",
      alt: "Team meeting around a laptop in a lounge area",
      width: 460,
      height: 539,
    },
  ],
  metaTitle: "Health Care Providers | Inscribe BPO",
  metaDescription:
    "Medical record digitization, indexing, coding, retrieval, transcription and compliance reviews that let healthcare providers focus on patient care.",
  paragraphs: [
    "In today\u2019s complex healthcare landscape, managing medical records, data, and documentation is more critical than ever. Healthcare providers are entrusted with sensitive patient information, making the accurate and secure management of medical records a paramount concern. Inscribe understands the unique challenges faced by healthcare providers and offers tailored solutions to meet these needs.",
    "Our services are designed to enhance the efficiency and accuracy of medical record management, ensuring that healthcare providers have the resources they require to focus on patient care. Inscribe provides services such as medical record digitization, indexing, coding, and classification, making it easier to retrieve essential information and improve overall operational efficiency.",
    "With our audit and compliance reviews, healthcare providers can rest assured that their practices adhere to industry standards and regulations. We also offer medical record retrieval, transcription, summarization, and review for coding accuracy to further streamline your operations and decision-making processes.",
    "By choosing Inscribe as your partner, healthcare providers can confidently navigate the ever-evolving healthcare landscape. Our commitment to accuracy and our dedication to the secure management of medical records ensure that you have the support you need to meet your obligations while focusing on patient care.",
  ],
};

export const insuranceCompanies: IndustryDetailContent = {
  href: "/industries/insurance-companies",
  bannerTitle: "Insurance companies",
  bannerImage: "/images/industry/Insurance-companies/inner4.webp",
  bannerAlt: "Insurance team reviewing paperwork at a desk",
  heading: "Streamlining Insurance Operations with Inscribe's Services",
  image: "/images/industry/Insurance-companies/Insurance-1536x1152-1.webp",
  imageAlt: "Insurance professional reviewing a claim with a client",
  imageWidth: 1536,
  imageHeight: 1152,
  stats: [
    { label: "Strategy", value: 89 },
    { label: "Analytics", value: 82 },
    { label: "Result", value: 95 },
  ],
  gallery: [
    {
      src: "/images/industry/Insurance-companies/service1.webp",
      alt: "Colleagues discussing policy documents in an office",
      width: 460,
      height: 539,
    },
    {
      src: "/images/industry/Insurance-companies/service2.webp",
      alt: "Team reviewing claims data together on a laptop",
      width: 460,
      height: 539,
    },
  ],
  metaTitle: "Insurance companies | Inscribe BPO",
  metaDescription:
    "APS retrieval and summaries, medical record indexing, coding and compliance reviews that help insurers underwrite faster and assess risk accurately.",
  paragraphs: [
    "Insurance companies operate in a highly regulated environment where accuracy, speed, and compliance are paramount. In the world of insurance, making informed decisions, processing claims efficiently, and mitigating risk are crucial. Inscribe offers a suite of services tailored to the specific needs of insurance companies, providing the support required to excel in this industry.",
    "Our APS retrieval and APS summary services simplify the often intricate process of reviewing Attending Physician Statements. By streamlining the analysis of these documents, insurance companies can expedite the underwriting process and make more accurate risk assessments.",
    "Inscribe also offers comprehensive medical record services, including indexing, coding, and classification, ensuring that insurers have access to precise and reliable information when processing claims. Our audit and compliance reviews further enhance the accuracy and reliability of the information at your disposal.",
    "Insurance companies can count on Inscribe to be a trusted partner in the efficient management of medical records, helping you make well-informed decisions, minimize risks, and provide a higher level of service to your clients. Our commitment to precision, speed, and compliance ensures that you have the tools you need to excel in the insurance industry.",
  ],
};

export const legalProfessionals: IndustryDetailContent = {
  href: "/industries/legal-professionals",
  bannerTitle: "Legal professionals",
  bannerImage: "/images/industry/Legal-professionals/inner4.webp",
  bannerAlt: "Attorney reviewing case documents at a desk",
  heading: "Legal Excellence Through Inscribe's Support Services",
  image:
    "/images/industry/Legal-professionals/Legal-professionals-1536x1024-1.webp",
  imageAlt: "Legal team reviewing case files together in a law office",
  imageWidth: 1536,
  imageHeight: 1024,
  stats: [
    { label: "Strategy", value: 89 },
    { label: "Analytics", value: 82 },
    { label: "Result", value: 95 },
  ],
  gallery: [
    {
      src: "/images/industry/Legal-professionals/service1.webp",
      alt: "Attorneys discussing a case in an open-plan office",
      width: 460,
      height: 539,
    },
    {
      src: "/images/industry/Legal-professionals/service2.webp",
      alt: "Legal colleagues preparing documents around a laptop",
      width: 460,
      height: 539,
    },
  ],
  metaTitle: "Legal professionals | Inscribe BPO",
  metaDescription:
    "Litigation support, mass tort case management, document review, deposition summaries and expert witness coordination for attorneys and law firms.",
  paragraphs: [
    "Legal professionals, including attorneys and law firms, operate in a highly competitive and demanding environment where the ability to access, organize, and understand extensive volumes of data is essential. Inscribe offers a range of services designed to empower legal professionals with the tools they need to excel in their field.",
    "Our litigation support services encompass a wide range of solutions, from legal research and documentation and record management to discovery support and trial preparation. We also provide deposition summaries and expert witness coordination to enhance your litigation strategies.",
    "In addition to litigation support, Inscribe specializes in mass tort cases, handling the intricacies of large-scale legal challenges with finesse. We provide data management, plaintiff coordination, document review, communication support, legal research, and expert witness coordination, ensuring that legal professionals have the resources and expertise required to build strong cases.",
    "By choosing Inscribe as your partner, legal professionals can streamline their operations, improve efficiency, and increase the likelihood of success in the courtroom. Our commitment to precision, efficiency, and accuracy ensures that you have the support you need to navigate the complexities of the legal field effectively. Trust Inscribe to be your ally in achieving success in your legal endeavors, whether you\u2019re a solo attorney or part of a law firm.",
  ],
};
