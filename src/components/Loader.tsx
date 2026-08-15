"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const LOADER_STORAGE_KEY = "kokyu-loader-seen";

export default function Loader() {
  const container = useRef<HTMLDivElement>(null);
  const logoGroupRef = useRef<SVGGElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const isFirstVisit = () => {
    try {
      return window.localStorage.getItem(LOADER_STORAGE_KEY) !== "1";
    } catch {
      return true;
    }
  };

  const hideLoader = () => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
    document.body.classList.remove("loading");
    ScrollTrigger.refresh();
  };

  const handleSkip = () => {
    const tl = timelineRef.current;
    if (tl) tl.kill();
    if (container.current) {
      gsap.to(container.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power1.out",
        onComplete: () => {
          window.localStorage.setItem(LOADER_STORAGE_KEY, "1");
          hideLoader();
        },
      });
    }
  };

  useGSAP(
    () => {
      const paths = logoGroupRef.current?.querySelectorAll(".loader-logo-path-stroke");
      const fillPaths = logoGroupRef.current?.querySelectorAll(".loader-logo-path-fill");
      const el = container.current;
      if (!paths || !fillPaths || !el) return;

      // Repeat visits: skip the full animation and use a very short fade instead.
      if (!isFirstVisit()) {
        const quick = gsap.timeline({
          onComplete: () => {
            window.localStorage.setItem(LOADER_STORAGE_KEY, "1");
            hideLoader();
          },
        });
        timelineRef.current = quick;
        quick.to(el, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
        });
        return;
      }

      // First visit: reveal the skip option and run the full animation.
      const skipButton = document.getElementById("loader-skip");
      if (skipButton) gsap.set(skipButton, { opacity: 1, pointerEvents: "auto" });

      const loaderTimeline = gsap.timeline({
        onComplete: () => {
          window.localStorage.setItem(LOADER_STORAGE_KEY, "1");
          hideLoader();
        },
      });
      timelineRef.current = loaderTimeline;

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
        .to(el, {
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

      <button type="button" id="loader-skip" className="loader-skip" onClick={handleSkip}>
        Skip
      </button>
    </div>
  );
}
