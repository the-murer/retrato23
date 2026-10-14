"use client";
import { AnimatedText } from "@/components/ui/animatedText";
import { Typography } from "@/components/common/typography";
import Image from "next/image";
import { Section } from "@/components/common/section";
import { AppSection } from "@/lib/commons";

export default function About({ name, href }: AppSection) {
  return (
    <Section
      id={href}
      tone="default"
      background={{ type: "solid", color: "secondary" }}
      padding="xl"
      className="grain relative overflow-clip"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-24 h-24 bg-primary-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photographer Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Background decorative frame */}
              <div aria-hidden className="absolute inset-0 rounded-sm border border-secondary-500/50 bg-secondary-200/50 rotate-2 scale-105"></div>
              
              {/* Main image */}
              <div className="reveal-img relative bg-card rounded-sm shadow-2xl ring-[6px] ring-card overflow-clip -rotate-1">
                <Image 
                  src="/claudia.png" 
                  alt="Photographer portrait" 
                  width={600} 
                  height={750} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating accent elements */}
              <div aria-hidden className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-secondary-50 border border-secondary-700/40 shadow-lg flex items-center justify-center font-sans text-[1.75rem] font-extralight tracking-[-0.06em] text-primary-900 animate-float">23</div>
              <div aria-hidden className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full border border-primary-700/30 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <Typography variant="h2" className="font-display text-4xl lg:text-5xl font-medium tracking-[-0.01em] text-foreground">
                <AnimatedText text="Sobre a" />{" "}
                <em className="accent"><AnimatedText text="Fotógrafa" from={2} /></em>
              </Typography>
              
              <Typography variant="body" className="reveal text-lg text-muted-foreground leading-relaxed">
                Sou <span className="font-display text-[1.2em] leading-none font-medium italic text-primary-800">Claudia Neckel Schuster</span>, fundadora do Retrato 23. Minha missão é capturar imagens autênticas, elegantes e imortais que contam sua história única.
              </Typography>
              
              <Typography variant="body" className="reveal text-lg text-muted-foreground leading-relaxed">
                Com mais de uma década de experiência em fotografia de retrato, desenvolvi um estilo que combina elegância clássica com arte contemporânea. Cada sessão é uma oportunidade para criar algo extraordinário.
              </Typography>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-2 pt-6 border-t border-border divide-x divide-border">
              <div className="text-center">
                <Typography variant="h3" className="font-display text-4xl md:text-5xl xl:text-5xl leading-none font-medium italic lining-nums text-primary-700 mb-2">
                  1000<span className="text-secondary-600">+</span>
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground">
                  Clientes Felizes
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="h3" className="font-display text-4xl md:text-5xl xl:text-5xl leading-none font-medium italic lining-nums text-primary-700 mb-2">
                  10<span className="text-secondary-600">+</span>
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground">
                  Anos de Experiência
                </Typography>
              </div>
            </div>

            {/* Philosophy */}
            <div className="reveal rounded-xl border border-border/70 border-l-2 border-l-secondary-500 bg-card/70 p-6 shadow-sm">
              <Typography variant="h3" className="eyebrow text-secondary-800 mb-4">
                <AnimatedText text="Minha Filosofia" />
              </Typography>
              <Typography variant="body" className="font-serif text-foreground/80 leading-relaxed">
                "A fotografia é mais do que capturar imagens—é sobre revelar a essência de quem você é. Cada retrato deve sentir-se como um momento de verdade, uma celebração de sua beleza e personalidade única."
              </Typography>
            </div>

            {/* Call to action */}
            <div className="reveal pt-4">
              <button className="btn-tactile inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-[0.02em] hover:bg-primary-900">
                Vamos conversar?
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
