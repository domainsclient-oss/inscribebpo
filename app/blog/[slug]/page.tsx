import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { PageBanner } from "@/components/site/page-banner";
import { BlogPost } from "@/components/blog/blog-post";
import { SiteFooter } from "@/components/site/site-footer";
import { blogPosts } from "@/lib/blog-posts";

/** Pre-renders every post at build time so each gets a static route. */
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) return {};

  return { title: post.metaTitle, description: post.metaDescription };
}

/**
 * Reads `params` and so must stay inside a `<Suspense>` boundary: the slug is
 * URL data, which isn't part of the route's static shell. Keeping it in a
 * child lets the header and footer render instantly on navigation.
 */
async function PostBody({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) notFound();

  return (
    <>
      <PageBanner
        alt={post.bannerAlt}
        crumbs={[
          { href: "/", label: "Inscribe INC" },
          { href: "/blog", label: "Blog" },
          { label: post.category },
        ]}
        height={1024}
        priority
        src={post.bannerImage}
        title={post.title}
        width={1536}
      />

      <BlogPost post={post} />
    </>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <PostBody params={params} />
      </Suspense>

      <SiteFooter />
    </main>
  );
}
