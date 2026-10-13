import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/site/page-banner";
import { SiteFooter } from "@/components/site/site-footer";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Inscribe’s Litigation Support Services - Inscribe INC",
  description:
    "Dive into our blog for the latest insights on BPO solutions, industry trends, and expert advice tailored for healthcare, insurance, and legal sectors.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <PageBanner
        alt="Inscribe team collaborating at a desk"
        crumbs={[{ href: "/", label: "Inscribe INC" }, { label: "Blog" }]}
        height={500}
        priority
        src="/images/industry/inner3.webp"
        title="Blog"
        width={1920}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <ul className="container-site grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <li className="flex" key={post.slug}>
              <article className="group relative flex h-full flex-col">
                <div className="overflow-hidden">
                  <Image
                    alt={post.bannerAlt}
                    className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    height={1024}
                    sizes="(min-width: 1024px) 380px, 90vw"
                    src={post.bannerImage}
                    width={1536}
                  />
                </div>

                <h2 className="mt-5 font-heading text-[20px] leading-snug font-bold text-navy transition-colors group-hover:text-brand">
                  <Link className="after:absolute after:inset-0" href={post.href}>
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 flex-1 text-[15px] leading-[1.9] text-ink-2">
                  {post.excerpt}
                </p>

                {/* Decorative: the whole card is already linked via the title. */}
                <span
                  aria-hidden="true"
                  className="mt-6 inline-flex h-11 w-fit items-center gap-2 self-start rounded-full bg-brand px-6 text-[13px] font-semibold uppercase text-white transition-colors group-hover:bg-brand-dark"
                >
                  Read More
                  <ChevronRight className="size-4 shrink-0" />
                </span>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </main>
  );
}
