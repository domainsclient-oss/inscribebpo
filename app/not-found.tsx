import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 items-center bg-paper">
        <section className="container-site py-20 text-center sm:py-28">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-brand">
            ERROR 404
          </p>
          <h1 className="mt-4 text-5xl font-semibold sm:text-7xl">
            Page not found
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-2 sm:text-lg">
            The page you&apos;re looking for may have moved or is no longer
            available.
          </p>
          <Link
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            href="/"
          >
            Back to Home
          </Link>
        </section>
      </main>
    </>
  );
}
