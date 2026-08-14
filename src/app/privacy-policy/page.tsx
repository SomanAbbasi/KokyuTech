"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PrivacyPolicy() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                clearProps: "all"
            });
        }, sectionRef);

        // Structural fix for sticky positioning
        document.body.style.overflow = "visible";
        document.documentElement.style.overflow = "visible";

        return () => {
            ctx.revert();
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, []);

    return (
        <main className="text-[var(--accent-a)] relative page-main theme-dark" ref={sectionRef}>
            <div className="max-w-5xl mx-auto px-10 relative z-10">
                <header className="privacy-header reveal">
                    <Link href="/" className="back-link mono">
                        [ SYSTEM.RETURN.TO_HOME ]
                    </Link>
                    <div className="title-block">
                        <h1 className="privacy-jumbo uppercase" style={{ display: 'inline-block' }}>
                            PRIVACY <br /><span className="accent-text italic">POLICY</span>
                        </h1>
                        <div className="doc-meta mono tracking-widest">
                            <span className="doc-id">DOCUMENT_ID: KOKYU_PRV_001</span>
                            <span className="doc-status">STATUS: ACTIVE</span>
                        </div>
                    </div>
                </header>

                <div className="content-grid">
                    {/* TABLE OF CONTENTS Side Panel */}
                    <aside className="toc-panel">
                        <div className="sticky-toc glass-panel">
                            <h3 className="mono text-[10px] opacity-40 uppercase mb-6 tracking-tighter">Navigation_Tree</h3>
                            <ul className="toc-list mono text-[11px]">
                                <li><a href="#intro">01. GEN_INTRO</a></li>
                                <li><a href="#collection">02. DATA_ACQUISITION</a></li>
                                <li><a href="#usage">03. DATA_PROCESSING</a></li>
                                <li><a href="#credentialing">04. ACCESS_AND_SECURITY</a></li>
                                <li><a href="#retention">05. DEL_POLICY</a></li>
                                <li><a href="#contact">06. COMM_CHANNEL</a></li>
                            </ul>
                        </div>
                    </aside>

                    {/* MAIN CONTENT Body */}
                    <div className="main-prose reveal">
                        <section id="intro" className="prose-block">
                            <h2 className="mono uppercase tracking-tighter"><span className="accent-text step-num">01.</span> Introduction</h2>
                            <p>
                                At kokyutech.com, operated by Kokyu Tech, we value your privacy
                                and are committed to protecting your personal information. This policy
                                explains how we collect, use, and protect your data across our products
                                and services.
                            </p>
                        </section>

                        <section className="prose-block block-spacing">
                            <h2 className="mono uppercase tracking-tighter"><span className="accent-text step-num">02.</span> Data Acquisition</h2>
                            <p>We collect information through two primary channels:</p>
                            <div className="data-box mt-6 glass-panel">
                                <h4 className="mono text-xs mb-4">A. Explicit_Submission</h4>
                                <ul className="bullet-list">
                                    <li>Identities (Name, Email)</li>
                                    <li>Direct Communications (Phone, Address)</li>
                                    <li>Operational Metadata (Project specifics)</li>
                                </ul>
                            </div>
                            <div className="data-box mt-6 glass-panel">
                                <h4 className="mono text-xs mb-4">B. Automated_Diagnostics</h4>
                                <ul className="bullet-list">
                                    <li>IP Geolocation & Device Information</li>
                                    <li>Session telemetry (Clickstream, Timestamp)</li>
                                    <li>Cookie-based state persistence</li>
                                </ul>
                            </div>
                        </section>

                        <section className="prose-block block-spacing">
                            <h2 className="mono uppercase tracking-tighter"><span className="accent-text step-num">03.</span> Data Processing</h2>
                            <p>
                                We use the information we collect to respond to inquiries, deliver
                                the services we build, improve our products, and communicate about
                                projects. We do not sell your personal information to third parties.
                                Data is only shared with service providers that help us operate and
                                deliver our work, and only under appropriate safeguards.
                            </p>
                        </section>

                        <section className="prose-block block-spacing">
                            <h2 className="mono uppercase tracking-tighter"><span className="accent-text step-num">04.</span> Credential Management</h2>
                            <div className="security-alert glass-panel accent-border">
                                <p className="mono text-xs mb-4">ACCESS_AND_SECURITY</p>
                                <p>
                                    We apply appropriate technical and organizational measures to protect
                                    credentials and sensitive information, including access controls and
                                    restricted handling. Access is limited to the people who need it to
                                    deliver your project.
                                </p>
                            </div>
                        </section>

                        <section className="prose-block block-spacing">
                            <h2 className="mono uppercase tracking-tighter"><span className="accent-text step-num">05.</span> Data Erasure</h2>
                            <p>
                                We keep personal information only as long as it is needed for the
                                purposes described in this policy, or as required by law.
                                <strong> On request, we delete or anonymize your personal data </strong>
                                from our systems, subject to any legal obligations that require us
                                to retain it.
                            </p>
                        </section>

                        <section className="prose-block block-spacing">
                            <h2 className="mono uppercase tracking-tighter"><span className="accent-text step-num">06.</span> Communication</h2>
                            <p>For inquiries regarding this policy or to request data erasure:</p>
                            <div className="contact-card mt-6 glass-panel">
                                <p className="white font-bold">Kokyu Tech</p>
                                <a href="mailto:contact@kokyutech.com" className="accent-text mono hover:underline transition-all">
                                    contact@kokyutech.com
                                </a>
                            </div>
                        </section>

                        <p className="legalese italic">
                            By using our site and services, you acknowledge that you have read and
                            understood this Privacy Policy. All rights and security standards are
                            reserved.
                        </p>
                    </div>
                </div>

                <div className="full-bleed theme-yellow" style={{ padding: '80px 5vw', marginTop: '120px' }}>
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center" style={{ gap: '32px' }}>
                        <div>
                            <h2 className="mono uppercase tracking-tighter" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#050505', fontWeight: 'bold' }}>DATA_INQUIRIES</h2>
                            <p style={{ color: 'var(--text-dim)', marginTop: '8px' }}>For data erasure or compliance questions, contact us directly.</p>
                        </div>
                        <div className="contact-card glass-panel" style={{ border: '1px solid rgba(5,5,5,0.2)', padding: '24px', background: 'rgba(255,255,255,0.1)' }}>
                            <a href="mailto:contact@kokyutech.com" className="mono" style={{ color: '#050505', textDecoration: 'none', fontWeight: 'bold', borderBottom: '1px solid #050505' }}>
                                contact@kokyutech.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx>{`
                .page-main {
                    padding-top: 180px;
                    padding-bottom: 120px;
                    min-height: 100vh;
                    overflow: visible !important;
                }
                .max-w-5xl { max-width: 1024px; overflow: visible !important; }
                .mx-auto { margin-left: auto; margin-right: auto; }
                .px-10 { padding-left: 40px; padding-right: 40px; }

                .privacy-header { margin-bottom: 80px; }
                .title-block { margin-top: 32px; margin-bottom: 64px; }
                
                .doc-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    border-top: 1px solid var(--glass-border);
                    border-bottom: 1px solid var(--glass-border);
                    opacity: 0.6;
                    font-size: 12px;
                }

                .back-link {
                    color: var(--accent-pop);
                    font-size: 11px;
                    letter-spacing: 0.1em;
                    transition: all 0.3s;
                    display: inline-block;
                }
                .back-link:hover { color: white; }
                
                .privacy-jumbo {
                    font-size: clamp(2.5rem, 6vw, 7rem);
                    line-height: 0.95;
                    font-weight: 700;
                    letter-spacing: -0.05em;
                }
                .accent-text { color: var(--accent-pop); }
                .white { color: white; }

                .content-grid {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: 60px;
                    margin-bottom: 120px;
                    overflow: visible !important;
                    align-items: start;
                }

                .toc-panel {
                    position: sticky;
                    top: 120px;
                    align-self: flex-start;
                    height: fit-content;
                    z-index: 101;
                }
                .sticky-toc {
                    padding: 30px;
                    background: rgba(255, 255, 255, 0.01);
                    width: 250px;
                }
                .toc-list {
                    list-style: none;
                    padding: 0;
                }
                .toc-list li {
                    margin-bottom: 15px;
                }
                .toc-list a {
                    color: var(--accent-b);
                    text-decoration: none;
                    transition: 0.2s;
                    display: block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .toc-list a:hover {
                    color: var(--accent-pop);
                    transform: translateX(5px);
                }

                .block-spacing { margin-top: 64px; }
                .step-num { margin-right: 16px; }

                .prose-block h2 {
                    font-size: 1.5rem;
                    margin-bottom: 24px;
                    color: white;
                }
                .prose-block p {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: var(--text-dim);
                }

                .data-box {
                    padding: 30px;
                    border: 1px solid var(--glass-border);
                    margin-top: 24px;
                }
                .data-box h4 {
                    font-size: 12px;
                    margin-bottom: 16px;
                }
                
                .bullet-list {
                    list-style: none;
                    padding-left: 0;
                }
                .bullet-list li {
                    position: relative;
                    padding-left: 20px;
                    margin-bottom: 10px;
                    color: var(--accent-c);
                }
                .bullet-list li::before {
                    content: "+";
                    position: absolute;
                    left: 0;
                    color: var(--accent-pop);
                    font-family: 'Space Mono', monospace;
                }

                .security-alert {
                    padding: 30px;
                    border-left: 2px solid var(--accent-pop);
                    background: rgba(204, 255, 0, 0.02);
                }
                .security-alert p.mono { margin-bottom: 16px; font-size: 12px; }
                
                .contact-card {
                    padding: 30px;
                    display: inline-block;
                    margin-top: 24px;
                }

                .legalese {
                    margin-top: 96px;
                    padding-top: 48px;
                    border-top: 1px solid var(--glass-border);
                    opacity: 0.4;
                    font-size: 12px;
                }

                @media (max-width: 1024px) {
                    .page-main { padding-top: 140px; }
                    .content-grid { grid-template-columns: 1fr; margin-top: 40px; }
                    .toc-panel { display: none; }
                    
                    .doc-meta {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 16px;
                        font-size: 10px;
                    }
                    .full-bleed.theme-yellow > div {
                        text-align: center !important;
                        flex-direction: column !important;
                        align-items: center !important;
                        gap: 2rem !important;
                    }
                }
            `}</style>
        </main>
    );
}
