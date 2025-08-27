"use client";
import { Button } from "@/stories/button";
import Image from "next/image";
import Section from "@/components/sections/Section";

export default function Hero() {
  return (
    <Section
      id="hero"
      tone="default"
      background={{
        type: "image",
        src: "/hero.jpg",
      }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-[80vh]">
          {/* Text Content - Left Side */}
          <div className="space-y-10 text-white">
            <div className="space-y-8">
              {/* Main title with dramatic styling */}
              <div className="space-y-4 flex justify-center items-center">
                <Image
                  src="/light_logo.png"
                  alt="Elegant portrait photography"
                  width={350}
                  height={350}
                  className="object-cover drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            <div className="space-y-8">
              {/* Enhanced button group */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-black hover:bg-primary-300 backdrop-blur-sm px-10 py-5 rounded-full font-medium transition-all duration-300 text-lg"
                >
                  Portifólio
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-black hover:bg-primary-300 backdrop-blur-sm px-10 py-5 rounded-full font-medium transition-all duration-300 text-lg"
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
