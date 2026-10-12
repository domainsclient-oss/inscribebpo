import Image from "next/image";
import type { BlogPostContent, BlogSection } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

/**
 * One alternating two-column section. `imageSide` controls which column the
 * artwork lands in on desktop; on mobile the copy always precedes the image
 * so the reading order stays sensible regardless of the visual order.
 */
function PostSection({
  section,
  priority,
}: {
  section: BlogSection;
  priority: boolean;
}) {
  const imageLeft = section.imageSide === "left";
  /** The backdrop artwork is dark, so copy over it flips to light. */
  const onDark = Boolean(section.background);

  return (
    <section
      className={cn(
        "relative isolate py-14 sm:py-16 lg:py-20",
        !section.background && (section.cards ? "bg-paper" : "bg-white")
      )}
    >
      {section.background && (
        <Image
          alt=""
          className="absolute inset-0 -z-10 size-full object-cover"
          fill
          sizes="100vw"
          src={section.background}
        />
      )}

      <div
        className={cn(
          "container-site",
          section.image &&
            "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
        )}
      >
        <div
          className={cn(
            imageLeft && "lg:order-2",
            section.align === "center" && "mx-auto max-w-[760px] text-center"
          )}
        >
          {section.eyebrow && (
            <p className="font-heading text-[17px] font-semibold text-brand">
              {section.eyebrow}
            </p>
          )}

          {section.heading && (
            <h2
              className={cn(
                "text-[clamp(1.6rem,3vw,2.25rem)] leading-tight font-bold",
                section.eyebrow && "mt-3",
                onDark ? "text-white" : "text-navy"
              )}
            >
              {section.heading}
            </h2>
          )}

          {section.subheading && (
            <h3 className="mt-5 font-heading text-[17px] font-semibold text-brand">
              {section.subheading}
            </h3>
          )}

          {section.paragraphs?.map((paragraph) => (
            <p
              className={cn(
                "mt-6 text-[15px] leading-[1.9]",
                onDark ? "text-white" : "text-ink-2"
              )}
              key={paragraph.slice(0, 48)}
            >
              {paragraph}
            </p>
          ))}

          {section.blocks?.map((block) => (
            <div className="mt-8" key={block.heading ?? block.paragraphs?.[0]}>
              {block.heading && (
                <h3 className="font-heading text-[17px] font-semibold text-brand">
                  {block.heading}
                </h3>
              )}

              {block.paragraphs?.map((paragraph) => (
                <p
                  className={cn(
                    "mt-3 text-[15px] leading-[1.9]",
                    onDark ? "text-white" : "text-ink-2"
                  )}
                  key={paragraph.slice(0, 48)}
                >
                  {paragraph}
                </p>
              ))}

              {block.bullets && (
                <ul className="mt-4 space-y-4">
                  {block.bullets.map((item) => (
                    <li
                      className={cn(
                        "border-l-2 border-brand pl-5 text-[15px] leading-[1.9]",
                        onDark ? "text-white" : "text-ink-2"
                      )}
                      key={item.slice(0, 48)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {section.bullets &&
            (section.bulletVariant === "heading" ? (
              <ul className="mt-7 space-y-6">
                {section.bullets.map((bullet) => (
                  <li key={bullet.text.slice(0, 48)}>
                    {bullet.term && (
                      <h3 className="font-heading text-[17px] font-semibold text-brand">
                        {bullet.term}
                      </h3>
                    )}
                    <p
                      className={cn(
                        "mt-2 text-[15px] leading-[1.9]",
                        onDark ? "text-white" : "text-ink-2"
                      )}
                    >
                      {bullet.text}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-7 space-y-5">
                {section.bullets.map((bullet) => (
                  <li
                    className={cn(
                      "border-l-2 border-brand pl-5 text-[15px] leading-[1.9]",
                      onDark ? "text-white" : "text-ink-2"
                    )}
                    key={bullet.text.slice(0, 48)}
                  >
                    {bullet.term && (
                      <strong
                        className={cn(
                          "font-heading font-semibold",
                          onDark ? "text-white" : "text-navy"
                        )}
                      >
                        {bullet.term}{" "}
                      </strong>
                    )}
                    {bullet.text}
                  </li>
                ))}
              </ul>
            ))}
        </div>

        {section.image && (
          <div
            className={cn(
              "mx-auto w-full max-w-[601px]",
              imageLeft && "lg:order-1"
            )}
          >
            <Image
              alt={section.image.alt}
              className="h-auto w-full"
              height={section.image.height}
              priority={priority}
              sizes="(min-width: 1024px) 601px, 90vw"
              src={section.image.src}
              width={section.image.width}
            />
          </div>
        )}

        {section.cards && (
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.cards.map((card) => (
              <li
                className="flex h-full flex-col border border-black/8 bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(0,0,0,0.1)]"
                key={card.heading}
              >
                <h3 className="font-heading text-[17px] leading-snug font-bold text-navy">
                  {card.heading}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.9] text-ink-2">
                  {card.text}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/** Renders a post body from `lib/blog-posts.ts`. */
export function BlogPost({ post }: { post: BlogPostContent }) {
  return (
    <article>
      {post.sections.map((section, index) => (
        <PostSection
          key={`${index}-${section.heading ?? ""}`}
          priority={index === 0}
          section={section}
        />
      ))}
    </article>
  );
}
