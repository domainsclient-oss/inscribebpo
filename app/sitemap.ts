import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { siteUrl } from "@/lib/site";

const staticRoutes = [
  "/",
  "/about-us",
  "/blog",
  "/contact-us",
  "/expert-medical-reviews",
  "/industries",
  "/industries/health-care-providers",
  "/industries/insurance-companies",
  "/industries/legal-professionals",
  "/our-services",
  "/our-services/aps-summary-services",
  "/our-services/litigation-support-services",
  "/our-services/mass-tort-cases-services",
  "/our-services/medical-record-services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: new URL(route, siteUrl).toString(),
    })),
    ...blogPosts.map((post) => ({
      url: new URL(post.href, siteUrl).toString(),
    })),
  ];
}
