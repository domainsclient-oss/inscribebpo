import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Roboto } from "next/font/google";
import { BackToTop } from "@/components/site/back-to-top";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inscribe BPO | Medical Record Review & Litigation Support",
  description:
    "Inscribe BPO provides medical record sorting, APS summaries, litigation support and mass tort case management for attorneys, law firms and insurance companies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <BackToTop />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EJHZLWPMH9');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EJHZLWPMH9"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5Q54Z3SX');
          `}
        </Script>
        <Script
          src="https://cdn-in.pagesense.io/js/60029195736/76d21546fb014b1790cea147fed797ac.js"
          strategy="lazyOnload"
        />
        <Script id="zsiqchat" strategy="lazyOnload">
          {`
            var $zoho=$zoho || {};
            $zoho.salesiq = $zoho.salesiq || {
              widgetcode: "siq93a0112730397c883319ad48d8cef896e53691b6bf1773a9562aa39e6cb6ad2e",
              values: {},
              ready: function(){}
            };
            var d=document;
            var s=d.createElement("script");
            s.type="text/javascript";
            s.id="zsiqscript";
            s.defer=true;
            s.src="https://salesiq.zohopublic.in/widget";
            var t=d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s,t);
          `}
        </Script>
      </body>
    </html>
  );
}
