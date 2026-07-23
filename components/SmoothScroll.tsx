"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Reproduces the project's "Smooth Scroll" effect component (intensity: 6).
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0 + 6 / 20, // scale Framer's 0-10 "intensity" into a Lenis duration
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
