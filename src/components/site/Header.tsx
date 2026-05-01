import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
      <div className="container-px mx-auto max-w-7xl flex h-20 md:h-24 items-center justify-between gap-6">
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

        <button
          className="lg:hidden p-2 -mr-2 text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
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