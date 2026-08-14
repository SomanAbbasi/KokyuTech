import type { Metadata } from "next";
import ProjectForm from "@/components/ProjectForm";
import Footer from "@/components/Footer";
import { COMPANY, EMAIL, MAILTO, PHONE, TEL } from "@/lib/config";

export const metadata: Metadata = {
  title: `${COMPANY.name} — Start a Project`,
  description:
    "Tell us what you're trying to build, automate or improve. We respond to every serious project inquiry.",
};

export default function StartProjectPage() {
  return (
    <main className="form-page">
      <div className="container">
        <div className="form-layout">
          <aside className="form-aside">
            <span className="eyebrow">Start a Project</span>
            <h1 className="form-title">
              Tell us what you&rsquo;re trying to{" "}
              <span className="accent-text">build,</span>{" "}
              <span className="accent-text">automate</span> or{" "}
              <span className="accent-text">improve.</span>
            </h1>
            <p>
              The more context you give us about your business and the problem,
              the better we can help. We reply to every serious inquiry — usually
              within one business day.
            </p>

            <div className="form-meta">
              <div className="form-meta-item">
                <span className="fm-label">Email</span>
                <a href={MAILTO}>{EMAIL}</a>
              </div>
              <div className="form-meta-item">
                <span className="fm-label">Phone</span>
                <a href={TEL}>{PHONE}</a>
              </div>
            </div>
          </aside>

          <ProjectForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}
