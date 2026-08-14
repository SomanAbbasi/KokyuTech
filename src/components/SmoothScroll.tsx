"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { setLenis, scrollToId } from "@/lib/scroll";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    setLenis(lenis);

    // Scroll to hash target if a fragment is present (e.g. /#work after navigation).
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        requestAnimationFrame(() => {
          setTimeout(() => scrollToId(id), 60);
        });
      } else {
        lenis.scrollTo(0, { immediate: true });
      }
    };

    const t = setTimeout(handleHash, 120);
    window.addEventListener("hashchange", handleHash);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(rafId);
      window.removeEventListener("hashchange", handleHash);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return null;
}
