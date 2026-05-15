import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "OUR SECTORS", href: "#solutions" },
  { label: "SUSTAINABILITY", href: "#impact" },
  { label: "INSIGHTS", href: "#insights" },
  { label: "CONTACT US", href: "#contact" },
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
          ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-background/40 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="hidden md:flex container-px h-24 items-center justify-between gap-6">
          <a href="#home" aria-label="Vintage home">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[12px] font-semibold tracking-[0.18em] text-primary/85 hover:text-primary transition-colors duration-300 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-5"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="sm" variant="default" className="px-6 h-10 text-[11px] tracking-[0.2em] font-semibold">
              <a href="#contact">GET IN TOUCH</a>
            </Button>
          </div>
        </div>

        <div className="relative flex md:hidden h-16 items-center justify-between px-6">
          <button
            className="text-primary"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} strokeWidth={1.9} /> : <Menu size={30} strokeWidth={2} />}
          </button>

          <a href="#home" aria-label="Vintage home" className="absolute left-1/2 -translate-x-1/2">
            <Logo className="w-auto" imageClassName="h-9 w-auto" />
          </a>

          <a
            href="tel:+918121078989"
            aria-label="Call Vintage"
            className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elevated"
          >
            <Phone size={22} strokeWidth={2.25} />
          </a>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container-px py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-primary/85 text-sm font-semibold tracking-[0.18em]">
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