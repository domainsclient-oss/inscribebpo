import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FacebookIcon, LinkedinIcon } from "@/components/site/social-icons";
import { contact, services, socials } from "@/lib/site";
import { cn } from "@/lib/utils";

// Kept as a constant rather than `new Date()` so the footer stays statically
// prerenderable under Cache Components (no request-time dynamic data).
const COPYRIGHT_YEAR = 2026;

const columnHeading =
  "font-heading text-[15px] font-semibold leading-tight text-white";

const footerLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Success stories", href: "/expert-medical-reviews" },
  { label: "Contact us", href: "/contact-us" },
];

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
    <footer
      className={cn(
        "border-t-4 border-brand bg-[#071b26] text-white/75",
        className
      )}
      id="contact"
    >
      <div className="container-site pt-10 sm:pt-14">
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#0b2938] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-9">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl leading-tight font-semibold text-white sm:text-[30px]">
              Let&apos;s make your next case easier to manage.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75 sm:text-base">
              Talk with our team about medical record review, APS summaries,
              and litigation support.
            </p>
          </div>
          <Link
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-white px-6 text-sm font-semibold text-navy transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-px sm:self-center"
            href="/contact-us"
          >
            Talk to our team
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:grid-cols-[1.2fr_1fr_0.85fr_1.25fr] lg:gap-10 lg:py-16">
          <div>
            <Link aria-label="Inscribe BPO home" className="inline-block" href="/">
              <Image
                alt="Inscribe BPO"
                className="h-auto w-[175px]"
                height={65}
                sizes="175px"
                src="/images/home/footer-logo.webp"
                width={300}
              />
            </Link>

            <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-white/75">
              Medical record review and litigation support for attorneys, law
              firms, and insurance teams.
            </p>

            <ul aria-label="Social media" className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    aria-label={`Inscribe BPO on ${label}`}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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

          <nav aria-label="Services">
            <h2 className={columnHeading}>Services</h2>
            <ul className="mt-5 space-y-3.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    className="text-[14px] leading-relaxed transition-colors hover:text-white focus-visible:text-white focus-visible:underline focus-visible:underline-offset-4"
                    href={service.href}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore Inscribe">
            <h2 className={columnHeading}>Explore</h2>
            <ul className="mt-5 space-y-3.5">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-[14px] leading-relaxed transition-colors hover:text-white focus-visible:text-white focus-visible:underline focus-visible:underline-offset-4"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={columnHeading}>Contact</h2>
            <ul className="mt-5 space-y-4">
              {contactRows.map(({ icon: Icon, label, href }) => (
                <li className="flex items-start gap-3" key={label}>
                  <Icon
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-brand"
                  />
                  {href ? (
                    <a
                      className="text-[14px] leading-6 transition-colors hover:text-white focus-visible:text-white focus-visible:underline focus-visible:underline-offset-4"
                      href={href}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-[14px] leading-6">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex min-h-16 flex-col items-center justify-center gap-2 py-4 text-center text-[13px] text-white/60 sm:min-h-[72px] sm:flex-row sm:justify-between sm:text-left">
          <p>© {COPYRIGHT_YEAR} Inscribe BPO. All rights reserved.</p>
          <p>Medical record review and litigation support.</p>
        </div>
      </div>
    </footer>
  );
}
