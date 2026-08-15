"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { EMAIL, MAILTO, PHONE, TEL, WHATSAPP_LINK, SECTION_IDS } from "@/lib/config";

export default function Contact() {
  return (
    <section id={SECTION_IDS.contact} className="contact-band">
      <div className="container">
        <div className="contact-inner">
          <Reveal>
            <span className="eyebrow" style={{ color: "#c2410c" }}>
              07 — Contact
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="contact-title">
              Have a business problem
              <br />
              worth <em>solving?</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="contact-sub">
              Tell us what you&rsquo;re trying to build, automate or improve. We
              respond to every serious inquiry.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="contact-btns">
              <Link href="/start-project" className="btn btn-primary">
                Start a Project
                <span className="btn-arrow">→</span>
              </Link>
              <a href={MAILTO} className="btn btn-ghost" style={{ borderColor: "rgba(28,25,23,0.3)", color: "#1c1917" }}>
                Contact Us
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ borderColor: "rgba(28,25,23,0.3)", color: "#1c1917" }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="contact-meta">
              <a href={MAILTO} className="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                {EMAIL}
              </a>
              <a href={TEL} className="contact-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                </svg>
                {PHONE}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
