/**
 * Copy + artwork for the `/our-services/[slug]` detail pages.
 *
 * Keyed by the slug segment so a page only has to pick its entry; the `href`
 * must match the matching entry in `services` (lib/site.ts) so the sidebar can
 * highlight the active item.
 */
export type SubService = {
  label: string;
  detail: string;
};

export type ServiceDetailContent = {
  href: string;
  /** Banner <h1> and breadcrumb leaf. */
  bannerTitle: string;
  bannerImage: string;
  bannerAlt: string;
  /** In-page <h2>. */
  heading: string;
  intro: string;
  /** Extra lead-in paragraphs rendered between the intro and the list. */
  introExtra?: string[];
  /** Omit to run the list straight on from the intro. */
  subServicesHeading?: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  /** Narrower crop used in the right-hand rail. */
  sidebarImage: string;
  sidebarImageWidth: number;
  sidebarImageHeight: number;
  subServices: SubService[];
  /** Optional prose paragraphs rendered after the sub-services list. */
  closing?: string[];
  metaTitle: string;
  metaDescription: string;
};

export const medicalRecordServices: ServiceDetailContent = {
  href: "/our-services/medical-record-services",
  bannerTitle: "Medical Record Service",
  bannerImage: "/images/service/medical-record-services/service-banner.webp",
  bannerAlt: "Inscribe BPO specialists reviewing medical records",
  heading: "Medical Record Services",
  intro:
    "Inscribe\u2019s Medical Record Service is a cornerstone of our expertise, honed over two decades in the Medico-Legal and Insurance industries. We understand the critical role that accurate and comprehensive medical records play in decision-making, and we\u2019ve developed a suite of services designed to ensure you have the information you need at your fingertips.",
  image: "/images/service/medical-record-services/Medical-Record-Service.jpg",
  subServicesHeading: "Our Sub-Services Include:",
  imageAlt: "Physician completing a medical record beside a laptop",
  imageWidth: 800,
  imageHeight: 534,
  sidebarImage:
    "/images/service/medical-record-services/Medical-Record-Service-min.webp",
  sidebarImageWidth: 1000,
  sidebarImageHeight: 1000,
  metaTitle:
    "Medical Record Review | Medical Review Indexing | Retrieval Services - Inscribe INC",
  metaDescription:
    "Inscribe Medical Record Review Services by one of the leading Medical Records Review Companies in USA. Inscribe’s Medical Record Service is a cornerstone of our expertise, honed over two decades in the Medico-Legal and Insurance industries.",
  subServices: [
    {
      label: "Medical Record Digitization",
      detail:
        "We convert paper-based records into digital formats, making them easily accessible and searchable.",
    },
    {
      label: "Medical Record Indexing",
      detail:
        "Our indexing service organizes records, helping you quickly locate specific information within a sea of documents.",
    },
    {
      label: "Coding and Classification",
      detail:
        "We ensure that records are coded accurately, enabling a precise understanding of medical conditions and treatments.",
    },
    {
      label: "Audit and Compliance Reviews",
      detail:
        "Our experts review records to ensure they meet industry standards and compliance requirements.",
    },
    {
      label: "Medical Record Retrieval",
      detail:
        "Inscribe helps you access medical records promptly, eliminating delays in your cases.",
    },
    {
      label: "Medical Record Transcription",
      detail:
        "Our transcription service converts verbal medical records into written formats, preserving essential details.",
    },
    {
      label: "Medical Record Summarization",
      detail:
        "We offer concise summaries of extensive medical records, allowing you to focus on key information.",
    },
    {
      label: "Medical Record Review for Coding Accuracy",
      detail:
        "Our experts review records to ensure the accuracy of coding, reducing errors and discrepancies.",
    },
  ],
};

export const apsSummaryServices: ServiceDetailContent = {
  href: "/our-services/aps-summary-services",
  bannerTitle: "APS Summary",
  bannerImage: "/images/service/aps-summary-services/service-banner.webp",
  bannerAlt: "Underwriter reviewing an attending physician statement",
  heading: "APS Summary",
  intro:
    "At Inscribe, our APS Summary service is your solution for streamlining Attending Physician Statements (APS) in the insurance and legal sectors. APS documents can be complex and time-consuming to review, but with Inscribe, you can simplify the process and make more informed decisions.",
  image: "/images/service/aps-summary-services/APS-Summary.webp",
  subServicesHeading: "Our Sub-Services Include:",
  imageAlt: "Underwriting team reviewing an APS summary report",
  imageWidth: 800,
  imageHeight: 534,
  sidebarImage:
    "/images/service/aps-summary-services/APS-Summarization-min-500x500-1.webp",
  sidebarImageWidth: 500,
  sidebarImageHeight: 500,
  metaTitle: "APS Summary | APS Retrievals and Summaries - Inscribe INC",
  metaDescription:
    "At Inscribe, our APS Retrievals and Summary service is your solution for streamlining Attending Physician Statements (APS) in the insurance and legal sectors.",
  subServices: [
    {
      label: "APS Retrieval",
      detail:
        "Inscribe provides a swift and efficient APS retrieval service, ensuring that you have access to the relevant documentation when you need it. Say goodbye to delays and endless searches, as we handle the legwork for you.",
    },
    {
      label: "APS Summary",
      detail:
        "Our APS Summary service condenses the wealth of information found in APS documents into concise, precise, and ready-to-use summaries. We understand the importance of clarity and brevity, especially when time is of the essence.",
    },
  ],
  closing: [
    "We recognize that APS documents are vital for underwriting, claims processing, and legal assessments. However, their length and complexity can often lead to inefficiencies in your operations. With Inscribe\u2019s APS Summary service, you can expect a significant reduction in the time and effort required to review and understand these statements. Our skilled professionals meticulously analyse APS documents, ensuring that you receive clear and actionable information.",
    "In the insurance industry, where quick and well-informed decisions are crucial, our APS Summary service offers a competitive advantage. You can rely on us to provide summaries that are not only accurate but also tailored to your specific requirements, whether it\u2019s for risk assessment, claims adjudication, or legal proceedings.",
    "Inscribe\u2019s commitment to precision and efficiency sets us apart, and we understand the importance of delivering high-quality results, even in time-sensitive situations. With our APS Summary service, you can count on us to enhance your decision-making processes and improve your overall operational efficiency. Trust Inscribe to be your partner in managing APS documents and ensuring that you have the clarity you need to make informed choices in the insurance and legal fields.",
  ],
};

export const litigationSupportServices: ServiceDetailContent = {
  href: "/our-services/litigation-support-services",
  bannerTitle: "Litigation Support Service",
  bannerImage:
    "/images/service/litigation-support-services/service-banner.webp",
  bannerAlt: "Legal team preparing case documents",
  heading: "Litigation Support",
  intro:
    "In the world of legal cases, success hinges on the ability to access, organise, and understand an abundance of information quickly and accurately. Inscribe\u2019s Litigation Support service is your trusted ally in complex legal matters, providing you with the necessary tools to build and present a compelling case.",
  introExtra: [
    "Our Litigation Support service encompasses a wide range of services designed to enhance your legal strategy, streamline research, and ensure you\u2019re always one step ahead in litigation. We understand that thorough and meticulous support is essential, which is why we offer the following solutions:",
  ],
  image:
    "/images/service/litigation-support-services/Litigation-Support-Service-left.jpg",
  imageAlt: "Attorney reviewing litigation case files",
  imageWidth: 1500,
  imageHeight: 1000,
  sidebarImage:
    "/images/service/litigation-support-services/Litigation-Support-Services-min.webp",
  sidebarImageWidth: 1000,
  sidebarImageHeight: 1000,
  metaTitle: "Litigation Support | Litigation Consulting Services - Inscribe INC",
  metaDescription:
    "Inscribe offers a comprehensive range of Litigation Support and Consulting Services tailored for law firms, legal departments, and attorneys.",
  subServices: [
    {
      label: "Legal Research",
      detail:
        "Inscribe provides comprehensive legal research services, helping you gather essential information, statutes, regulations, and case law that are relevant to your case.",
    },
    {
      label: "Documentation and Record Management",
      detail:
        "Our professionals ensure that all your legal documents are organised and easily accessible, reducing the time and effort needed to locate critical information.",
    },
    {
      label: "Discovery Support",
      detail:
        "Inscribe assists you in the discovery process, making it more efficient by collecting, processing, and reviewing documents and data.",
    },
    {
      label: "Trial Preparation",
      detail:
        "Our experts assist in preparing for trial by organising evidence, creating exhibits, and providing support for legal teams.",
    },
    {
      label: "Deposition Summaries",
      detail:
        "We provide concise and accurate summaries of deposition transcripts, saving you time and effort during case preparation.",
    },
    {
      label: "Expert Witness Coordination",
      detail:
        "Inscribe helps coordinate expert witnesses, ensuring they are ready to provide their testimony effectively during trial.",
    },
  ],
  closing: [
    "Inscribe\u2019s Litigation Support service is driven by our commitment to precision and dedication to detail. We understand that each case is unique and requires tailored support. Our experienced team is equipped to assist attorneys and law firms in navigating complex legal terrain. Whether it\u2019s research, document management, or trial preparation, you can rely on us to enhance your legal operations and present a strong case.",
    "By choosing Inscribe as your litigation support partner, you gain access to a team of professionals with extensive experience in the legal field. We take pride in our ability to provide efficient, accurate, and timely support, ultimately increasing your chances of success in the courtroom. Trust Inscribe to be your partner in managing the intricacies of legal cases, and let us empower you with the resources needed to build a strong legal strategy.",
  ],
};

export const massTortCasesServices: ServiceDetailContent = {
  href: "/our-services/mass-tort-cases-services",
  bannerTitle: "Mass Tort Cases",
  bannerImage: "/images/service/mass-tort-cases-services/service-banner.webp",
  bannerAlt: "Legal team coordinating a mass tort case",
  heading: "Mass Tort Cases",
  intro:
    "Mass tort cases present a unique set of challenges, from managing large volumes of complex data to coordinating multiple plaintiffs and defendants. Inscribe\u2019s Mass Tort Cases service is your solution for handling these intricate legal challenges with finesse and precision.",
  introExtra: [
    "Mass tort cases involve a significant number of individuals who have been harmed by a common product or action. The complexities of such cases require specialised expertise, and Inscribe is here to provide the tailored solutions you need.",
  ],
  subServicesHeading:
    "Our Mass Tort Cases service includes the following key components:",
  image: "/images/service/mass-tort-cases-services/Mass-Tort-Cases.webp",
  imageAlt: "Attorneys reviewing mass tort case documents",
  imageWidth: 800,
  imageHeight: 534,
  sidebarImage: "/images/service/mass-tort-cases-services/Mass-Tort-min.webp",
  sidebarImageWidth: 1000,
  sidebarImageHeight: 1000,
  metaTitle:
    "Mass Tort Litigation Support Services | Medical Record Review | APS Summary - Inscribe INC",
  metaDescription:
    "Inscribe is a Leading Medical Record Review Service Provider to The Law Firms and Independent Legal Practices and Teams Throughout the United States.",
  subServices: [
    {
      label: "Data Management",
      detail:
        "We excel at organising and managing extensive volumes of data, ensuring that every piece of information is readily accessible.",
    },
    {
      label: "Plaintiff Coordination",
      detail:
        "Inscribe assists in coordinating plaintiffs, streamlining communication and information flow among the individuals affected.",
    },
    {
      label: "Document Review",
      detail:
        "Our experts meticulously review documents to identify key evidence, ensuring that nothing is overlooked.",
    },
    {
      label: "Communication Support",
      detail:
        "Effective communication is crucial in mass tort cases, and Inscribe helps facilitate communication between plaintiffs, legal teams, and other stakeholders.",
    },
    {
      label: "Legal Research",
      detail:
        "We conduct thorough legal research to build a solid foundation for your case, including the identification of relevant case law and precedents.",
    },
    {
      label: "Expert Witness Coordination",
      detail:
        "Inscribe can help coordinate expert witnesses, ensuring their availability to provide testimony.",
    },
  ],
  closing: [
    "Mass tort cases are complex and can be overwhelming, but with Inscribe as your partner, you can navigate these challenges with confidence. We understand the intricacies of mass tort litigation and are equipped to provide the tailored support necessary to manage such cases effectively.",
    "Our commitment to precision, efficiency, and accuracy sets us apart, ensuring that you have the resources and expertise needed to build strong mass tort cases. Inscribe\u2019s Mass Tort Cases service is your ally in achieving success in these complex legal matters, offering you the advantage of seasoned professionals who specialise in handling large-scale legal challenges.",
    "Trust Inscribe to be your partner in managing the intricacies of mass tort cases and to provide the comprehensive solutions required to represent the best interests of the individuals affected. With our support, you can focus on building a strong case and pursuing justice for those who have been harmed.",
  ],
};
