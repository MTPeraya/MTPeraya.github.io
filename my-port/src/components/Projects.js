import React from "react";
import "./Projects.css";
import { TechBadge } from "./TechBadge";

const projectsData = [
  {
    id: 1,
    title: "[PROJECT 1 TITLE]",
    description: "[PROJECT 1 DESCRIPTION — Add 2-3 sentences about what this project does and the problem it solves.]",
    image: "[Project 1 Screenshot URL or placeholder]",
    technologies: ["React", "Python", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: "#",
  },
  {
    id: 2,
    title: "[PROJECT 2 TITLE]",
    description: "[PROJECT 2 DESCRIPTION — Add 2-3 sentences about what this project does and the problem it solves.]",
    image: "[Project 2 Screenshot URL or placeholder]",
    technologies: ["Java", "PostgreSQL", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: "#",
  },
  {
    id: 3,
    title: "[PROJECT 3 TITLE]",
    description: "[PROJECT 3 DESCRIPTION — Add 2-3 sentences about what this project does and the problem it solves.]",
    image: "[Project 3 Screenshot URL or placeholder]",
    technologies: ["React", "Node", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: "#",
  },
];

export const Projects = () => {
  return (
    <section className="projects">
      <div className="section-header">
        <h1>Featured Projects</h1>
        <p>A selection of projects that showcase my skills in full-stack development</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="image-placeholder">{project.image}</div>
            </div>

            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                <span className="tech-label">Tech Stack:</span>
                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} variant="solid" />
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.liveUrl !== "#" && (
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    🔗 Live Demo
                  </a>
                )}
                {project.githubUrl !== "#" && (
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    💻 GitHub
                  </a>
                )}
                {project.caseStudy !== "#" && (
                  <a href={project.caseStudy} className="project-link">
                    📄 Case Study
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <h2>See More?</h2>
        <p>Check out my GitHub profile for additional projects and code samples.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Visit GitHub Profile
        </a>
      </div>
    </section>
  );
};
