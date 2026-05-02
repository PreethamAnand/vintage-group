import { cn } from "@/lib/utils";
import logoSrc from "@/assets/logo.png";

export const Logo = ({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src={logoSrc}
        alt="Vintage — Absolutely Pure"
        className={cn(
          "h-16 md:h-20 w-auto object-contain",
          variant === "light" && "brightness-0 invert"
        )}
      />
    </div>
  );
};