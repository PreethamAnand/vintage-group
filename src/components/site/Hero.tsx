import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Aerial view of sustainable farmland with wind turbines"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary)/0.6)_0%,_transparent_60%)]" />

      {/* subtle grid lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
        <defs>
          <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="container-px mx-auto max-w-7xl relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-md text-primary-foreground/90 text-xs font-medium tracking-wide animate-fade-in">
            <span className="size-1.5 rounded-full bg-accent" />
            Sustainable. Integrated. Future-Ready.
          </div>
          <h1 className="mt-6 text-primary-foreground text-balance text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] animate-fade-in-slow">
            Integrated Solutions <br className="hidden md:block" />
            for <em className="italic font-normal text-primary-foreground/95">Sustainable Growth</em>
          </h1>
          <p className="mt-6 max-w-xl text-primary-foreground/85 text-base md:text-lg leading-relaxed animate-fade-in-slow [animation-delay:120ms]">
            Delivering innovation across agriculture, infrastructure, energy, and dairy ecosystems through
            technology-driven solutions that build a resilient tomorrow.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-slow [animation-delay:240ms]">
            <Button asChild size="lg" variant="hero">
              <a href="#solutions">Explore Solutions <ArrowRight /></a>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};