"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Loader() {
  const container = useRef<HTMLDivElement>(null);
  const logoGroupRef = useRef<SVGGElement>(null);

  useGSAP(
    () => {
      const paths = logoGroupRef.current?.querySelectorAll(".loader-logo-path-stroke");
      const fillPaths = logoGroupRef.current?.querySelectorAll(".loader-logo-path-fill");

      if (!paths || !fillPaths) return;

      const loaderTimeline = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove("loading");
          const loader = document.getElementById("loader");
          if (loader) loader.style.display = "none";
          ScrollTrigger.refresh();
        },
      });

      // 1. Initial State: Stroke paths are visible but dash-offset to hide them
      // 2. Animate strokes (drawing the outline)
      loaderTimeline
        .set(paths, { opacity: 1 })
        .fromTo(
          paths,
          {
            strokeDashoffset: 5000,
            strokeDasharray: 5000,
          },
          {
            strokeDashoffset: 0,
            duration: 2.0,
            stagger: 0.2,
            ease: "power2.inOut",
          }
        )
        // 3. Fade in the fills while fading out the strokes
        .to(fillPaths, {
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        }, "-=0.5")
        .to(paths, {
          opacity: 0,
          duration: 0.5,
        }, "-=0.3")
        // 4. Brief hold then exit
        .to({}, { duration: 0.8 })
        .to(container.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
          onComplete: () => {
            if (container.current) container.current.style.pointerEvents = "none";
          },
        });
    },
    { scope: container }
  );

  // Logo color
  const primaryColor = "#FFDD00";

  return (
    <div
      id="loader"
      ref={container}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#0a0a0a",
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <svg className="loader-svg" viewBox="0 0 2000 2000" style={{ width: "min(40vw, 180px)", height: "min(40vw, 180px)" }}>
        <g id="loader-logo-group" ref={logoGroupRef}>
          {/* K monogram */}
          <path
            className="loader-logo-path-stroke"
            d="M 900 700 L 900 1300"
            fill="none"
            stroke={primaryColor}
            strokeWidth="70"
            strokeLinecap="round"
            style={{ opacity: 0 }}
          />
          <path
            className="loader-logo-path-stroke"
            d="M 900 1000 L 1160 700"
            fill="none"
            stroke={primaryColor}
            strokeWidth="70"
            strokeLinecap="round"
            style={{ opacity: 0 }}
          />
          <path
            className="loader-logo-path-stroke"
            d="M 900 1000 L 1160 1300"
            fill="none"
            stroke={primaryColor}
            strokeWidth="70"
            strokeLinecap="round"
            style={{ opacity: 0 }}
          />
        </g>
      </svg>
    </div>
  );
}
