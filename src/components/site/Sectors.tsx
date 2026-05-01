import { Sprout, Cpu, Building2, Sun, Milk, ArrowUpRight } from "lucide-react";

const SECTORS = [
  {
    icon: Sprout,
    title: "Agriculture",
    desc: "Modern farming practices and integrated supply chains that elevate yield, quality, and farmer prosperity.",
  },
  {
    icon: Cpu,
    title: "Agrotech",
    desc: "Precision tools, IoT sensors, and data platforms that transform fields into intelligent, productive ecosystems.",
  },
  {
    icon: Building2,
    title: "Infrastructure & Construction",
    desc: "Resilient, sustainable infrastructure engineered to support communities and economies for generations.",
  },
  {
    icon: Sun,
    title: "Green Energy",
    desc: "Solar, wind, and hybrid renewable systems that decarbonize operations and accelerate the energy transition.",
  },
  {
    icon: Milk,
    title: "Dairy",
    desc: "End-to-end dairy value chain optimization — from farm management to processing and distribution excellence.",
  },
];

export const Sectors = () => {
  return (
    <section id="solutions" className="relative py-24 md:py-32 bg-gradient-subtle">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl reveal">
          <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-accent">Our Sectors</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-primary text-balance leading-[1.1]">
            Five disciplines, <em className="italic font-medium">one integrated vision.</em>
          </h2>
          <div className="mt-5 h-[3px] w-20 bg-accent" />
          <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            We operate at the intersection of tradition and technology — building scalable solutions that
            move industries and communities forward.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="reveal group relative bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elevated hover:-translate-y-1 hover:border-accent/60 transition-all duration-500 ease-smooth overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -top-24 -right-24 size-48 rounded-full bg-accent/10 group-hover:bg-accent/15 transition-colors duration-700" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center size-14 rounded-full border-2 border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-primary">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-primary group-hover:gap-2.5 group-hover:text-accent transition-all duration-300">
                    LEARN MORE <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};