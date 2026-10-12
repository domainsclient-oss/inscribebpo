import { Home, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

type Detail = {
  icon: typeof Phone;
  title: string;
  lines: string[];
  href?: string;
};

const details: Detail[] = [
  {
    icon: Phone,
    title: "Phone Number",
    lines: [contact.phone],
    href: contact.phoneHref,
  },
  {
    icon: Home,
    title: "Email Address",
    lines: [contact.email],
    href: contact.emailHref,
  },
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["PO Box 66826, Scotts Valley,", "CA 95067, United States"],
  },
];

/**
 * Three centred contact cards sitting directly under the page banner: round
 * orange icon, navy title, then either a linked value (phone/email, rendered in
 * brand orange) or plain address lines.
 */
export function ContactDetails({ className }: { className?: string }) {
  return (
    <section
      aria-label="Contact details"
      className={cn("bg-white py-14 sm:py-16 lg:py-20", className)}
      id="contact-details"
    >
      <div className="container-site">
        <ul className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {details.map(({ icon: Icon, title, lines, href }) => (
            <li className="flex flex-col items-center text-center" key={title}>
              <span
                aria-hidden="true"
                className="flex size-[46px] items-center justify-center rounded-full bg-brand text-white"
              >
                <Icon className="size-5" strokeWidth={2} />
              </span>

              <h2 className="font-heading mt-5 text-[20px] leading-tight font-bold text-navy">
                {title}
              </h2>

              {href ? (
                <a
                  className="mt-3 text-[15px] leading-[1.8] text-brand transition-colors hover:text-brand-dark"
                  href={href}
                >
                  {lines[0]}
                </a>
              ) : (
                <p className="mt-3 text-[15px] leading-[1.8] text-ink-2">
                  {lines.map((line) => (
                    <span className="block" key={line}>
                      {line}
                    </span>
                  ))}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
