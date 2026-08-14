"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PROCESS_STEPS, SECTION_IDS } from "@/lib/config";

export default function Process() {
  return (
    <section id={SECTION_IDS.process} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="05 — How We Work"
          title={
            <>
              Understand. <span className="accent-text">Engineer.</span>
              <br />
              Evolve.
            </>
          }
          sub="A clear process from business problem to working system — and beyond."
        />

        <div className="process-steps">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.07}>
              <div className="process-step">
                <span className="process-num mono">{step.step}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
