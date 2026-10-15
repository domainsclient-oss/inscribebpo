"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

const fieldClass =
  "peer w-full border-0 border-b border-black/15 bg-transparent px-0 pt-5 pb-3 text-[15px] text-navy placeholder:text-ink-2 focus:border-brand focus:ring-0 focus:outline-none";

const brandFieldClass =
  "w-full border border-white/40 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-ink-2 focus:border-navy focus:ring-0 focus:outline-none";

type Field = {
  name: "name" | "email" | "phone" | "website";
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

type SubmitState = "idle" | "submitting" | "success" | "partial" | "error";

export function ProposalForm({
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
  const [state, setState] = useState<SubmitState>("idle");
  const [notice, setNotice] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setNotice("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const submission = {
      formType: "proposal",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      website: formData.get("website"),
      message: formData.get("message"),
      fax: formData.get("fax"),
    };

    try {
      const response = await fetch("/api/form-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      const result: unknown = await response.json();
      const resultMessage =
        typeof result === "object" &&
        result !== null &&
        "message" in result &&
        typeof result.message === "string"
          ? result.message
          : "";

      if (response.ok) {
        setState("success");
        setNotice("Thanks. Your request was sent, and our team will contact you soon.");
        form.reset();
      } else if (
        typeof result === "object" &&
        result !== null &&
        "spreadsheetSaved" in result &&
        "emailSent" in result &&
        (result.spreadsheetSaved === true || result.emailSent === true)
      ) {
        setState("partial");
        setNotice(resultMessage || "Your request was only partially processed. Please contact sales@inscribebpo.com.");
      } else {
        setState("error");
        setNotice(resultMessage || "We could not submit your request. Please try again.");
      }
    } catch {
      setState("error");
      setNotice("We could not submit your request. Check your connection and try again.");
    }
  }

  const isDisabled = state === "submitting" || state === "success" || state === "partial";

  return (
    <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
      {eyebrow && (
        <p
          className={cn(
            "font-heading text-xs font-semibold tracking-[0.18em] uppercase",
            isBrand ? "text-white" : "text-brand"
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

      <form className="mt-8" onSubmit={handleSubmit}>
        <input
          aria-hidden="true"
          autoComplete="off"
          className="sr-only"
          name="fax"
          tabIndex={-1}
        />
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2",
            isBrand ? "gap-4" : "gap-x-10 gap-y-2"
          )}
        >
          {fields.map((field) => (
            <div key={field.name}>
              <label className="sr-only" htmlFor={`proposal-${field.name}`}>
                {field.label}
              </label>
              <input
                autoComplete={field.autoComplete}
                className={isBrand ? brandFieldClass : fieldClass}
                id={`proposal-${field.name}`}
                maxLength={
                  field.name === "name"
                    ? 120
                    : field.name === "email"
                      ? 254
                      : field.name === "phone"
                        ? 50
                        : 500
                }
                name={field.name}
                placeholder={field.label}
                required={field.required}
                type={field.type}
              />
            </div>
          ))}

          <div className="sm:col-span-2">
            <label className="sr-only" htmlFor="proposal-message">
              Your Message Here
            </label>
            <textarea
              className={cn(
                isBrand ? brandFieldClass : fieldClass,
                "min-h-[120px] resize-y"
              )}
              id="proposal-message"
              maxLength={5000}
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
              "inline-flex min-h-[52px] items-center justify-center px-10 text-[15px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-70",
              isBrand
                ? "bg-white text-brand outline-white hover:bg-navy hover:text-white"
                : "bg-brand text-white outline-brand hover:bg-brand-dark"
            )}
            disabled={isDisabled}
            type="submit"
          >
            {state === "submitting"
              ? "Sending..."
              : state === "success" || state === "partial"
                ? "Request received"
                : "Submit Now"}
          </button>
        </div>
        <p
          aria-live="polite"
          className={cn(
            "mt-4 min-h-5 text-sm",
            state === "success"
              ? "text-green-800"
              : state === "error" || state === "partial"
                ? "text-red-800"
                : "text-ink-2"
          )}
          role={state === "error" || state === "partial" ? "alert" : "status"}
        >
          {notice}
        </p>
      </form>
    </div>
  );
}
