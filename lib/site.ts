export const contact = {
  phone: "+1 760 991 4422",
  phoneHref: "tel:+17609914422",
  email: "sales@inscribebpo.com",
  emailHref: "mailto:sales@inscribebpo.com",
  address: "PO Box 66826, Scotts Valley, CA 95067, United States",
  hours: "10:00 - 17:00",
};

export const socials = {
  facebook: "https://www.facebook.com/inscribebpoinc",
  linkedin: "https://www.linkedin.com/in/aomersheriff/",
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/**
 * Single source of truth for the service links used by the header dropdown,
 * the footer column and the service-detail sidebar. Only Medical Record
 * Service has a page of its own so far — the rest deep-link into the matching
 * card on /our-services.
 */
export const services = [
  {
    label: "Medical Record Service",
    href: "/our-services/medical-record-services",
  },
  { label: "APS Summary", href: "/our-services/aps-summary-services" },
  {
    label: "Litigation Support Service",
    href: "/our-services/litigation-support-services",
  },
  {
    label: "Mass Tort Cases",
    href: "/our-services/mass-tort-cases-services",
  },
];

/**
 * Single source of truth for the industry links used by the header dropdown
 * and the industry-detail sidebar. Every entry has its own detail page under
 * /industries/[slug]; `href` must match the matching entry in
 * `lib/industry-details.ts` so the sidebar can highlight the active item.
 */
export const industries = [
  {
    label: "Health Care Providers",
    href: "/industries/health-care-providers",
  },
  { label: "Insurance companies", href: "/industries/insurance-companies" },
  { label: "Legal professionals", href: "/industries/legal-professionals" },
];

export const nav: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services", children: services },
  { label: "Industries", href: "#features", children: industries },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#contact" },
];
