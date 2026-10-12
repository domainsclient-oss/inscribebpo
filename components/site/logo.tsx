import { cn } from "@/lib/utils";

// Text wordmark stand-in until the official logo file is added to /public.
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-heading text-[28px] leading-none font-bold tracking-tight text-brand",
        className
      )}
    >
      inscribe
    </span>
  );
}
