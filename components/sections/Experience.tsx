"use client";
import { Typography } from "@/stories/typography";
import Image from "next/image";
import Section from "@/components/sections/Section";

export default function About() {
  return (
    <Section
      id="about"
      tone="default"
      background={{ type: "solid", color: "secondary" }}
      padding="xl"
      className="relative overflow-hidden"
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200/30 to-secondary-300/30 rounded-3xl transform rotate-2 scale-105"></div>
              
              {/* Main image */}
              <div className="relative bg-background rounded-3xl shadow-2xl overflow-hidden transform -rotate-1">
                <Image 
                  src="/claudia.JPG" 
                  alt="Photographer portrait" 
                  width={600} 
                  height={750} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-200 rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-secondary-300 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <Typography variant="h2" className="font-display text-4xl lg:text-5xl font-light text-foreground">
                Sobre a Fotógrafa
              </Typography>
              
              <Typography variant="body" className="text-lg text-muted-foreground leading-relaxed">
                Sou <span className="font-semibold text-foreground">Claudia Neckel Schuster</span>, fundadora do Retrato 23. Minha missão é capturar imagens autênticas, elegantes e imortais que contam sua história única.
              </Typography>
              
              <Typography variant="body" className="text-lg text-muted-foreground leading-relaxed">
                Com mais de uma década de experiência em fotografia de retrato, desenvolvi um estilo que combina elegância clássica com arte contemporânea. Cada sessão é uma oportunidade para criar algo extraordinário.
              </Typography>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <Typography variant="h3" className="font-display text-3xl font-light text-primary-600 mb-2">
                  1000+
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground">
                  Clientes Felizes
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="h3" className="font-display text-3xl font-light text-primary-600 mb-2">
                  10+
                </Typography>
                <Typography variant="body" className="text-sm text-muted-foreground">
                  Anos de Experiência
                </Typography>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <Typography variant="h3" className="font-display text-xl font-light text-foreground mb-4">
                Minha Filosofia
              </Typography>
              <Typography variant="body" className="text-muted-foreground leading-relaxed">
                "A fotografia é mais do que capturar imagens—é sobre revelar a essência de quem você é. Cada retrato deve sentir-se como um momento de verdade, uma celebração de sua beleza e personalidade única."
              </Typography>
            </div>

            {/* Call to action */}
            <div className="pt-4">
              <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
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
