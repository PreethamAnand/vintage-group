import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) => {
  const wordColor = variant === "light" ? "text-accent" : "text-accent";
  const subColor = variant === "light" ? "text-primary-foreground/80" : "text-primary";
  const markGreen = variant === "light" ? "hsl(var(--primary-foreground))" : "hsl(var(--primary))";
  const markGold = "hsl(var(--accent))";
  return (
    <div className={cn("flex flex-col items-start leading-none", className)}>
      <svg width="56" height="38" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        {/* sun */}
        <circle cx="22" cy="14" r="8" fill={markGold} />
        {/* barn */}
        <path d="M6 38 V24 L18 14 L30 24 V38 Z" fill={markGreen} />
        <rect x="14" y="28" width="8" height="10" fill={markGold} opacity="0.95" />
        {/* cow silhouette */}
        <path
          d="M38 38 V30 C38 28 39.5 27 41 27 H52 C53.5 27 55 28 55 30 V38 H52 V34 H41 V38 Z M55 28 L58 25 L57 30 Z"
          fill={markGreen}
        />
        {/* small grass line */}
        <path d="M4 40 H62" stroke={markGreen} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className={cn("font-display text-xl font-bold tracking-[0.18em] mt-1", wordColor)}>
        VINTAGE
      </span>
      <span className={cn("text-[9px] font-semibold tracking-[0.32em] mt-0.5", subColor)}>
        ABSOLUTELY PURE
      </span>
    </div>
  );
};