"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { scrollToId } from "@/lib/scroll";
import { SECTION_IDS, CAPABILITY_TICKER } from "@/lib/config";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
      </div>

      <div className="container">
        <div className="hero-inner">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span
              className="eyebrow"
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } } }}
            >
              The Kokyu Approach
            </motion.span>

            <motion.h1
              className="hero-title"
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } } }}
            >
              <span className="line">Technology should</span>
              <span className="line">
                work <span className="accent-text">for your</span>
              </span>
              <span className="line">business.</span>
            </motion.h1>

            <motion.p
              className="hero-sub"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } } }}
            >
              We design and engineer AI-powered software, automation systems and
              digital products around the way your business actually works.
            </motion.p>

            <motion.div
              className="hero-ctas"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } } }}
            >
              <Link href="/start-project" className="btn btn-primary">
                Start a Project
                <span className="btn-arrow">→</span>
              </Link>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => scrollToId(SECTION_IDS.work)}
              >
                View Our Work
                <span className="btn-arrow">→</span>
              </button>
            </motion.div>

            <motion.div
              className="hero-meta"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } } }}
            >
              <span className="hero-meta-item">
                <i /> Systems online
              </span>
              <span className="hero-meta-item">
                <i /> Monitoring every workflow
              </span>
              <span className="hero-meta-item">
                {CAPABILITY_TICKER.slice(0, 3).join(" · ")}
              </span>
            </motion.div>
          </motion.div>

          {/* Visual — system network */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <svg className="network-svg" viewBox="0 0 520 420" preserveAspectRatio="none" aria-hidden>
              <path className="network-line" d="M180 120 C 250 140, 260 180, 300 200" />
              <path className="network-line" d="M150 300 C 200 280, 250 250, 300 230" />
              <path className="network-line" d="M360 90 C 340 140, 320 170, 300 200" />
              <path className="network-line" d="M380 330 C 350 300, 330 260, 300 230" />
              <path className="network-line" d="M180 120 C 160 190, 150 250, 150 300" />
              <path className="network-line" d="M360 90 C 380 200, 380 280, 380 330" />
              <path className="network-line-flow" d="M180 120 L 300 200" />
              <path className="network-line-flow" d="M300 200 L 380 330" />
            </svg>

            <motion.div
              className="network-card nc-primary"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="nc-head">
                <span className="dot" /> CUSTOMER INBOX
              </div>
              <div className="nc-title">WhatsApp · Email · Web</div>
              <div className="nc-sub">Messages flowing in</div>
            </motion.div>

            <motion.div
              className="network-card nc-left"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <div className="nc-head">
                <span className="dot" /> AI AGENT
              </div>
              <div className="nc-title">LangGraph · Memory</div>
              <div className="nc-sub">Understand · decide · act</div>
            </motion.div>

            <motion.div
              className="network-card nc-right"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <div className="nc-head">
                <span className="dot" /> WORKFLOW
              </div>
              <div className="nc-title">Automation · APIs</div>
              <div className="nc-sub">Talking to your stack</div>
            </motion.div>

            <motion.div
              className="network-card nc-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            >
              <div className="nc-head">
                <span className="dot" /> SYSTEM
              </div>
              <div className="nc-title">One connected system</div>
              <div className="nc-sub">status: operational</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
