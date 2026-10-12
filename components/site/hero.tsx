"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Sorting and Categorising Medical Records",
    text: "We structure complex records into clear, searchable formats, saving time and improving case accuracy.",
    image: "/images/home/hero/herobg1.webp",
    alignment: "left",
    imagePosition: "object-[20%_center] md:object-center",
    mirrored: false,
  },
  {
    title: "APS Summary for Underwriting Services",
    text: "Concise, underwriter-ready summaries that highlight key medical information for faster decisions.",
    image: "/images/home/hero/herobg2.webp",
    alignment: "right",
    imagePosition: "object-[100%_center] md:object-center",
    mirrored: false,
  },
  {
    title: "Medical Record Services",
    text: "End-to-end medical record review and organization tailored for legal and insurance workflows.",
    image: "/images/home/hero/herobg1.webp",
    alignment: "right",
    imagePosition: "object-[15%_center] md:object-center",
    mirrored: true,
  },
] as const;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  function showSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
  }

  return (
    <section
      aria-label="Featured services"
      aria-roledescription="carousel"
      className="relative isolate flex h-[min(560px,calc(100svh-110px))] min-h-[440px] overflow-hidden bg-brand md:min-h-[480px]"
    >
      <Image
        key={slide.image + activeIndex}
        alt=""
        className={cn(
          "object-cover",
          slide.imagePosition,
          slide.mirrored && "[transform:scaleX(-1)]"
        )}
        fill
        priority={activeIndex === 0}
        sizes="100vw"
        src={slide.image}
      />

      <div className="container-site relative z-10 flex w-full items-center py-8 sm:py-10">
        <div
          aria-live="polite"
          className={cn(
            "w-full max-w-[760px]",
            slide.alignment === "right" && "ml-auto text-right"
          )}
          key={activeIndex}
        >
          <Image
            alt="TÜV Rheinland, HIPAA, ISO 27001, and ISO 9001 certification marks"
            className={cn(
              "mb-4 h-auto w-full max-w-[520px] sm:mb-5",
              slide.alignment === "right" && "ml-auto"
            )}
            height={147}
            priority={activeIndex === 0}
            src="/images/home/hero/iso-logo.png"
            width={800}
          />
          <h1 className="text-[clamp(1.85rem,2.9vw,2.75rem)] leading-[1.15] font-semibold text-white">
            {slide.title}
          </h1>
          <p
            className={cn(
              "mt-3 max-w-[640px] text-[15px] leading-relaxed text-white sm:text-base",
              slide.alignment === "right" && "ml-auto text-right"
            )}
          >
            {slide.text}
          </p>
          <a
            className={cn(
              "mt-5 inline-flex min-h-[46px] items-center justify-center rounded-full bg-white px-7 text-[15px] font-medium text-brand transition-colors hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-px sm:text-base",
              slide.alignment === "right" && "min-w-[170px]"
            )}
            href="/contact-us"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <button
        aria-label="Previous slide"
        className="absolute top-1/2 left-3 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6 sm:size-11"
        onClick={() => showSlide(activeIndex - 1)}
        type="button"
      >
        <ChevronLeft aria-hidden="true" className="size-6" />
      </button>
      <button
        aria-label="Next slide"
        className="absolute top-1/2 right-3 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:size-11"
        onClick={() => showSlide(activeIndex + 1)}
        type="button"
      >
        <ChevronRight aria-hidden="true" className="size-6" />
      </button>

      <div
        aria-label="Choose a slide"
        className="absolute right-0 bottom-4 left-0 z-20 flex justify-center gap-2"
        role="group"
      >
        {slides.map((item, index) => (
          <button
            aria-current={index === activeIndex ? "true" : undefined}
            aria-label={`Show slide ${index + 1}: ${item.title}`}
            className={cn(
              "h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
              index === activeIndex
                ? "w-8 bg-white"
                : "w-2.5 bg-white/55 hover:bg-white/80"
            )}
            key={item.title}
            onClick={() => showSlide(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
