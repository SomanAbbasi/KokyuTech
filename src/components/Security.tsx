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
                We help startups set up security policies, access control, logging,
                and basic compliance foundations. Our own security management tool
                is in development; for now, we implement these practices directly
                in your stack.
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
