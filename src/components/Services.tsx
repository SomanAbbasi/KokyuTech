"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CAPABILITIES, SECTION_IDS } from "@/lib/config";

const ICONS: Record<string, React.ReactNode> = {
  "AI Systems": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
    </svg>
  ),
  Automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  ),
  Software: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 6L2 12l6 6M16 6l6 6-6 6M13 4l-2 16" />
    </svg>
  ),
  "Digital Products": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </svg>
  ),
  "Business Systems": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <path d="M6.5 10v4M17.5 10v4M10 6.5h4M10 17.5h4" />
    </svg>
  ),
  "Security & Compliance": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id={SECTION_IDS.services} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="01 — What We Do"
          title={
            <>
              We build <span className="accent-text">systems</span>,
              <br />
              not isolated features.
            </>
          }
          sub="AI, automation, software, integrations and compliance engineered to fit together around the way your business actually operates."
        />

        <div className="services-grid">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.id} delay={(i % 3) * 0.08}>
              <div className="service-card">
                <div className="service-icon">{ICONS[cap.title]}</div>
                <div className="service-id">CAPABILITY_{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="service-title">{cap.title}</h3>
                  <p className="service-desc" style={{ marginTop: "0.6rem" }}>
                    {cap.desc}
                  </p>
                </div>
                <div className="service-tags">
                  {cap.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
