import { useEffect, useRef, useState } from "react";

const METRICS = [
  { value: 320, suffix: "+", label: "Projects Delivered" },
  { value: 85000, suffix: "+", label: "Farmers Impacted", format: (n: number) => `${(n / 1000).toFixed(0)}K` },
  { value: 240, suffix: " MW", label: "Clean Energy Generated" },
  { value: 1.2, suffix: "M sq.ft", label: "Infrastructure Developed", decimals: 1 },
];

const Counter = ({ to, suffix = "", decimals = 0, format }: { to: number; suffix?: string; decimals?: number; format?: (n: number) => string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(to * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  const display = format ? format(val) : val.toFixed(decimals);
  return <span ref={ref}>{display}{suffix}</span>;
};

export const Metrics = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl reveal">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">Impact</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.1] text-balance">
            Measurable outcomes, <em className="italic font-normal text-primary">meaningful change.</em>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {METRICS.map((m) => (
            <div key={m.label} className="reveal bg-card p-8 md:p-10">
              <div className="font-display text-4xl md:text-5xl font-semibold text-primary tabular-nums tracking-tight">
                <Counter to={m.value} suffix={m.suffix} decimals={m.decimals ?? 0} format={m.format} />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};