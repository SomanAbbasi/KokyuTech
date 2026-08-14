"use client";

import Reveal from "./Reveal";
import { ENGINEERING_FLOW, SECTION_IDS } from "@/lib/config";

export default function Solutions() {
  return (
    <section id={SECTION_IDS.solutions} className="section solutions">
      <div className="container">
        <Reveal>
          <span className="eyebrow">03 — AI + Automation</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-title">
            We don&rsquo;t just add AI.
            <br />
            We <span className="accent-text">engineer systems</span> around it.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="section-sub">
            AI only pays off when it is wired into the workflow that produces the work.
            We map your operation first, then put intelligence exactly where it removes
            repetitive effort — and integrate it with the tools you already run on.
          </p>
        </Reveal>

        <div className="engineering-flow">
          {ENGINEERING_FLOW.map((node, i) => (
            <Reveal key={node.step} delay={i * 0.05}>
              <div className="eng-node">
                {i < ENGINEERING_FLOW.length - 1 && (
                  <span className="eng-arrow" aria-hidden>→</span>
                )}
                <div className="eng-step mono">{node.step}</div>
                <div className="eng-title">{node.title}</div>
                <div className="eng-desc">{node.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
