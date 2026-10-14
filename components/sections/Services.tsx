"use client";
import { AnimatedText } from "@/components/ui/animatedText";
import { Typography } from "@/components/common/typography";
import { Camera, Heart, Palette, Briefcase, Calendar, Users } from "lucide-react";
import { Section } from "@/components/common/section";
import { AppSection } from "@/lib/commons";

const services = [
  {
    icon: Camera,
    title: "Retratos",
    description: "Fotos profissionais e retratos artísticos que capturam sua identidade e autenticidade.",
    category: "Individual"
  },
  {
    icon: Calendar,
    title: "Eventos",
    description: "Fotos de eventos e momentos especiais que capturam a essência de cada celebração.",
    category: "Eventos"
  },
  {
    icon: Camera,
    title: "Produtos",
    description: "Fotos de produtos e marcas que capturam a essência de cada produto e marca.",
    category: "Produtos"
  },
  {
    icon: Briefcase,
    title: "Corporativa",
    description: "Fotos corporativas e de equipe que capturam a essência de cada empresa e equipe.",
    category: "Corporativo"
  },
];

export default function Services({ name, href }: AppSection) {
  return (
    <Section
      id={href}
      tone="default"
      background={{ type: "solid", color: "secondary" }}
      padding="xl"
      className="grain relative overflow-clip"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Typography variant="h2" className="font-display text-4xl lg:text-5xl font-medium tracking-[-0.01em] text-balance text-foreground mb-6">
            <AnimatedText text="O que" />{" "}
            <em className="accent"><AnimatedText text="fotografamos" from={2} /></em>
          </Typography>
          <Typography variant="body" className="reveal text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            De retratos íntimos a grandes celebrações, nós especializamos-nos em capturar os momentos mais significativos da vida com arte e elegância.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              style={{ "--d": index } as React.CSSProperties}
              className="reveal group relative bg-card rounded-xl p-8 shadow-sm border border-border/70 transition-[translate,box-shadow] duration-500 ease-craft hover:-translate-y-1 hover:shadow-lg"
            >
              <span aria-hidden className="absolute right-8 top-8 font-display text-2xl italic leading-none lining-nums text-secondary-600">{String(index + 1).padStart(2, "0")}</span>
              <div className="w-16 h-16 rounded-full border border-primary-300 bg-primary-50 flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-primary group-hover:border-primary">
                <service.icon className="w-7 h-7 stroke-[1.25] text-primary-700 transition-colors duration-500 group-hover:text-primary-foreground" />
              </div>

              <div className="space-y-4">
                <div>
                  <Typography variant="h3" className="font-display text-[1.75rem] font-medium leading-tight text-foreground mb-2">
                    {service.title}
                  </Typography>
                  <Typography variant="body" className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </Typography>
                </div>

                <div className="pt-2">
                  <span className="eyebrow text-secondary-800">
                    {service.category}
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-secondary-100/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="reveal mt-16 text-center">
          <div className="bg-card rounded-xl p-8 shadow-sm border border-border/70 outline outline-1 -outline-offset-8 outline-secondary-300/70 max-w-3xl mx-auto">
            <Typography variant="h3" className="font-display text-2xl font-medium italic text-balance text-foreground mb-4">
              <AnimatedText text="Sessões Personalizadas Disponíveis" />
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed mb-6">
              Cada cliente é único, e assim é cada sessão. Trabalhamos de perto com você para criar uma experiência personalizada que reflete sua visão e captura sua beleza autêntica.
            </Typography>
            <button className="btn-tactile inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium tracking-[0.02em] hover:bg-primary-900">
              Discutir Sua Visão
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
