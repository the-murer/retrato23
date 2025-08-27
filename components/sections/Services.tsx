"use client";
import { Typography } from "@/stories/typography";
import { Camera, Heart, Palette, Briefcase, Calendar, Users } from "lucide-react";
import Section from "@/components/sections/Section";

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

export default function Services() {
  return (
    <Section
      id="services"
      tone="default"
      background={{ type: "solid", color: "secondary" }}
      padding="xl"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Typography variant="h2" className="font-display text-4xl lg:text-5xl font-light text-foreground mb-6">
            O que fotografamos
          </Typography>
          <Typography variant="body" className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            De retratos íntimos a grandes celebrações, nós especializamos-nos em capturar os momentos mais significativos da vida com arte e elegância.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-border/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>

              <div className="space-y-4">
                <div>
                  <Typography variant="h3" className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </Typography>
                  <Typography variant="body" className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </Typography>
                </div>

                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 text-sm font-medium rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 max-w-3xl mx-auto">
            <Typography variant="h3" className="font-display text-2xl font-light text-foreground mb-4">
              Sessões Personalizadas Disponíveis
            </Typography>
            <Typography variant="body" className="text-muted-foreground leading-relaxed mb-6">
              Cada cliente é único, e assim é cada sessão. Trabalhamos de perto com você para criar uma experiência personalizada que reflete sua visão e captura sua beleza autêntica.
            </Typography>
            <button className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300">
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
