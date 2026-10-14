"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { AppSection } from "@/lib/commons";
import { AnimatedText } from "@/components/ui/animatedText";

type Photo = {
  src?: string; // empty = placeholder
  caption: string;
  left: number; // % of track width
  top: number; // % of viewport height
  width: number; // vw on desktop (2.4x on phones)
  ratio: string;
  speed: number; // horizontal parallax strength
};

const photos: Photo[] = [
  { caption: "Ensaio corporativo · 2024", left: 22, top: 58, width: 12, ratio: "4/5", speed: 0.2 },
  { caption: "Retrato executivo · 2024", left: 31, top: 12, width: 20, ratio: "1/1", speed: 0.45 },
  { caption: "Evento · 2024", left: 30, top: 66, width: 11, ratio: "1/1", speed: 0.1 },
  { caption: "Estúdio · 2024", left: 41, top: 52, width: 10, ratio: "3/4", speed: 0.6 },
  { caption: "Lifestyle · 2024", left: 47, top: 8, width: 10, ratio: "1/1", speed: 0.3 },
  { caption: "Gala · 2024", left: 53, top: 40, width: 15, ratio: "4/5", speed: 0.5 },
  { caption: "Personal branding · 2025", left: 63, top: 14, width: 12, ratio: "1/1", speed: 0.25 },
  { caption: "Retrato · 2025", left: 66, top: 62, width: 9, ratio: "3/4", speed: 0.55 },
  { caption: "Bastidores · 2025", left: 74, top: 26, width: 20, ratio: "1/1", speed: 0.35 },
  { caption: "Ensaio externo · 2025", left: 84, top: 8, width: 10, ratio: "3/4", speed: 0.6 },
  { caption: "Campanha · 2025", left: 88, top: 56, width: 12, ratio: "1/1", speed: 0.2 },
];

const quotes = [
  { left: 39, top: 14, text: "Não importa onde você começa, importa como você se mostra a partir dali." },
  { left: 79, top: 70, text: "Cada retrato nasce de uma conversa. Antes da câmera, buscamos entender quem está na frente dela." },
];

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const parallax = { transform: "translate3d(var(--x, 0), 0, 0)" };

export default function PhotoScatter({ href }: AppSection) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Vertical scroll pans the pinned track horizontally. One rAF-throttled handler
  // writes styles/CSS vars directly, so React never re-renders while scrolling.
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const items = [...track.querySelectorAll<HTMLElement>("[data-speed]")];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const vw = innerWidth;
      const distance = track.offsetWidth - vw;
      // Tall enough to pin for one screen plus the whole horizontal distance.
      section.style.height = `${distance + innerHeight}px`;
      const progress = clamp(-section.getBoundingClientRect().top / distance);
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
      section.style.setProperty("--p", String(clamp((progress - 0.3) / 0.2)));
      for (const el of items) {
        const b = el.getBoundingClientRect(); // untransformed wrapper, no feedback from --x
        const d = (b.left + b.width / 2 - vw / 2) / vw; // 0 = centered on screen
        el.style.setProperty("--focus", String(clamp(1 - Math.abs(d) * 1.6)));
        if (!reduce) el.style.setProperty("--x", `${-d * Number(el.dataset.speed) * vw * 0.3}px`);
      }
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(update);
    };

    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id={href}
      ref={sectionRef}
      className="relative h-[400vh] overflow-clip"
      style={{
        backgroundColor: "color-mix(in oklab, var(--primary-950), var(--primary-50) calc(var(--p, 0) * 100%))",
        color: "color-mix(in oklab, var(--primary-50), var(--primary-950) calc(var(--p, 0) * 100%))",
      }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div ref={trackRef} className="relative h-full w-[max(320vw,2600px)] will-change-transform">
          <h2 className="absolute inset-y-0 left-0 flex w-screen items-center justify-center px-4 text-center font-sans text-[clamp(2.25rem,7vw,7rem)] font-bold uppercase leading-[0.95] tracking-tight">
            <span>
              <AnimatedText text="Cada rosto," />
              <br />
              <AnimatedText text="uma" from={2} />{" "}
              <em className="font-display font-normal normal-case text-secondary-400">
                <AnimatedText text="história" from={3} />
              </em>
              <br />
              <AnimatedText text="contada em luz." from={4} />
            </span>
          </h2>

          {photos.map((photo, i) => (
            <figure
              key={i}
              data-speed={photo.speed}
              className="group absolute m-0 w-[calc(var(--w)*2.4vw)] max-w-[min(420px,40svh)] md:w-[calc(var(--w)*1vw)]"
              style={{ left: `${photo.left}%`, top: `${photo.top}%`, "--w": photo.width } as React.CSSProperties}
            >
              <div style={parallax}>
                <figcaption className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] opacity-70">
                  <span
                    className="h-1 w-6 shrink-0 origin-left bg-secondary-400 md:w-8"
                    style={{ transform: "scaleX(var(--focus, 0))" }}
                  />
                  <span className="truncate">{photo.caption}</span>
                </figcaption>
                <div className="relative overflow-hidden" style={{ aspectRatio: photo.ratio }}>
                  {photo.src ? (
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      sizes="(max-width: 768px) 45vw, 22vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "grayscale(calc(1 - var(--focus, 0)))" }}
                    />
                  ) : (
                    <div
                      role="img"
                      aria-label={photo.caption}
                      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary-300 to-primary-600 text-xs uppercase tracking-widest text-white/80 transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "grayscale(calc(1 - var(--focus, 0)))" }}
                    >
                      Foto {i + 1}
                    </div>
                  )}
                  {/* Tints unfocused photos with the section color */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-primary-500 mix-blend-multiply"
                    style={{ opacity: "calc((1 - var(--focus, 0)) * 0.6)" }}
                  />
                </div>
              </div>
            </figure>
          ))}

          {quotes.map((quote, i) => (
            <blockquote
              key={i}
              data-speed={0.3}
              className="absolute m-0 w-[min(80vw,26rem)] font-serif text-base leading-snug sm:text-xl"
              style={{ left: `${quote.left}%`, top: `${quote.top}%` }}
            >
              {/* Highlight sweeps across the lines as the quote reaches the screen center */}
              <span
                className="block"
                style={parallax}
              >
                <span
                  className="bg-no-repeat [box-decoration-break:clone]"
                  style={{
                    backgroundImage: "linear-gradient(var(--secondary-400), var(--secondary-400))",
                    backgroundSize: "calc(var(--focus, 0) * 100%) 40%",
                    backgroundPosition: "0 85%",
                  }}
                >
                  {quote.text}
                </span>
              </span>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
