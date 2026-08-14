"use client";

import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, sub, center }: SectionHeadingProps) {
  return (
    <div className={`section-head ${center ? "text-center" : ""}`} style={center ? { display: "flex", flexDirection: "column", alignItems: "center" } : undefined}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="section-sub">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
