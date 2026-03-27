import React from "react";
import { Link } from "react-router-dom";

import { resumeData } from "../../data/resume";

import "./Projects.css";

const Projects = () => {
  const [caseStudy] = resumeData.featuredWork;
  const additionalProjects = resumeData.additionalProjects;

  return (
    <main className="projects-page">
      <section className="content-section">
        <div className="section-heading">
          <p className="section-kicker">Project Archive</p>
          <h2 className="section-title">Additional Useful and fun Projects</h2>
        </div>

        <div className="project-archive-grid">
          {additionalProjects.map((project) => (
            <article className="project-archive-card surface-panel" key={project.id}>
              <div className="project-archive-top">
                <div>
                  <p className="card-label">Personal Project</p>
                  <h3 className="project-archive-title">{project.name}</h3>
                </div>

                <div className="project-link-row">
                  <a
                    className="text-link"
                    href={project.github}
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    className="text-link"
                    href={project.demo}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              <p className="project-archive-summary">{project.summary}</p>

              <ul className="bullet-list compact-list">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              <div className="stack-list">
                {project.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
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
