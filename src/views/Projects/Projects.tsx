import React from "react";
import { Link } from "react-router-dom";

import { resumeData } from "../../data/resume";

import "./Projects.css";

const Projects = () => {
  const [caseStudy, ...highlights] = resumeData.featuredWork;

  return (
    <main className="projects-page">
      <section className="projects-hero surface-panel">
        <p className="section-kicker">Selected Work</p>
        <h1 className="section-title">Projects and platform highlights</h1>
        <p className="projects-intro">
          A text-first view of the systems, APIs, and AI-native products behind
          the resume. The emphasis here is architecture, delivery rigor, and
          measurable production impact.
        </p>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Case Study</p>
          <h2 className="section-title">{caseStudy.title}</h2>
        </div>

        <article className="case-study surface-panel">
          <div className="case-study-header">
            <div>
              <p className="featured-meta">
                {caseStudy.category} | {caseStudy.period}
              </p>
              <p className="featured-summary">{caseStudy.summary}</p>
            </div>
            <div className="outcome-list">
              {caseStudy.outcomes.map((outcome) => (
                <span className="outcome-pill" key={outcome}>
                  {outcome}
                </span>
              ))}
            </div>
          </div>

          <div className="case-study-grid">
            <div>
              <h3 className="results-title">Highlights</h3>
              <ul className="bullet-list">
                {caseStudy.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="results-title">Core stack</h3>
              <div className="stack-list">
                {caseStudy.stack.map((tech) => (
                  <span className="pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Professional Highlights</p>
          <h2 className="section-title">Production systems shipped at Infosys</h2>
        </div>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card surface-panel" key={item.id}>
              <p className="card-label">
                {item.category} | {item.period}
              </p>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-summary">{item.summary}</p>

              <ul className="bullet-list compact-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="stack-list">
                {item.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="outcome-list">
                {item.outcomes.map((outcome) => (
                  <span className="outcome-pill" key={outcome}>
                    {outcome}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-footer surface-panel">
        <p className="contact-text">
          The full resume view, contact details, and complete experience timeline
          are available on the landing page.
        </p>
        <Link className="primary-action" to="/">
          Back to home
        </Link>
      </section>
    </main>
  );
};

export default Projects;
