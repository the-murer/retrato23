"use client";
import { useEffect, useRef } from "react";

type Props = {
  text: string;
  from?: number; // stagger offset when one heading is split across several AnimatedText
};

// Words rise from behind a mask, one after another, the first time the text scrolls into view.
export function AnimatedText({ text, from = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.in = "";
        io.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className="split-text">
      <span className="sr-only">{text}</span>
      {text.split(" ").map((word, i) => (
        <span key={i} aria-hidden>
          {i > 0 && " "}
          <span className="word">
            <span style={{ "--i": from + i } as React.CSSProperties}>{word}</span>
          </span>
        </span>
      ))}
    </span>
  );
}
