"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { DIFFERENTIATORS, SECTION_IDS } from "@/lib/config";

export default function WhyKokyu() {
  return (
    <section id={SECTION_IDS.why} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="06 — Why Kokyu"
          title={
            <>
              Built around your business,
              <br />
              not around a <span className="accent-text">service list.</span>
            </>
          }
        />

        <div className="why-grid">
          {DIFFERENTIATORS.map((item, i) => (
            <Reveal key={item.id} delay={(i % 2) * 0.08}>
              <div className="why-card">
                <span className="why-id mono">{item.id}</span>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
