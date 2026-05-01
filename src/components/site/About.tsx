import { CheckCircle2 } from "lucide-react";

const PILLARS = [
  "Long-term partnership over short-term wins",
  "Engineering rigor across every discipline",
  "Sustainability embedded by design",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 reveal">
            <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-accent">About Vintage</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-primary leading-[1.1] text-balance">
              A multi-sector group, unified by <em className="italic font-medium">purpose.</em>
            </h2>
            <div className="mt-5 h-[3px] w-20 bg-accent" />
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              Vintage brings together engineers, agronomists, technologists, and operators to deliver integrated
              solutions across the industries that feed, power, and build modern economies.
            </p>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              Our mission is to make sustainable practice the most profitable practice — and to prove it, project
              after project.
            </p>

            <ul className="mt-8 space-y-3">
              {PILLARS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 size={18} className="mt-0.5 text-primary shrink-0" />
                  <span className="text-[15px]">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 reveal">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-2xl p-7 shadow-card">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Mission</div>
                <p className="mt-3 font-display text-lg leading-snug text-primary">Engineer integrated, sustainable systems that elevate communities and economies.</p>
              </div>
              <div className="bg-primary text-primary-foreground rounded-2xl p-7 shadow-elevated">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Vision</div>
                <p className="mt-3 font-display text-lg leading-snug">A future where growth and stewardship are inseparable.</p>
              </div>
              <div className="col-span-2 bg-card border border-border rounded-2xl p-7 shadow-card">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent mb-5">Trusted Across the Ecosystem</div>
                <div className="grid grid-cols-4 gap-6 items-center">
                  {["AGRIO", "TERRA", "NOVUS", "HELIO"].map((b) => (
                    <div key={b} className="font-display text-primary/40 hover:text-primary/80 transition-colors text-center text-sm font-bold tracking-[0.18em]">
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};