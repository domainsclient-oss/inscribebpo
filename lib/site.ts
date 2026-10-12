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

export const services = [
  { label: "Medical Record Service", href: "#services" },
  { label: "APS Summary", href: "#services" },
  { label: "Litigation Support Service", href: "#services" },
  { label: "Mass Tort Cases", href: "#services" },
];

export const industries = [
  { label: "Attorneys & Law Firms", href: "#features" },
  { label: "Insurance Companies", href: "#features" },
  { label: "Life Care Planning", href: "#features" },
  { label: "IME's", href: "#features" },
];

export const nav: NavItem[] = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services", children: services },
  { label: "Industries", href: "#features", children: industries },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#contact" },
];
