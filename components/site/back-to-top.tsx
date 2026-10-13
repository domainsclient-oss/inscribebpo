"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const shouldBeVisible = window.scrollY > 320;
      setVisible((current) =>
        current === shouldBeVisible ? current : shouldBeVisible
      );
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  function scrollToTop() {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }

  return (
    <button
      aria-hidden={!visible}
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-30 inline-flex size-12 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_24px_rgba(3,46,66,0.24)] transition-[opacity,transform,background-color] duration-200 hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none sm:right-7 sm:bottom-7 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      onClick={scrollToTop}
      tabIndex={visible ? 0 : -1}
      type="button"
    >
      <FontAwesomeIcon aria-hidden="true" className="size-5" icon={faArrowUp} />
    </button>
  );
}
