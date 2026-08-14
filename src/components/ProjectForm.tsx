"use client";

import { useState } from "react";
import {
  PROJECT_TYPES,
  PROJECT_INQUIRY_ENDPOINT,
  EMAIL,
  MAILTO,
} from "@/lib/config";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  help: string;
  projectType: string;
  details: string;
}

const INITIAL: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
  help: "",
  projectType: "",
  details: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function ProjectForm() {
  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const [fallbackMailto, setFallbackMailto] = useState("");

  const setField = (key: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.email.trim()) {
      e.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
    if (values.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) {
      e.phone = "Please enter a valid phone number.";
    }
    if (!values.help.trim()) e.help = "Please tell us how we can help you.";
    if (!values.projectType) e.projectType = "Please choose a project type.";
    return e;
  };

  const buildMailto = (): string => {
    const subject = encodeURIComponent(
      `Project Inquiry — ${values.name.trim()} (${values.projectType})`
    );
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        values.company ? `Company: ${values.company}` : "",
        `Email: ${values.email}`,
        values.phone ? `Phone: ${values.phone}` : "",
        values.website ? `Website: ${values.website}` : "",
        "",
        `How can we help you?`,
        values.help,
        "",
        `Project type: ${values.projectType}`,
        "",
        `Additional details:`,
        values.details || "—",
      ]
        .filter((line) => line !== "")
        .join("\n")
    );
    return `${MAILTO}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    // Real submission endpoint. When PROJECT_INQUIRY_ENDPOINT is configured
    // (e.g. a Cloudflare Worker or form backend), the payload is POSTed as JSON.
    if (PROJECT_INQUIRY_ENDPOINT) {
      try {
        const res = await fetch(PROJECT_INQUIRY_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        setStatus("success");
      } catch (err) {
        setStatus("error");
        setSubmitError(
          err instanceof Error ? err.message : "Something went wrong. Please try again."
        );
      }
      return;
    }

    // No backend configured yet: prepare a pre-filled email and show the
    // success state so the visitor can send their inquiry in one click.
    setFallbackMailto(buildMailto());
    setStatus("success");
  };

  const handleReset = () => {
    setValues(INITIAL);
    setErrors({});
    setStatus("idle");
    setFallbackMailto("");
  };

  const inputProps = (key: keyof FormState) => ({
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setField(key, e.target.value),
  });

  if (status === "success") {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h2>Your inquiry is ready to send.</h2>
        <p>
          {PROJECT_INQUIRY_ENDPOINT
            ? "We received your project inquiry. Our team will get back to you shortly."
            : "We don't have a backend connected to this form yet, so we've prepared a pre-filled email for you. One click sends it straight to us."}
        </p>
        {!PROJECT_INQUIRY_ENDPOINT && (
          <a href={fallbackMailto} className="btn btn-primary">
            Send Inquiry via Email
            <span className="btn-arrow">→</span>
          </a>
        )}
        <button type="button" className="btn btn-ghost btn-sm" onClick={handleReset}>
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="project-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className={`form-field ${errors.name ? "form-error-border" : ""}`}>
          <label htmlFor="name">
            Name <span className="req">*</span>
          </label>
          <input id="name" type="text" placeholder="Your full name" {...inputProps("name")} />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="company">Company</label>
          <input id="company" type="text" placeholder="Optional" {...inputProps("company")} />
        </div>
      </div>

      <div className="form-row">
        <div className={`form-field ${errors.email ? "form-error-border" : ""}`}>
          <label htmlFor="email">
            Email <span className="req">*</span>
          </label>
          <input id="email" type="email" placeholder="you@company.com" {...inputProps("email")} />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>

        <div className={`form-field ${errors.phone ? "form-error-border" : ""}`}>
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="+91 ..." {...inputProps("phone")} />
          {errors.phone && <span className="form-error">{errors.phone}</span>}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="website">Website</label>
        <input id="website" type="url" placeholder="https://" {...inputProps("website")} />
      </div>

      <div className={`form-field full ${errors.help ? "form-error-border" : ""}`}>
        <label htmlFor="help">
          How can I help you? <span className="req">*</span>
        </label>
        <textarea id="help" placeholder="Describe the problem, workflow or system you want to build, automate or improve." {...inputProps("help")} />
        {errors.help && <span className="form-error">{errors.help}</span>}
      </div>

      <div className={`form-field full ${errors.projectType ? "form-error-border" : ""}`}>
        <label>
          Project type <span className="req">*</span>
        </label>
        <div className="radio-group">
          {PROJECT_TYPES.map((type) => (
            <label className="radio-option" key={type}>
              <input
                type="radio"
                name="projectType"
                value={type}
                checked={values.projectType === type}
                onChange={() => setField("projectType", type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
        {errors.projectType && <span className="form-error">{errors.projectType}</span>}
      </div>

      <div className="form-field full">
        <label htmlFor="details">Additional details</label>
        <textarea id="details" placeholder="Anything else we should know." {...inputProps("details")} />
      </div>

      {status === "error" && (
        <div className="form-error" role="alert" style={{ marginBottom: "1rem" }}>
          {submitError}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary form-submit"
        disabled={status === "submitting"}
        style={status === "submitting" ? { opacity: 0.6, cursor: "progress" } : undefined}
      >
        {status === "submitting" ? "Sending..." : "Send Project Inquiry"}
        <span className="btn-arrow">→</span>
      </button>

      <p className="form-note">
        By submitting, you agree to be contacted about your inquiry. We never share
        your information. Prefer email? Reach us directly at {EMAIL}.
      </p>
    </form>
  );
}
