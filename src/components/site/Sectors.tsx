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
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">Our Sectors</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-balance leading-[1.1]">
            Five disciplines, <em className="italic font-normal text-primary">one integrated vision.</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
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
                className="reveal group relative bg-card border border-border rounded-xl p-8 shadow-card hover:shadow-elevated hover:-translate-y-1 hover:border-primary/30 transition-all duration-500 ease-smooth overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -top-20 -right-20 size-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-700" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center size-12 rounded-lg bg-primary/8 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all duration-300">
                    Learn more <ArrowUpRight size={15} />
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