import Image from "next/image";
import { ProposalForm } from "@/components/site/proposal-form";
import { cn } from "@/lib/utils";

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
        <ProposalForm
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
            <ProposalForm
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
