import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ProjectPreview from "@/components/ProjectPreview";
import { COMPANY, PROJECTS, SECTION_IDS } from "@/lib/config";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study" };
  return {
    title: `${project.name} — ${COMPANY.name}`,
    description: `${project.tagline} ${project.description}`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <main className="case-page theme-dark">
      <div className="container">
        <Link href="/" className="case-back mono">
          ← Back to Home
        </Link>

        <header className="case-hero">
          <div className="case-number mono">({project.id})</div>
          <div className="case-category">{project.category}</div>
          <h1 className="case-title">{project.name}</h1>
          <div className="case-tagline">{project.tagline}</div>
          <p className="case-desc">{project.description}</p>
        </header>

        <div className="case-hero-preview">
          <ProjectPreview type={project.preview} label={project.name} />
        </div>

        <div className="case-grid">
          <div className="case-block">
            <div className="case-block-label">The Problem</div>
            <p>{project.problem}</p>
          </div>

          <div className="case-block">
            <div className="case-block-label">The Approach</div>
            <p>{project.approach}</p>
          </div>

          <div className="case-block">
            <div className="case-block-label">The Solution</div>
            <p>{project.solution}</p>
          </div>

          <div className="case-block wide">
            <div className="case-block-label">Key Features</div>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="case-block wide">
            <div className="case-block-label">System Architecture</div>
            <div className="arch-stack">
              {project.architecture.map((node, i) => (
                <div className="arch-node" key={node.title}>
                  <span className="arch-n mono">0{i + 1}</span>
                  <span className="arch-title">{node.title}</span>
                  <span className="arch-desc">{node.desc}</span>
                </div>
              ))}
            </div>
            <div style={{ height: "1.25rem" }} />
            <div className="case-block-label">Technology</div>
            <div className="case-tech">
              {project.tech.map((t) => (
                <span className="tech-badge" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.outcome && (
          <div className="case-outcome">
            <div className="case-outcome-label">Outcome</div>
            <p>{project.outcome}</p>
          </div>
        )}

        <div className="case-next">
          <h2>Have a problem worth solving?</h2>
          <p>
            Every project starts with a conversation about your business, your
            workflow and the result you&rsquo;re trying to reach.
          </p>
          <Link href="/start-project" className="btn btn-primary">
            Start a Project
            <span className="btn-arrow">→</span>
          </Link>
        </div>

        <nav className="case-nav">
          <Link href={`/#${SECTION_IDS.work}`} className="case-back mono">
            ← All Case Studies
          </Link>
          <Link href={`/work/${nextProject.slug}`} className="case-next-link mono">
            Next: {nextProject.name} →
          </Link>
        </nav>
      </div>

      <Footer />
    </main>
  );
}
