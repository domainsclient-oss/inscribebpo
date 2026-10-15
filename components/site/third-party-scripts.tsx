"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    $zoho: {
      salesiq?: {
        widgetcode: string;
        values: Record<string, unknown>;
        ready: () => void;
      };
    };
  }
}

const GA_ID = "G-EJHZLWPMH9";
const GTM_ID = "GTM-5Q54Z3SX";
const PAGESENSE_SRC =
  "https://cdn-in.pagesense.io/js/60029195736/76d21546fb014b1790cea147fed797ac.js";
const SALESIQ_WIDGET_CODE =
  "siq93a0112730397c883319ad48d8cef896e53691b6bf1773a9562aa39e6cb6ad2e";

// Analytics and chat tags are heavy and run long main-thread tasks, so they
// load on the visitor's first interaction (or once the page has been idle for
// a while) instead of competing with the initial render.
const INTERACTION_EVENTS = [
  "pointerdown",
  "keydown",
  "touchstart",
  "scroll",
  "mousemove",
] as const;
const IDLE_FALLBACK_MS = 6000;

function addScript(src: string, id?: string) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  if (id) script.id = id;
  document.head.appendChild(script);
}

function loadThirdPartyScripts() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the raw `arguments` object.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);

  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  addScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);

  addScript(PAGESENSE_SRC);

  window.$zoho = window.$zoho || {};
  window.$zoho.salesiq = window.$zoho.salesiq || {
    widgetcode: SALESIQ_WIDGET_CODE,
    values: {},
    ready() {},
  };
  addScript("https://salesiq.zohopublic.in/widget", "zsiqscript");
}

export function ThirdPartyScripts() {
  useEffect(() => {
    let loaded = false;

    function load() {
      if (loaded) return;
      loaded = true;
      cleanup();
      loadThirdPartyScripts();
    }

    function cleanup() {
      window.clearTimeout(timer);
      for (const event of INTERACTION_EVENTS) {
        window.removeEventListener(event, load);
      }
    }

    const timer = window.setTimeout(load, IDLE_FALLBACK_MS);
    for (const event of INTERACTION_EVENTS) {
      window.addEventListener(event, load, { once: true, passive: true });
    }

    return cleanup;
  }, []);

  return null;
}
