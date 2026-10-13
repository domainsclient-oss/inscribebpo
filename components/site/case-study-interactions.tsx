"use client";

import { useState, type FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  "Inscribe’s service quality is outstanding. They’ve consistently exceeded our expectations with their detailed work.",
  "Inscribe team revolutionized our IME workflow. Their accuracy and swift turnaround are exactly what we needed.",
  "Choosing Inscribe was a game-changer. Their medical summaries have brought clarity and efficiency to our processes.",
];

const inputClass =
  "mt-2 min-h-12 w-full border border-slate-300 bg-white px-4 text-[15px] text-navy placeholder:text-slate-500 focus:border-brand focus:outline-2 focus:outline-offset-2 focus:outline-brand";

export function CaseStudyForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "This form is not connected yet. Please contact sales@inscribebpo.com to request the case study."
    );
  }

  return (
    <form
      className="bg-white p-6 text-navy shadow-[0_18px_60px_rgba(3,46,66,0.2)] sm:p-8 lg:p-9"
      id="download-form"
      onSubmit={handleSubmit}
    >
      <h2 className="max-w-[18ch] text-[clamp(1.7rem,2.8vw,2.15rem)] leading-tight font-bold">
        Get your FREE copy of our case study now!
      </h2>

      <div className="mt-7 grid gap-4">
        <div>
          <label className="text-sm font-medium" htmlFor="case-study-name">
            Your Name <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="name"
            className={inputClass}
            id="case-study-name"
            name="name"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="case-study-email">
            Your Email <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="email"
            className={inputClass}
            id="case-study-email"
            name="email"
            required
            type="email"
          />
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="case-study-company">
            Company <span className="text-brand" aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="organization"
            className={inputClass}
            id="case-study-company"
            name="company"
            required
          />
        </div>
      </div>

      <button
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center bg-brand px-5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:text-base"
        type="submit"
      >
        Download Case Study Now!
      </button>

      <p aria-live="polite" className="mt-3 min-h-5 text-sm text-red-800">
        {notice}
      </p>
    </form>
  );
}

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const previousIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;

  return (
    <section
      aria-label="Client testimonials"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="container-site">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-[clamp(2rem,4vw,3rem)] leading-tight font-bold">
            What clients say about Inscribe
          </h2>

          <figure
            aria-live="polite"
            className="mt-10 border-l-4 border-brand bg-paper px-6 py-8 sm:px-10 sm:py-11"
          >
            <blockquote className="text-[clamp(1.15rem,2.4vw,1.55rem)] leading-relaxed text-navy">
              “{testimonials[activeIndex]}”
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-ink-2">
              Anonymous <span className="font-normal">(Due to NDA)</span>
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-ink-2">
              {activeIndex + 1} of {testimonials.length}
            </p>
            <div className="flex gap-3">
              <button
                aria-label={`Show testimonial ${previousIndex + 1}`}
                className="inline-flex size-11 items-center justify-center border border-navy text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                onClick={() => setActiveIndex(previousIndex)}
                type="button"
              >
                <FontAwesomeIcon aria-hidden="true" icon={faArrowLeft} />
              </button>
              <button
                aria-label={`Show testimonial ${nextIndex + 1}`}
                className="inline-flex size-11 items-center justify-center border border-navy text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                onClick={() => setActiveIndex(nextIndex)}
                type="button"
              >
                <FontAwesomeIcon aria-hidden="true" icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
