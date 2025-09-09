"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/common/button";
import { Download, ArrowRight } from "lucide-react";

interface Event {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

export default function EventsPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchEvent = async () => {
    try {
      const { eventId } = await params;
      const response = await fetch(`/api/event/${eventId}`);
      const eventData = await response.json();
      setEvent(eventData);
    } catch (error) {
      console.error("Error fetching event:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Evento não encontrado
          </h1>
          <p className="text-muted-foreground">
            O evento que você está procurando não existe.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="relative">
        {/* Hero Image Section */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover animate-fade-in"
          />

          {/* Floating Content Overlay */}
          <div className="absolute inset-0 z-20 flex items-end justify-center pb-16 px-4">
            <div className="text-center text-white max-w-4xl animate-slide-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                {event.name}
              </h1>
              {event.description && (
                <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  {event.description}
                </p>
              )}
              <Button
                asChild
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Visualizar fotos
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary-300/20 rounded-full animate-float hidden lg:block"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-primary-200/30 rounded-full animate-float hidden lg:block"
          style={{ animationDelay: "4s" }}
        ></div>
      </main>
    </div>
  );
}
