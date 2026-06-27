import React from "react";
import "./style.scss";

const EXPERIENCE = [
  {
    company: "Fastboy Marketing",
    role: "Junior Backend Developer",
    type: "Full-time",
    period: "Jan 2025 – Present",
    location: "Ho Chi Minh City, Vietnam",
    current: true,
    bullets: [
      "Designed REST endpoints for order, refund, cancel & void flows using Symfony 7 + API Platform 4 on a live multi-tenant POS platform.",
      "Eliminated payment duplication with idempotent handlers via Symfony Messenger + RabbitMQ — covering partial refunds, gift card reversals, and mid-flight cancellations.",
      "Built CDC consumer pipelines using Debezium + Kafka + Redpanda Connect over PostgreSQL logical replication.",
      "Designed merchant-scoped QueryExtension to enforce tenant isolation across all API Platform 4 collection endpoints.",
      "Configured Grafana + Loki + Promtail for cross-service log tracing and Kafbat UI for live Kafka connector inspection.",
      "Automated release pipeline with GitHub Actions CI/CD — compiles, packages, and deploys to AWS S3 for client auto-update.",
    ],
    stack: ["PHP 8", "Symfony 7", "API Platform 4", "PostgreSQL", "Kafka", "RabbitMQ", "Docker"],
  },
  {
    company: "SpeedyConvert.io",
    role: "Freelance Backend Developer",
    type: "Freelance",
    period: "Dec 2024 – Jan 2025",
    location: "Remote",
    current: false,
    bullets: [
      "Built a greenfield Symfony backend for a pre-launch web product from scratch.",
      "Implemented Twig server-rendered views and technical SEO foundations — semantic markup, sitemap, structured data.",
    ],
    stack: ["PHP", "Symfony", "Twig", "MySQL"],
  },
];

function WorkExperience() {
  return (
    <section className="work-experience" id="experience">
      <h3 className="we-subtitle">
        Career History
      </h3>
      <h1 className="we-title">
        Work Experience
      </h1>
      <div className="we-timeline">
        {EXPERIENCE.map((exp, idx) => (
          <div
            className="we-item"
            key={idx}
          >
            <div className="we-dot-col">
              <div className={`we-dot${exp.current ? " we-dot--live" : ""}`} />
              {idx < EXPERIENCE.length - 1 && <div className="we-line" />}
            </div>
            <div className="we-card">
              <div className="we-header">
                <div>
                  <h2 className="we-role">{exp.role}</h2>
                  <span className="we-company">{exp.company}</span>
                </div>
                {exp.current && <span className="we-badge">Current</span>}
              </div>
              <p className="we-meta">
                {exp.type} &middot; {exp.period} &middot; {exp.location}
              </p>
              <ul className="we-bullets">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="we-stack">
                {exp.stack.map((s, i) => (
                  <span className="we-tag" key={i}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
