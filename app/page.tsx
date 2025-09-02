import type { Metadata } from "next";
import Header from "@/components/common/header";
import Hero from "@/components/sections/Hero";
import Showcase from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import About from "@/components/sections/Experience";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Retrato 23 - Fotos profissionais para profissionais",
  description:
    "Fotos profissionais para profissionais. Capturamos a essência de cada profissional e criamos retratos que refletem sua identidade e autenticidade.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <main>
        <Hero />
        <Showcase />
        <Services />
        <About />
        <CTA />
      </main>
    </div>
  );
}
