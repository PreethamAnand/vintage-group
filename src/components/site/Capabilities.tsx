import { Network, Truck, Leaf, Zap, GitBranch, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Network, title: "Technology Integration", desc: "Unified digital platforms connecting field, factory, and finance." },
  { icon: Truck, title: "Supply Chain Efficiency", desc: "Streamlined logistics that reduce waste and accelerate delivery." },
  { icon: Leaf, title: "Sustainable Infrastructure", desc: "Low-impact engineering for long-life civic and industrial assets." },
  { icon: Zap, title: "Renewable Energy Systems", desc: "Solar, wind, and storage solutions designed for measurable returns." },
  { icon: GitBranch, title: "Dairy Value Chain", desc: "Optimization from procurement through distribution and traceability." },
  { icon: ShieldCheck, title: "Compliance & Quality", desc: "Rigorous standards across every project, every partner, every output." },
];

export const Capabilities = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-charcoal-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.18),_transparent_55%)]" />
      <div className="container-px mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-5 reveal">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">Capabilities</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.1] text-balance">
              Built to deliver — <span className="text-charcoal-foreground/70 italic font-normal">across every layer.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-charcoal-foreground/70 text-base md:text-lg leading-relaxed reveal">
            Our capabilities span strategy, engineering, technology, and operations — enabling integrated outcomes
            that traditional siloed providers simply cannot match.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-foreground/10 rounded-xl overflow-hidden border border-charcoal-foreground/10">
          {ITEMS.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="reveal group bg-charcoal p-8 hover:bg-charcoal-foreground/5 transition-colors duration-500">
                <Icon size={22} strokeWidth={1.5} className="text-accent" />
                <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-foreground/65">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};