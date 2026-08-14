"use client";

import { useRef, useEffect } from "react";

export default function Background() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Global custom cursor (desktop / fine pointers only)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    let rafId = 0;
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.display = "block";
      outline.style.display = "block";
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      const target = e.target as HTMLElement;
      const isHoverable = target.closest(
        "a, button, input, select, textarea, [role='button'], .cursor-pointer, .preview-frame"
      );
      outline.classList.toggle("hovered", !!isHoverable);
    };

    const loop = () => {
      outlineX += (mouseX - outlineX) * 0.16;
      outlineY += (mouseY - outlineY) * 0.16;
      outline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="grain-overlay" />
      <div className="bg-grid" />
      <div ref={dotRef} className="cursor-dot" style={{ display: "none" }} />
      <div ref={outlineRef} className="cursor-outline" style={{ display: "none" }} />
    </>
  );
}
