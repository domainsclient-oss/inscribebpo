import Image from "next/image";
import { cn } from "@/lib/utils";

const fieldClass =
  "peer w-full border-0 border-b border-black/15 bg-transparent px-0 pt-5 pb-3 text-[15px] text-navy placeholder:text-ink-2 focus:border-brand focus:ring-0 focus:outline-none";

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

export function RequestProposal({ className }: { className?: string }) {
  return (
    <section
      aria-label="Request for proposal"
      className={cn("bg-white py-14 sm:py-16 lg:py-20", className)}
      id="request-proposal"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,601px)_minmax(0,1fr)] lg:gap-0">
          {/* Artwork — rendered at its natural aspect ratio, uncropped */}
          <div className="mx-auto w-full max-w-[601px] lg:mx-0">
            <Image
              alt="Blood pressure monitor and a medical history form on a tablet"
              className="h-auto w-full"
              height={604}
              sizes="(min-width: 1024px) 601px, 90vw"
              src="/images/home/left-img11-webp.webp"
              width={601}
            />
          </div>

          {/* Form card — overlaps the artwork on large screens */}
          <div className="relative z-10 bg-white shadow-[0_18px_60px_rgba(3,46,66,0.12)] lg:-ml-16">
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
              <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight font-bold text-navy">
                Request For Proposal
              </h2>

              <form
                action="/api/request-proposal"
                className="mt-8"
                method="post"
              >
                <div className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <label className="sr-only" htmlFor={field.name}>
                        {field.label}
                      </label>
                      <input
                        autoComplete={field.autoComplete}
                        className={fieldClass}
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
                      className={cn(fieldClass, "min-h-[120px] resize-y")}
                      id="message"
                      name="message"
                      placeholder="Your Message Here"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="mt-10 flex justify-center">
                  <button
                    className="inline-flex min-h-[52px] items-center justify-center bg-brand px-10 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                    type="submit"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
