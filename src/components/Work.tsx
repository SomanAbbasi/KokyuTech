"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectPreview from "./ProjectPreview";
import { PROJECTS, SECTION_IDS } from "@/lib/config";

export default function Work() {
  return (
    <section id={SECTION_IDS.work} className="section">
      <div className="container">
        <SectionHeading
          eyebrow="02 — Our Work"
          title={
            <>
              Systems we&rsquo;ve built
              <br />
              for real businesses.
            </>
          }
          sub="Every project starts with a business problem. Here is what we built, why we built it, and the system behind it."
        />

        <div className="work-showcase">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug}>
              <article className={`case-card ${i % 2 === 1 ? "flip" : ""}`}>
                <div className="case-copy">
                  <div className="case-number mono">({project.id})</div>
                  <div className="case-category">{project.category}</div>
                  <h3 className="case-title">{project.name}</h3>
                  <div className="case-tagline">{project.tagline}</div>
                  <p className="case-desc">{project.description}</p>
                  <div className="case-tech">
                    {project.tech.map((t) => (
                      <span className="tech-badge" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link href={`/work/${project.slug}`} className="case-link">
                    View Case Study
                    <span className="arrow">↗</span>
                  </Link>
                </div>

                <div className="case-preview">
                  <Link href={`/work/${project.slug}`} aria-label={`${project.name} case study`}>
                    <ProjectPreview type={project.preview} label={project.name} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
