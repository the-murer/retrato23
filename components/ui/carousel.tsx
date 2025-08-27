"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";

type Breakpoints = {
  sm?: number; // <640
  md?: number; // <768
  lg?: number; // <1024
  xl?: number; // <1280
  default?: number; // >= last
};

const Carousel = <T,>({
  items,
  carouselItem,
  showControls = true,
  slideTime = 1,
  autoplay = true,
  pauseOnHover = true,
  breakpoints,
}: {
  items: T[];
  showControls?: boolean;
  slideTime?: number; // seconds
  autoplay?: boolean;
  pauseOnHover?: boolean;
  breakpoints?: Breakpoints; // slidesToShow por breakpoint
  carouselItem: (item: T) => React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const totalWindows = Math.max(1, items.length - slidesToShow + 1);

  const resolvedSlidesToShow = useMemo(() => {
    if (!breakpoints) return slidesToShow;
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (width < 640 && breakpoints.sm) return breakpoints.sm;
    if (width < 768 && breakpoints.md) return breakpoints.md;
    if (width < 1024 && breakpoints.lg) return breakpoints.lg;
    if (width < 1280 && breakpoints.xl) return breakpoints.xl;
    return breakpoints.default ?? slidesToShow;
  }, [breakpoints, slidesToShow]);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (breakpoints) {
        const next = (() => {
          const width = window.innerWidth;
          if (width < 640 && breakpoints.sm) return breakpoints.sm;
          if (width < 768 && breakpoints.md) return breakpoints.md;
          if (width < 1024 && breakpoints.lg) return breakpoints.lg;
          if (width < 1280 && breakpoints.xl) return breakpoints.xl;
          return breakpoints.default ?? 3;
        })();
        setSlidesToShow(next);
      } else {
        if (window.innerWidth < 640) {
          setSlidesToShow(1);
        } else if (window.innerWidth < 1024) {
          setSlidesToShow(2);
        } else {
          setSlidesToShow(3);
        }
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [breakpoints]);

  useEffect(() => {
    if (!autoplay) return;
    if (pauseOnHover && containerRef.current) {
      let hovering = false;
      const onEnter = () => (hovering = true);
      const onLeave = () => (hovering = false);
      containerRef.current.addEventListener("mouseenter", onEnter);
      containerRef.current.addEventListener("mouseleave", onLeave);

      const interval = setInterval(() => {
        if (!hovering) {
          setCurrentSlide((prev) => (prev + 1) % Math.max(1, items.length - slidesToShow + 1));
        }
      }, slideTime * 1000);

      return () => {
        clearInterval(interval);
        containerRef.current?.removeEventListener("mouseenter", onEnter);
        containerRef.current?.removeEventListener("mouseleave", onLeave);
      };
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(1, items.length - slidesToShow + 1));
    }, slideTime * 1000);

    return () => clearInterval(interval);
  }, [items.length, slidesToShow, slideTime, autoplay, pauseOnHover]);

  useEffect(() => {
    // Reset quando o número de janelas muda
    setCurrentSlide(0);
  }, [slidesToShow, items.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, items.length - slidesToShow + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      (prev - 1 + Math.max(1, items.length - slidesToShow + 1)) % Math.max(1, items.length - slidesToShow + 1)
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slideWidth = 100 / slidesToShow;
  const windowsCount = Math.max(1, items.length - slidesToShow + 1);

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 px-2 sm:px-4" style={{ width: `${slideWidth}%` }}>
              {carouselItem(item)}
            </div>
          ))}
        </div>
      </div>

      {showControls && windowsCount > 1 && (
        <div className="flex justify-center mt-6 sm:mt-8 space-x-1 sm:space-x-2">
          <button
            onClick={prevSlide}
            className="left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Slide anterior"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {Array.from({ length: windowsCount }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-primary scale-125" : "bg-muted hover:bg-muted/80"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
          <button
            onClick={nextSlide}
            className="right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Próximo slide"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
