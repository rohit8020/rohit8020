import React from "react";
import { Link } from "react-router-dom";

import { resumeData } from "../../data/resume";
import rohitProfileImage from "../../images/rohit_profile_img.png";

import "./Home.css";

const [featuredProject] = resumeData.featuredWork;

const Home = () => {
  return (
    <main className="home-page">
      <section className="hero-section surface-panel">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="section-kicker">Backend Software Engineer</p>
            <h1 className="hero-title">{resumeData.name}</h1>
            <p className="hero-summary">{resumeData.summary}</p>

            <div className="focus-list" aria-label="Primary focus areas">
              {resumeData.focusAreas.map((area) => (
                <span className="pill" key={area}>
                  {area}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <Link className="primary-action" to="/projects">
                View selected work
              </Link>
              <a className="secondary-action" href={`mailto:${resumeData.email}`}>
                Email me
              </a>
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
                  {link.label}
                </a>
              ))}
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
            <h3 className="results-title">Outcome highlights</h3>
            <div className="outcome-list">
              {featuredProject.outcomes.map((outcome) => (
                <span className="outcome-pill" key={outcome}>
                  {outcome}
                </span>
              ))}
            </div>
            <Link className="text-link" to="/projects">
              Explore selected work
            </Link>
          </div>
        </article>
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
        <div>
          <div className="section-heading">
            <p className="section-kicker">Achievements</p>
            <h2 className="section-title">
              Competitive and community milestones
            </h2>
          </div>

          <div className="achievement-list">
            {resumeData.achievements.map((achievement) => (
              <article
                className="achievement-card surface-panel"
                key={achievement.id}
              >
                <p>{achievement.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="section-heading">
            <p className="section-kicker">Education</p>
            <h2 className="section-title">Academic foundation</h2>
          </div>

          {resumeData.education.map((item) => (
            <article className="education-card surface-panel" key={item.id}>
              <p className="education-school">{item.institution}</p>
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-meta">
                {item.period} | {item.location}
              </p>
              <div className="tag-list">
                {item.details.map((detail) => (
                  <span className="tag" key={detail}>
                    {detail}
                  </span>
                ))}
              </div>
            </article>
          ))}
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
