import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, LinkedinIcon } from "@/components/site/social-icons";
import { contact, services, socials } from "@/lib/site";
import { cn } from "@/lib/utils";

// Kept as a constant rather than `new Date()` so the footer stays statically
// prerenderable under Cache Components (no request-time dynamic data).
const COPYRIGHT_YEAR = 2026;

const columnHeading =
  "font-heading text-[20px] font-bold leading-tight text-white sm:text-[22px]";

const contactRows = [
  { icon: MapPin, label: contact.address, href: undefined },
  { icon: Phone, label: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: contact.email, href: contact.emailHref },
  { icon: Clock, label: contact.hours, href: undefined },
];

const socialLinks = [
  { label: "Facebook", href: socials.facebook, Icon: FacebookIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedinIcon },
];

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("bg-night text-white/80", className)} id="contact">
      <div className="container-site grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 sm:py-16 lg:grid-cols-4 lg:gap-10 lg:py-20">
        {/* Brand */}
        <div>
          <Link aria-label="Inscribe BPO home" className="inline-block" href="/">
            <Image
              alt="Inscribe BPO"
              className="h-auto w-[185px]"
              height={65}
              src="/images/home/footer-logo.webp"
              width={300}
            />
          </Link>

          <p className="mt-7 max-w-[300px] text-[15px] leading-[1.9] text-white/75">
            We provide exclusive services to individual attorneys, law firms,
            and bureaus.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className={columnHeading}>Services</h2>

          <ul className="mt-7 space-y-5">
            {services.map((service) => (
              <li key={service.label}>
                <Link
                  className="group flex items-start gap-3 text-[15px] leading-snug text-white/75 transition-colors hover:text-white"
                  href={service.href}
                >
                  <ChevronRight
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-brand"
                  />
                  <span>{service.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h2 className={columnHeading}>Contact Info</h2>

          <ul className="mt-7 space-y-5">
            {contactRows.map(({ icon: Icon, label, href }) => (
              <li className="flex items-start gap-4" key={label}>
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-brand"
                />
                {href ? (
                  <a
                    className="text-[15px] leading-[1.75] text-white/75 transition-colors hover:text-white"
                    href={href}
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-[15px] leading-[1.75] text-white/75">
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className={columnHeading}>Get in touch</h2>

          <ul className="mt-7 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  aria-label={`Inscribe BPO on ${label}`}
                  className="inline-flex size-10 items-center justify-center bg-brand text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-site pb-10 sm:pb-12">
        <p className="text-center text-[15px] text-white/70">
          © {COPYRIGHT_YEAR} Inscribe BPO. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
