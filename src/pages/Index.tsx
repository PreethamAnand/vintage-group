import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Sectors } from "@/components/site/Sectors";
import { Capabilities } from "@/components/site/Capabilities";
import { Metrics } from "@/components/site/Metrics";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Verdara — Integrated Solutions for Sustainable Growth";
    const setMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Verdara delivers integrated, technology-driven solutions across agriculture, agrotech, infrastructure, green energy, and dairy."
    );
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Sectors />
      <Capabilities />
      <Metrics />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
