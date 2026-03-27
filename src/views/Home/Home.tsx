import React from "react";
import { Link } from "react-router-dom";

import { resumeData } from "../../data/resume";
import rohitProfileImage from "../../images/rohit_profile_img.png";

import "./Home.css";

const [featuredProject, ...highlights] = resumeData.featuredWork;

const summaryHighlights = [
  [
    "Backend Software Engineer with ",
    "2.5+ years of experience",
    " building scalable ",
    "distributed systems",
    " using ",
    "Java (Spring Boot)",
    " and ",
    "cloud-native technologies",
    ".",
  ],
  [
    "Experienced in designing ",
    "high-performance APIs",
    ", ",
    "event-driven systems",
    ", and ",
    "microservices architecture",
    ".",
  ],
  [
    "Additionally skilled in ",
    "React.js",
    " and building ",
    "Generative AI systems",
    " including ",
    "RAG",
    ", ",
    "LangChain",
    ", and ",
    "multi-agent architectures",
    ".",
  ],
];

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero-section surface-panel">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Backend Software Engineer</p>
            <h1 className="hero-title">{resumeData.name}</h1>

            <div className="hero-summary-group">
              {summaryHighlights.map((parts, index) => (
                <p className="hero-summary" key={`summary-${index}`}>
                  {parts.map((part, partIndex) =>
                    partIndex % 2 === 1 ? (
                      <span className="summary-highlight" key={part}>
                        {part}
                      </span>
                    ) : (
                      <React.Fragment key={`${part}-${partIndex}`}>
                        {part}
                      </React.Fragment>
                    )
                  )}
                </p>
              ))}
            </div>

            <div className="social-links-block">
              <div className="social-links-header">
                <p className="section-kicker">Profiles and coding handles</p>
              </div>

              <div className="social-links">
                {resumeData.socialLinks.map((link) => (
                  <a
                    key={link.id}
                    className="social-link"
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="social-link-name">{link.label}</span>
                    <span className="social-link-icon" aria-hidden="true">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 17L17 7M10 7h7v7"
                        />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <aside className="hero-card">
            <div className="hero-avatar">
              <img src={rohitProfileImage} alt="Rohit Gangwar" />
            </div>
            <p className="hero-card-label">Current focus</p>
            <h2 className="hero-card-title">
              Spring Boot systems, cloud-native delivery, and production GenAI
            </h2>
            <p className="hero-card-text">
              Building APIs, microservices, and agentic workflows that balance
              performance, reliability, and developer velocity.
            </p>
          </aside>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Impact</p>
          <h2 className="section-title">Delivery metrics from recent work</h2>
        </div>

        <div className="metric-grid">
          {resumeData.impactMetrics.map((metric) => (
            <article className="metric-card surface-panel" key={metric.id}>
              <p className="metric-value">{metric.value}</p>
              <h3 className="metric-label">{metric.label}</h3>
              <p className="metric-detail">{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Recent roles and shipped systems</h2>
        </div>

        <div className="experience-list">
          {resumeData.experience.map((role) => (
            <article className="timeline-card surface-panel" key={role.id}>
              <div className="timeline-header">
                <div>
                  <p className="timeline-company">{role.company}</p>
                  <h3 className="timeline-role">{role.role}</h3>
                </div>
                <div className="timeline-meta">
                  <span>{role.period}</span>
                  <span>{role.location}</span>
                </div>
              </div>

              <ul className="bullet-list">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Featured Project</p>
          <h2 className="section-title">{featuredProject.title}</h2>
        </div>

        <article className="featured-project surface-panel">
          <div className="featured-project-copy">
            <p className="featured-meta">
              {featuredProject.category} | {featuredProject.period}
            </p>
            <p className="featured-summary">{featuredProject.summary}</p>

            <div className="stack-list" aria-label="Featured project stack">
              {featuredProject.stack.map((tech) => (
                <span className="pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <ul className="bullet-list">
              {featuredProject.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="featured-project-results">
            <div className="featured-project-results-top">
              <h3 className="results-title">Outcome highlights</h3>
              <div className="outcome-list">
                {featuredProject.outcomes.map((outcome) => (
                  <span className="outcome-pill" key={outcome}>
                    {outcome}
                  </span>
                ))}
              </div>
            </div>

            <div className="featured-project-link-block">
              <p className="featured-project-link-label">Project links</p>
              {featuredProject.github ? (
                <a
                  className="featured-project-icon-link"
                  href={featuredProject.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="featured-project-icon-badge" aria-hidden="true">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.19 1.75 1.19 1.02 1.77 2.68 1.26 3.33.97.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.29-5.24-5.72 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.83 1.18 3.09 0 4.45-2.7 5.43-5.28 5.71.42.36.79 1.06.79 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A11.54 11.54 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
                    </svg>
                  </span>
                  <span className="featured-project-icon-label">Snapgrid GitHub repository</span>
                </a>
              ) : null}
              <Link className="featured-project-link-card" to="/projects">
                <span className="featured-project-link-copy">
                  <span className="featured-project-link-title">
                    Open projects page
                  </span>
                  <span className="featured-project-link-text">
                    Browse case studies and archived builds
                  </span>
                </span>
                <span className="social-link-icon" aria-hidden="true">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 17L17 7M10 7h7v7"
                    />
                  </svg>
                </span>
              </Link>
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

      <section className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Core technologies and strengths</h2>
        </div>

        <div className="skills-grid">
          {resumeData.skillGroups.map((group) => (
            <article className="skill-card surface-panel" key={group.id}>
              <h3 className="skill-title">{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section summary-grid">
        <div className="summary-column">
          <div className="section-heading summary-heading">
            <p className="section-kicker">Achievements</p>
            <h2 className="section-title">
              Competitive and community milestones
            </h2>
          </div>

          <div className="achievement-list">
            {resumeData.achievements.map((achievement, index) => (
              <article
                className="achievement-card surface-panel"
                key={achievement.id}
              >
                <span className="achievement-badge">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="achievement-text">{achievement.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="summary-column">
          <div className="section-heading summary-heading">
            <p className="section-kicker">Education</p>
            <h2 className="section-title">Academic foundation</h2>
          </div>

          <div className="education-list">
            {resumeData.education.map((item) => (
              <article className="education-card surface-panel" key={item.id}>
                <div className="education-top">
                  <p className="education-school">{item.institution}</p>
                  <div className="education-facts">
                    <span className="education-fact">{item.period}</span>
                    <span className="education-fact">{item.location}</span>
                  </div>
                </div>

                <h3 className="education-degree">{item.degree}</h3>

                <div className="tag-list education-details">
                  {item.details.map((detail) => (
                    <span className="tag" key={detail}>
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section surface-panel">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">
          Open to backend, platform, and GenAI engineering work
        </h2>
        <p className="contact-text">
          Reach out for roles and collaborations involving scalable APIs,
          distributed systems, cloud-native delivery, or AI-native product work.
        </p>
        <a className="primary-action" href={`mailto:${resumeData.email}`}>
          {resumeData.email}
        </a>
      </section>
    </main>
  );
};

export default Home;
