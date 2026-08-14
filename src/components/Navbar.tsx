"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY, SECTION_IDS } from "@/lib/config";
import { scrollToId } from "@/lib/scroll";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Highlight the nav link of the section currently in view (home page only)
  useEffect(() => {
    if (!isHome) return;
    const ids = Object.values(SECTION_IDS);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, href: string) => {
      const hashIdx = href.indexOf("#");
      if (hashIdx === -1) return; // plain route, let Link handle it
      const id = href.slice(hashIdx + 1);
      if (isHome) {
        e.preventDefault();
        setMenuOpen(false);
        scrollToId(id);
      }
    },
    [isHome]
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav-shell ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <span className="nav-logo-dot" />
            {COMPANY.shortName}
          </Link>

          <nav className="nav-links">
            {NAV_LINKS.map((link) => {
              const hashIdx = link.href.indexOf("#");
              const id = hashIdx > -1 ? link.href.slice(hashIdx + 1) : null;
              const isActive = isHome && id !== null && activeId === id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/start-project" className="nav-cta">
              Start a Project
            </Link>
          </nav>

          <button
            className={`nav-burger ${menuOpen ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span>0{i + 1}</span>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mobile-menu-foot">
            <Link
              href="/start-project"
              className="nav-cta mobile-menu-cta"
              style={{ width: "fit-content" }}
              onClick={closeMenu}
            >
              Start a Project →
            </Link>
            <a href="mailto:contact@kokyutech.com">contact@kokyutech.com</a>
            <a href="tel:+913481822987">+91 348 182 2987</a>
          </div>
        </div>
      )}
    </>
  );
}
