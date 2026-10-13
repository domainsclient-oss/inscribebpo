"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { industries, services, socials } from "@/lib/site";

type NavLink = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
};

// Shared with the footer and the service-detail sidebar. Services without a
// page of their own deep-link into the matching card on /our-services.
const serviceSubmenu = services;

// Same approach as the services dropdown: audiences without a page of their
// own deep-link into the matching card on /industries.
const industrySubmenu = industries;

const navigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/our-services", submenu: serviceSubmenu },
  { label: "Industries", href: "/industries", submenu: industrySubmenu },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <a
        aria-label="Facebook"
        className="text-[21px] font-bold leading-none hover:text-white/75"
        href={socials.facebook}
        rel="noreferrer"
        target="_blank"
      >
        f
      </a>
      <a
        aria-label="LinkedIn"
        className="text-[17px] font-bold leading-none hover:text-white/75"
        href={socials.linkedin}
        rel="noreferrer"
        target="_blank"
      >
        in
      </a>
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="relative h-10 overflow-hidden bg-navy text-white sm:h-11">
        <span
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[31%] bg-brand [clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)] sm:block"
        />
        <div className="container-site relative flex h-full items-center justify-between">
          <div className="flex min-w-0 items-center">
            <a
              className="flex h-full items-center gap-2 border-r border-white/10 pr-3 text-[11px] transition-colors hover:text-white/75 sm:gap-2.5 sm:pr-5 sm:text-[13px]"
              href="mailto:sales@inscribebpo.com"
            >
              <Mail aria-hidden="true" className="size-3.5 shrink-0 sm:size-4" />
              <span>sales@inscribebpo.com</span>
            </a>
            <a
              className="flex items-center gap-2 pl-3 text-[11px] transition-colors hover:text-white/75 sm:gap-2.5 sm:pl-5 sm:text-[13px]"
              href="tel:+17609914422"
            >
              <Phone
                aria-hidden="true"
                className="size-3.5 shrink-0 fill-current sm:size-4"
              />
              <span className="whitespace-nowrap">+1 760 991 4422</span>
            </a>
          </div>
          <SocialLinks className="relative z-10 hidden pr-2 sm:flex sm:pr-4" />
        </div>
      </div>

      <div className="container-site flex min-h-[60px] items-center justify-between gap-4 sm:min-h-[68px] sm:gap-6">
        <Link
          aria-label="Inscribe INC home"
          className="inline-flex shrink-0 items-center"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            alt="Inscribe"
            className="h-[38px] w-auto sm:h-[44px]"
            height={51}
            loading="eager"
            sizes="110px"
            src="/images/home/inscribe-logo.webp"
            width={109}
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center xl:flex">
          <ul className="flex items-center gap-7 2xl:gap-9">
            {navigation.map(({ label, href, submenu }) => (
              <li className="group relative" key={label}>
                <Link
                  aria-current={isCurrent(href) ? "page" : undefined}
                  className={`flex items-center gap-1 whitespace-nowrap py-5 text-[14px] font-medium uppercase transition-colors hover:text-brand ${
                    isCurrent(href) ? "text-brand" : "text-black"
                  }`}
                  href={href}
                >
                  {label}
                  {submenu && (
                    <span aria-hidden="true" className="text-[22px] font-normal leading-none">
                      +
                    </span>
                  )}
                </Link>

                {submenu && (
                  <ul className="invisible absolute top-full left-0 z-30 min-w-[260px] translate-y-2 border-t-2 border-brand bg-white py-2 opacity-0 shadow-[0_18px_40px_rgba(3,46,66,0.16)] transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {submenu.map((child) => (
                      <li key={child.label}>
                        <Link
                          className="block px-5 py-2.5 text-[14px] text-ink-2 transition-colors hover:bg-paper hover:text-brand"
                          href={child.href}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            className="flex h-11 items-center justify-center whitespace-nowrap rounded-full border border-brand px-4 text-[13px] font-semibold uppercase text-brand transition-colors hover:bg-paper"
            href="https://www.recordreview.ai/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Experience Our Ai
          </a>
          <Link
            className="flex h-11 min-w-[180px] items-center justify-center whitespace-nowrap rounded-full bg-brand px-5 text-[13px] font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
            href="/expert-medical-reviews"
          >
            Success Stories
          </Link>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex size-11 items-center justify-center rounded-md text-navy transition-colors hover:bg-paper xl:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-black/5 bg-white px-4 pb-5 pt-2 shadow-lg lg:hidden"
          id="mobile-navigation"
        >
          <ul className="container-site">
            {navigation.map(({ label, href, submenu }) => (
              <li className="border-b border-black/5 last:border-b-0" key={label}>
                <div className="flex items-center justify-between">
                  <Link
                    aria-current={isCurrent(href) ? "page" : undefined}
                    className={`block flex-1 py-3.5 text-sm font-medium uppercase ${
                      isCurrent(href) ? "text-brand" : "text-navy"
                    }`}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>

                  {submenu && (
                    <button
                      aria-expanded={expanded === label}
                      aria-label={`Toggle ${label} submenu`}
                      className="p-3 text-navy"
                      onClick={() =>
                        setExpanded((current) =>
                          current === label ? null : label
                        )
                      }
                      type="button"
                    >
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-4 transition-transform ${
                          expanded === label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {submenu && expanded === label && (
                  <ul className="pb-3 pl-4">
                    {submenu.map((child) => (
                      <li key={child.label}>
                        <Link
                          className="block py-2 text-sm text-ink-2"
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-4">
              <a
                className="mb-3 flex min-h-12 items-center justify-center rounded-full border border-brand px-6 text-sm font-semibold uppercase text-brand transition-colors hover:bg-paper"
                href="https://www.recordreview.ai/"
                onClick={() => setMenuOpen(false)}
                rel="noopener noreferrer"
                target="_blank"
              >
                Experience Our Ai
              </a>
              <Link
                className="flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
                href="/expert-medical-reviews"
                onClick={() => setMenuOpen(false)}
              >
                Success Stories
              </Link>
            </li>
          </ul>
          <SocialLinks className="mx-auto mt-5 w-fit text-navy" />
        </nav>
      )}
    </header>
  );
}
