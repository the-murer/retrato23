"use client";
import { Typography } from "@/stories/typography";
import Section from "@/components/sections/Section";

export default function CTA() {
  return (
    <Section
      id="cta"
      tone="primary"
      background={{ type: "gradient", directionClass: "bg-gradient-to-br", from: "from-primary-600", to: "to-primary-800" }}
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-foreground/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-6">
            <Typography variant="h2" className="font-display text-4xl lg:text-6xl font-light text-primary-foreground leading-tight">
              Transforme sua imagem em arte
            </Typography>
            <Typography variant="h3" className="text-xl lg:text-2xl font-light text-primary-foreground/90 leading-relaxed">
              Agende sua sessão e descubra a beleza da fotografia de retrato autêntico
            </Typography>
          </div>

          {/* Description */}
          <Typography variant="body" className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Cada sessão é uma experiência única projetada para capturar sua autenticidade. Desde a consulta inicial até a entrega final, garantimos que cada detalhe reflete sua visão e personalidade.
          </Typography>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <Typography variant="body" className="text-primary-foreground/90 font-medium">
                Experiência Profissional
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <Typography variant="body" className="text-primary-foreground/90 font-medium">
                Abordagem Personalizada
              </Typography>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <Typography variant="body" className="text-primary-foreground/90 font-medium">
                Qualidade Premium
              </Typography>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="inline-flex items-center px-8 py-4 bg-primary-foreground text-primary-700 rounded-full font-medium hover:bg-secondary-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Contato
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition-colors duration-300">
              Ver Preços
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
