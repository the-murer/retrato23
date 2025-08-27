"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakpointPx: number = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const isSsr = typeof window === "undefined";
    if (isSsr) return;

    let frame: number | null = null;

    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setIsMobile(window.innerWidth < breakpointPx);
        frame = null;
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [breakpointPx]);

  return isMobile;
} 