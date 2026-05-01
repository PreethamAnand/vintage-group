import { cn } from "@/lib/utils";

export const Logo = ({ className, mark = "currentColor" }: { className?: string; mark?: string }) => (
  <div className={cn("flex items-center gap-2.5", className)}>
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M16 3C9.5 8 6 13.5 6 19c0 5.5 4.5 10 10 10s10-4.5 10-10c0-5.5-3.5-11-10-16z" stroke={mark} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 11v14M11 17l5 4 5-4" stroke={mark} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="font-display text-lg font-semibold tracking-tight">Verdara</span>
  </div>
);