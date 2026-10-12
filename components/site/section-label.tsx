import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-heading text-xs font-semibold tracking-[0.18em] text-brand uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
