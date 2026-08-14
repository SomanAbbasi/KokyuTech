"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, EMAIL, MAILTO, PHONE, TEL } from "@/lib/config";
import { scrollToId } from "@/lib/scroll";

const FOOTER_NAV = [
  { label: "AI", href: "/#solutions" },
  { label: "Automation", href: "/#solutions" },
  { label: "Software", href: "/#services" },
  { label: "Security", href: "/#security" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent, href: string) => {
    const hashIdx = href.indexOf("#");
    if (hashIdx === -1) return;
    const id = href.slice(hashIdx + 1);
    if (pathname === "/") {
      e.preventDefault();
      scrollToId(id);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <span className="nav-logo-dot" />
              {COMPANY.shortName}
            </Link>
            <p>{COMPANY.positioning}</p>
          </div>

          <div>
            <div className="footer-heading">Company</div>
            <div className="footer-links">
              {FOOTER_NAV.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  onClick={(e) => handleClick(e, link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-heading">What We Build</div>
            <div className="footer-links">
              <Link href="/#services" className="footer-link" onClick={(e) => handleClick(e, "/#services")}>
                AI Agents
              </Link>
              <Link href="/#services" className="footer-link" onClick={(e) => handleClick(e, "/#services")}>
                Automation
              </Link>
              <Link href="/#services" className="footer-link" onClick={(e) => handleClick(e, "/#services")}>
                Custom Software
              </Link>
              <Link href="/#security" className="footer-link" onClick={(e) => handleClick(e, "/#security")}>
                Security &amp; Compliance
              </Link>
              <Link href="/start-project" className="footer-link">
                Start a Project
              </Link>
            </div>
          </div>

          <div className="footer-contact">
            <div className="footer-heading">Contact</div>
            <a href={MAILTO}>{EMAIL}</a>
            <a href={TEL}>{PHONE}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </span>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
