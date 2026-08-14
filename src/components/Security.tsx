"use client";

import Reveal from "./Reveal";
import { SECURITY_WORKFLOW, SECTION_IDS } from "@/lib/config";
import { scrollToId } from "@/lib/scroll";

export default function Security() {
  return (
    <section id={SECTION_IDS.security} className="section security">
      <div className="container">
        <div className="security-wrap">
          <div className="security-copy">
            <Reveal>
              <span className="eyebrow">04 — Security &amp; Compliance</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="security-title">
                Security shouldn&rsquo;t
                <br />
                live in <span className="accent-text">spreadsheets.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="security-desc">
                We are building simpler systems for startups and growing businesses
                to manage security policies, controls, evidence and audit workflows
                — without turning compliance into another operational burden.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="security-desc" style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                We develop security policy management, SOC 2 readiness and ISO 27001
                workflow concepts around these steps.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="security-cta">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => scrollToId(SECTION_IDS.contact)}
                >
                  Explore Security Solutions
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </Reveal>
          </div>

          <div className="sec-flow">
            {SECURITY_WORKFLOW.map((node, i) => (
              <Reveal key={node.step} delay={i * 0.06}>
                <div className="sec-node">
                  <span className="sec-step mono">{node.step}</span>
                  <div className="sec-node-info">
                    <div className="sec-label">{node.label}</div>
                    <div className="sec-desc">{node.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
