"use client";
import { Button } from "../common/button";
import Image from "next/image";
import { Section } from "@/components/common/section";
import { AppSection } from "@/lib/commons";

export default function Hero({ name, href }: AppSection) {
  return (
    <Section
      id={href}
      tone="default"
      background={{
        type: "image",
        src: "/hero.png"
      }}
      overlayClassName="bg-black opacity-0 hero-dim"
      className="hero min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-exit flex items-center min-h-[80vh]">
          <div className="space-y-10 text-white">
            <div className="space-y-8">
              <div className="animate-slide-up space-y-4 flex justify-center items-center">
                <Image
                  src="/light_logo.png"
                  alt="Elegant portrait photography"
                  width={350}
                  height={350}
                  className="object-cover drop-shadow-[0_4px_24px_rgb(30_32_26/0.5)]"
                  priority
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="animate-fade-in flex flex-col sm:flex-row gap-6" style={{ animationDelay: "0.8s" }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-tactile border-2 border-white/60 bg-background/85 text-foreground hover:bg-background backdrop-blur-md px-10 py-5 rounded-full font-medium tracking-[0.04em] text-lg"
                >
                  Portifólio
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-tactile border-2 border-primary bg-primary text-primary-foreground hover:bg-primary-900 hover:border-primary-900 hover:text-primary-foreground px-10 py-5 rounded-full font-medium tracking-[0.04em] text-lg"
                >
                  Agendar Sessão
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
