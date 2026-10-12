import { Mail, MapPin, Phone } from "lucide-react";
import { contact, socials } from "@/lib/site";
import { FacebookIcon, LinkedinIcon } from "./social-icons";

export function TopBar() {
  return (
    <div className="relative overflow-hidden bg-navy text-[13px] text-white">
      {/* Orange angled block on the right, as in the reference */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[30%] bg-brand [clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)] md:block"
      />
      <div className="container-site relative flex min-h-10 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <li>
            <a
              href={contact.emailHref}
              className="flex items-center gap-2 transition-colors hover:text-brand"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={contact.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-brand"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {contact.phone}
            </a>
          </li>
          <li className="hidden items-center gap-2 lg:flex">
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            <span>{contact.address}</span>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Inscribe BPO on Facebook"
            className="transition-opacity hover:opacity-75"
          >
            <FacebookIcon className="size-3.5" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Inscribe BPO on LinkedIn"
            className="transition-opacity hover:opacity-75"
          >
            <LinkedinIcon className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
