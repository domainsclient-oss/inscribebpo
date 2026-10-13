"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const pill =
  "inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 font-heading text-[11px] font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const pageLinks: Record<string, string> = {
    Home: "/",
    "About Us": "/about-us",
    "Our Services": "/our-services",
    Industries: "/industries",
    Blog: "/blog",
    "Contact Us": "/contact-us",
  };
  const getNavHref = (label: string, href: string) =>
    pathname === "/" ? href : (pageLinks[label] ?? href);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_2px_12px_rgba(3,46,66,0.06)]">
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Inscribe BPO home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item, i) => (
              <li key={item.label} className="group relative">
                <a
                  href={getNavHref(item.label, item.href)}
                  className={cn(
                    "flex items-center gap-1 py-6 font-heading text-xs font-medium tracking-wide text-navy uppercase transition-colors hover:text-brand",
                    i === 0 && "text-brand"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="size-3" aria-hidden="true" />
                  )}
                </a>
                {item.children && (
                  <ul className="invisible absolute top-full left-0 min-w-56 translate-y-2 border-t-2 border-brand bg-white py-2 opacity-0 shadow-lg transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-5 py-2 text-sm text-ink-2 transition-colors hover:bg-paper hover:text-brand"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/expert-medical-reviews"
            className={cn(pill, "hidden sm:inline-flex")}
          >
            Success Stories
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-black/5 bg-white lg:hidden"
        >
          <ul className="container-site py-3">
            {nav.map((item) => (
              <li
                key={item.label}
                className="border-b border-black/5 last:border-0"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={getNavHref(item.label, item.href)}
                    onClick={() => setOpen(false)}
                    className="flex-1 py-3 font-heading text-sm font-medium text-navy uppercase"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={expanded === item.label}
                      onClick={() =>
                        setExpanded((v) => (v === item.label ? null : item.label))
                      }
                      className="p-3 text-navy"
                    >
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform",
                          expanded === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.label && (
                  <ul className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-ink-2"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-4 pb-2 sm:hidden">
              <a
                href="/expert-medical-reviews"
                onClick={() => setOpen(false)}
                className={cn(pill, "w-full")}
              >
                Success Stories
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
