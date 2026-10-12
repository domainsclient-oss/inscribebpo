import Image from "next/image";
import { cn } from "@/lib/utils";

const fieldClass =
  "peer w-full border-0 border-b border-black/15 bg-transparent px-0 pt-5 pb-3 text-[15px] text-navy placeholder:text-ink-2 focus:border-brand focus:ring-0 focus:outline-none";

/** Boxed white fields used by the orange `brand` variant. */
const brandFieldClass =
  "w-full border border-white/40 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-ink-2 focus:border-navy focus:ring-0 focus:outline-none";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "url";
  autoComplete?: string;
  required?: boolean;
};

const fields: Field[] = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", required: true },
  {
    name: "email",
    label: "E-Mail",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  { name: "phone", label: "Phone Number", type: "tel", autoComplete: "tel" },
  { name: "website", label: "Your Website", type: "url", autoComplete: "url" },
];

const artwork = {
  default: {
    alt: "Blood pressure monitor and a medical history form on a tablet",
    height: 604,
    src: "/images/home/left-img11-webp.webp",
    width: 601,
  },
  brand: {
    alt: "Consultant reviewing a case on his phone",
    height: 1058,
    src: "/images/service/request-quote.jpg",
    width: 800,
  },
  contact: {
    alt: "Glass office tower reflecting the sky",
    height: 640,
    src: "/images/contact/left-img-520x640-1.webp",
    width: 520,
  },
} as const;

export function RequestProposal({
  className,
  eyebrow,
  heading = "Request For Proposal",
  variant = "default",
}: {
  className?: string;
  eyebrow?: string;
  heading?: string;
  /**
   * `panel` is the artwork-less orange block used inside the service-detail
   * column — it skips the section padding and the centring container so the
   * host layout controls its width.
   */
  variant?: "default" | "brand" | "contact" | "panel";
}) {
  const isPanel = variant === "panel";
  // The panel reuses the orange card styling of the `brand` variant.
  const isBrand = variant === "brand" || isPanel;
  const isContact = variant === "contact";
  const image = artwork[isPanel ? "brand" : variant];

  if (isPanel) {
    return (
      <section
        aria-label={heading}
        className={cn("bg-brand", className)}
        id="request-proposal"
      >
        <ProposalCardBody
          eyebrow={eyebrow}
          heading={heading}
          isBrand
          isContact={false}
        />
      </section>
    );
  }

  return (
    <section
      aria-label={heading}
      className={cn("bg-white py-14 sm:py-16 lg:py-20", className)}
      id="request-proposal"
    >
      <div className="container-site">
        <div
          className={cn(
            "grid grid-cols-1 gap-10",
            isBrand && "items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-0",
            isContact &&
              "items-stretch lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-14",
            !isBrand &&
              !isContact &&
              "items-center lg:grid-cols-[minmax(0,601px)_minmax(0,1fr)] lg:gap-0"
          )}
        >
          {/* Artwork — cropped to the panel height in the brand/contact variants */}
          <div
            className={cn(
              "mx-auto w-full lg:mx-0",
              isBrand && "relative min-h-[320px] lg:ml-auto lg:max-w-[500px]",
              isContact && "relative min-h-[360px] max-w-[520px] lg:min-h-[620px]",
              !isBrand && !isContact && "max-w-[601px]"
            )}
          >
            <Image
              alt={image.alt}
              className={cn(
                isBrand || isContact ? "object-cover" : "h-auto w-full"
              )}
              fill={isBrand || isContact}
              height={isBrand || isContact ? undefined : image.height}
              sizes={
                isBrand
                  ? "(min-width: 1024px) 500px, 90vw"
                  : isContact
                    ? "(min-width: 1024px) 520px, 90vw"
                    : "(min-width: 1024px) 601px, 90vw"
              }
              src={image.src}
              width={isBrand || isContact ? undefined : image.width}
            />
          </div>

          {/* Form card — overlaps the artwork on large screens */}
          <div
            className={cn(
              "relative z-10",
              isBrand && "bg-brand lg:-ml-10 lg:my-10",
              isContact && "bg-white shadow-[0_18px_60px_rgba(3,46,66,0.12)]",
              !isBrand &&
                !isContact &&
                "bg-white shadow-[0_18px_60px_rgba(3,46,66,0.12)] lg:-ml-16"
            )}
          >
            <ProposalCardBody
              eyebrow={eyebrow}
              heading={heading}
              isBrand={isBrand}
              isContact={isContact}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Eyebrow + heading + form. Shared by every variant, including `panel`. */
function ProposalCardBody({
  eyebrow,
  heading,
  isBrand,
  isContact,
}: {
  eyebrow?: string;
  heading: string;
  isBrand: boolean;
  isContact: boolean;
}) {
  return (
    <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
      {eyebrow && (
        <p
          className={cn(
            "font-heading text-xs font-semibold tracking-[0.18em] uppercase",
            isBrand ? "text-white/85" : "text-brand"
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          "text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight font-bold",
          isBrand ? "mt-3 text-white" : "text-navy"
        )}
      >
        {heading}
      </h2>

      <form action="/api/request-proposal" className="mt-8" method="post">
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2",
            isBrand ? "gap-4" : "gap-x-10 gap-y-2"
          )}
        >
          {fields.map((field) => (
            <div key={field.name}>
              <label className="sr-only" htmlFor={field.name}>
                {field.label}
              </label>
              <input
                autoComplete={field.autoComplete}
                className={isBrand ? brandFieldClass : fieldClass}
                id={field.name}
                name={field.name}
                placeholder={field.label}
                required={field.required}
                type={field.type}
              />
            </div>
          ))}

          <div className="sm:col-span-2">
            <label className="sr-only" htmlFor="message">
              Your Message Here
            </label>
            <textarea
              className={cn(
                isBrand ? brandFieldClass : fieldClass,
                "min-h-[120px] resize-y"
              )}
              id="message"
              name="message"
              placeholder="Your Message Here"
              rows={3}
            />
          </div>
        </div>

        <div
          className={cn(
            "mt-10 flex",
            isContact ? "justify-start" : "justify-center"
          )}
        >
          <button
            className={cn(
              "inline-flex min-h-[52px] items-center justify-center px-10 text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4",
              isBrand
                ? "bg-white text-brand outline-white hover:bg-navy hover:text-white"
                : "bg-brand text-white outline-brand hover:bg-brand-dark"
            )}
            type="submit"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
}
