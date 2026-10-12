import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Crumb = {
  label: string;
  href?: string;
};

type PageBannerProps = {
  alt: string;
  className?: string;
  crumbs?: Crumb[];
  height: number;
  priority?: boolean;
  src: string;
  title: string;
  width: number;
};

export function PageBanner({
  alt,
  className,
  crumbs = [],
  height,
  priority = false,
  src,
  title,
  width,
}: PageBannerProps) {
  return (
    <section
      aria-label={title}
      className={cn("relative isolate bg-navy", className)}
    >
      <Image
        alt={alt}
        className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
        height={height}
        priority={priority}
        src={src}
        width={width}
      />

      {/* Readability scrim */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-navy/35"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="container-site">
          <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] leading-tight font-bold text-white drop-shadow-[0_2px_10px_rgba(3,46,66,0.45)]">
            {title}
          </h1>

          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mt-3 sm:mt-4">
              <ol className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[15px] text-white sm:text-base">
                {crumbs.map((crumb, index) => (
                  <li className="flex items-center gap-x-3" key={crumb.label}>
                    {index > 0 && (
                      <span aria-hidden="true" className="text-brand">
                        /
                      </span>
                    )}
                    {crumb.href ? (
                      <Link
                        className="transition-colors hover:text-brand"
                        href={crumb.href}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
