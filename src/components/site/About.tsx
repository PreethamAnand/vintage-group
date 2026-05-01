import { CheckCircle2 } from "lucide-react";

const PILLARS = [
  "Long-term partnership over short-term wins",
  "Engineering rigor across every discipline",
  "Sustainability embedded by design",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 reveal">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">About Verdara</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.1] text-balance">
              A multi-sector group, unified by <em className="italic font-normal text-primary">purpose.</em>
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              Verdara brings together engineers, agronomists, technologists, and operators to deliver integrated
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
              <div className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Mission</div>
                <p className="mt-3 text-[15px] leading-relaxed">Engineer integrated, sustainable systems that elevate communities and economies.</p>
              </div>
              <div className="bg-primary text-primary-foreground rounded-xl p-6 shadow-elevated">
                <div className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">Vision</div>
                <p className="mt-3 text-[15px] leading-relaxed">A future where growth and stewardship are inseparable.</p>
              </div>
              <div className="col-span-2 bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-5">Trusted Across the Ecosystem</div>
                <div className="grid grid-cols-4 gap-6 items-center">
                  {["AGRIO", "TERRA", "NOVUS", "HELIO"].map((b) => (
                    <div key={b} className="font-display text-foreground/40 hover:text-foreground/70 transition-colors text-center text-sm font-semibold tracking-[0.15em]">
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