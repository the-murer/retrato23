import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/common/button";
import { Download, ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/animatedText";
import { getEventBySlug } from "@/lib/events";
import { mediaUrl, thumbKey } from "@/lib/utils";

type Props = { params: Promise<{ eventId: string }> };

// Rendered on first visit, then cached; admin changes call revalidatePath for the slug
export const revalidate = 3600;
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getEventBySlug((await params).eventId);
  return event ? { title: event.name, description: event.description } : {};
}

export default async function EventPage({ params }: Props) {
  const event = await getEventBySlug((await params).eventId);
  if (!event) notFound();

  return (
    <div className="min-h-screen bg-background">
      <main className="relative">
        {/* Hero Image Section */}
        <section className="hero relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10"></div>
          <div className="absolute inset-0 z-10 bg-black opacity-0 hero-dim"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mediaUrl(event.image)}
            alt={event.name}
            className="w-full h-full object-cover animate-fade-in"
          />

          {/* Floating Content Overlay */}
          <div className="hero-exit absolute inset-0 z-20 flex items-end justify-center pb-16 px-4">
            <div className="text-center text-white max-w-4xl animate-slide-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium italic tracking-[-0.01em] text-balance mb-6 leading-tight">
                <AnimatedText text={event.name} />
              </h1>
              {event.description && (
                <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  {event.description}
                </p>
              )}
              {event.link && (
                <Button
                  asChild
                  className="btn-tactile rounded-full bg-background text-primary-800 hover:bg-secondary-100 text-lg px-8 py-4 h-auto font-medium tracking-[0.02em] group"
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
              )}
            </div>
          </div>
        </section>

        {/* Photo Grid */}
        {event.photos.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
              {event.photos.map((key, index) => (
                <a
                  key={key}
                  href={mediaUrl(key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal block mb-4 break-inside-avoid overflow-hidden rounded-lg"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mediaUrl(thumbKey(key))}
                    alt={`${event.name} - foto ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </section>
        )}

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
