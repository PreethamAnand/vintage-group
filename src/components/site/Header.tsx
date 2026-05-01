import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container-px mx-auto max-w-7xl flex h-16 md:h-20 items-center justify-between">
        <a href="#home" aria-label="Verdara home" className={cn(scrolled ? "text-foreground" : "text-primary-foreground")}>
          <Logo mark="currentColor" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full",
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-primary-foreground/85 hover:text-primary-foreground"
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" variant={scrolled ? "default" : "heroOutline"}>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <button
          className={cn("md:hidden p-2 -mr-2", scrolled ? "text-foreground" : "text-primary-foreground")}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-px py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-foreground/80 text-base font-medium">
                {n.label}
              </a>
            ))}
            <Button asChild><a href="#contact" onClick={() => setOpen(false)}>Get in Touch</a></Button>
          </div>
        </div>
      )}
    </header>
  );
};