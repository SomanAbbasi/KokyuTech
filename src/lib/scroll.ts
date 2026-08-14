import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  lenisInstance = lenis;
}

export function getLenis() {
  return lenisInstance;
}

/**
 * Smoothly scroll to an element by id, falling back to instant scroll when Lenis
 * is not available (e.g. on sub-pages without smooth scroll initialized).
 */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, {
      offset: -80,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
