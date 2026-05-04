import { Linkedin, Twitter, Instagram, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const INSIGHTS = [
  { tag: "Energy", title: "Hybrid solar farms reach grid parity in three new states" },
  { tag: "Agrotech", title: "How precision irrigation cut water use by 38% across pilots" },
  { tag: "Dairy", title: "Cold-chain traceability arrives at India's mid-tier processors" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-charcoal-foreground">
      {/* Newsletter / contact band */}
      <div className="container-px mx-auto max-w-7xl pt-20 pb-16 border-b border-charcoal-foreground/10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6 reveal">
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight text-balance">
              Let's build something <em className="italic font-normal text-accent">enduring.</em>
            </h3>
            <p className="mt-4 text-charcoal-foreground/65 max-w-md leading-relaxed">
              Subscribe for quarterly insights on sustainable infrastructure, agrotech, and the energy transition.
            </p>
            <form className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                required
                placeholder="you@company.com"
                className="bg-charcoal-foreground/5 border-charcoal-foreground/15 text-charcoal-foreground placeholder:text-charcoal-foreground/40 h-11"
              />
              <Button type="submit" variant="hero" className="h-11">
                Subscribe <ArrowRight />
              </Button>
            </form>
          </div>

          <div id="insights" className="lg:col-span-6 reveal">
            <div className="text-[11px] font-bold tracking-[0.28em] uppercase text-accent">Latest Insights</div>
            <ul className="mt-5 divide-y divide-charcoal-foreground/10">
              {INSIGHTS.map((i) => (
                <li key={i.title}>
                  <a href="#" className="group flex items-start gap-4 py-4 hover:bg-charcoal-foreground/5 -mx-2 px-2 rounded transition-colors">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-charcoal-foreground/50 mt-1 w-16 shrink-0">{i.tag}</span>
                    <span className="text-[15px] leading-snug text-charcoal-foreground/90 group-hover:text-charcoal-foreground flex-1">{i.title}</span>
                    <ArrowRight size={15} className="mt-1 text-charcoal-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 text-charcoal-foreground/65 text-sm leading-relaxed max-w-sm">
              Vintage is an integrated solutions group operating across agriculture, agrotech, infrastructure, green energy,
              and dairy — building sustainable ecosystems for future generations.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 inline-flex items-center justify-center rounded-md border border-charcoal-foreground/15 text-charcoal-foreground/70 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-colors"
                  aria-label="social"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Navigate</div>
              <ul className="mt-4 space-y-2.5 text-sm text-charcoal-foreground/75">
                <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="#solutions" className="hover:text-accent transition-colors">Sectors</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Sectors</div>
              <ul className="mt-4 space-y-2.5 text-sm text-charcoal-foreground/75">
                <li>Agriculture</li>
                <li>Agrotech</li>
                <li>Infrastructure</li>
                <li>Green Energy</li>
                <li>Dairy</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-charcoal-foreground/75">
              <li className="flex items-start gap-3"><MapPin size={15} className="mt-0.5 text-accent shrink-0" /> Innovation Park, Sector 21, Bengaluru, India</li>
              <li className="flex items-center gap-3"><Mail size={15} className="text-accent shrink-0" /> vintagegroup.bharat@gmail.com</li>
              <li className="flex items-center gap-3"><Phone size={15} className="text-accent shrink-0" /> +91 8121078989</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-charcoal-foreground/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display text-sm text-charcoal-foreground/70 italic">
            Committed to building sustainable ecosystems for future generations.
          </p>
          <p className="text-xs text-charcoal-foreground/45">© {new Date().getFullYear()} Vintage Group. All rights reserved.<b>PREETHAM ANAND</b></p>
        </div>
      </div>
    </footer>
  );
};
