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
                {CAPABILITY_TICKER.slice(0, 3).join(" · ")}
              </span>
            </motion.div>
          </motion.div>

          {/* Visual — animated terminal */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <motion.div
              className="terminal-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            />

            <motion.div
              className="terminal"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="terminal-bar">
                <span className="term-dot r" />
                <span className="term-dot y" />
                <span className="term-dot g" />
                <span className="term-title">kokyu@system ~</span>
              </div>
              <div className="terminal-body">
                <span
                  className="term-line hdr"
                  style={{ "--w": "19ch", "--steps": 18, "--d": "0.3s" } as React.CSSProperties}
                >
                  KOKYU SYSTEM v2.4
                </span>
                <span
                  className="term-line"
                  style={{ "--w": "30ch", "--steps": 29, "--d": "1.1s" } as React.CSSProperties}
                >
                  &gt; understanding your business
                </span>
                <span
                  className="term-line ok"
                  style={{ "--w": "20ch", "--steps": 19, "--d": "2.2s" } as React.CSSProperties}
                >
                  {"  "}✓ workflow mapped
                </span>
                <span
                  className="term-line"
                  style={{ "--w": "31ch", "--steps": 30, "--d": "3.2s" } as React.CSSProperties}
                >
                  &gt; engineering the right system
                </span>
                <span
                  className="term-line ok"
                  style={{ "--w": "31ch", "--steps": 30, "--d": "4.3s" } as React.CSSProperties}
                >
                  {"  "}✓ software · ai · automation
                </span>
                <span
                  className="term-line"
                  style={{ "--w": "30ch", "--steps": 29, "--d": "5.3s" } as React.CSSProperties}
                >
                  &gt; automating repetitive work
                </span>
                <span
                  className="term-line ok"
                  style={{ "--w": "30ch", "--steps": 29, "--d": "6.4s" } as React.CSSProperties}
                >
                  {"  "}✓ team focuses on decisions
                </span>
                <span
                  className="term-line hit"
                  style={{ "--w": "39ch", "--steps": 38, "--d": "7.5s" } as React.CSSProperties}
                >
                  → technology working for your business
                </span>
                <span className="term-cursor" aria-hidden />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
