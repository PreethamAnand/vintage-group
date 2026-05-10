import { Leaf, Sprout, Milk, HandHeart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

const FEATURES = [
  { icon: Leaf, title: "NATURAL", desc: "Pure and natural products" },
  { icon: Sprout, title: "SUSTAINABLE", desc: "Sustainable farming and practices" },
  { icon: Milk, title: "QUALITY", desc: "Premium quality you can trust" },
  { icon: HandHeart, title: "ETHICAL", desc: "Ethical, responsible and transparent" },
  { icon: Users, title: "COMMUNITY", desc: "Supporting farmers, strengthening communities" },
];

export const Hero = () => {
  return (
    <section id="home" className="relative bg-background overflow-hidden">
      {/* Mobile stacked layout */}
      <div className="md:hidden">
        <div className="bg-background pt-10 pb-8 px-6 text-center">
          <h1 className="font-display text-primary text-balance text-[40px] font-bold leading-[1.05] tracking-tight animate-fade-in-slow">
            Rooted in Nature,<br />
            Committed to Purity.
          </h1>
          <div className="mt-6 mx-auto h-[3px] w-24 bg-accent animate-fade-in-slow [animation-delay:120ms]" />
          <p className="mt-6 mx-auto max-w-sm text-primary/85 text-base leading-relaxed animate-fade-in-slow [animation-delay:200ms]">
            From our farms to your homes, we bring you pure, natural and sustainable goodness you can trust.
          </p>
          <div className="mt-8 animate-fade-in-slow [animation-delay:320ms]">
            <Button asChild size="lg" variant="default" className="px-8 tracking-[0.18em] text-[12px] font-semibold">
              <a href="#solutions">EXPLORE MORE</a>
            </Button>
          </div>
        </div>
        <div className="w-full">
          <img
            src={heroImg}
            alt="Vintage farm at sunset with green barn, golden sun, cow and chickens"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="bg-primary text-primary-foreground">
          <div className="px-6 py-8">
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex flex-col items-center text-center px-2">
                    <div className="size-12 rounded-full border-2 border-accent flex items-center justify-center text-accent">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-3 text-accent font-display text-[13px] font-bold tracking-[0.22em]">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-primary-foreground/85 leading-snug max-w-[180px]">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop hero scene (unchanged) */}
      <div className="relative min-h-[100svh] hidden md:flex items-center">
        <img
          src={heroImg}
          alt="Vintage farm at sunset with green barn, golden sun, cow and chickens"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="relative z-10 w-full pt-32 pb-44 md:pl-12 lg:pl-20">
          <div className="max-w-xl">
            <h1 className="font-display text-primary text-balance text-[44px] sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.05] tracking-tight animate-fade-in-slow">
              Rooted in Nature,<br />
              Committed to Purity.
            </h1>
            <div className="mt-6 h-[3px] w-24 bg-accent animate-fade-in-slow [animation-delay:120ms]" />
            <p className="mt-7 max-w-sm text-primary/80 text-base md:text-[17px] leading-relaxed animate-fade-in-slow [animation-delay:200ms]">
              From our farms to your homes, we bring you pure, natural and sustainable goodness you can trust.
            </p>
            <div className="mt-8 md:mt-10 animate-fade-in-slow [animation-delay:320ms]">
              <Button asChild size="lg" variant="default" className="px-8 tracking-[0.18em] text-[12px] font-semibold">
                <a href="#solutions">EXPLORE MORE</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Feature strip overlapping bottom of hero */}
        <div className="absolute bottom-0 inset-x-0 bg-primary text-primary-foreground z-10">
          <div className="container-px mx-auto max-w-7xl py-6">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4 divide-x divide-accent/30">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className={`flex flex-col items-center text-center px-3 ${i === 0 ? "md:border-l-0" : ""}`}
                >
                  <div className="size-9 rounded-full border-2 border-accent flex items-center justify-center text-accent">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-2 text-accent font-display text-[12px] font-bold tracking-[0.22em]">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-primary-foreground/85 leading-snug max-w-[160px]">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};