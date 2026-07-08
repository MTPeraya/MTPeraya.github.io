import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Projects.css";
import { TechBadge } from "./TechBadge";

// Inline GitHub icon — lucide-react in this project doesn't include brand icons
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: "[PROJECT 1 TITLE]",
    description: "[PROJECT 1 DESCRIPTION — Add 2-3 sentences about what this project does and the problem it solves.]",
    image: null, // Replace with image URL string when ready
    technologies: ["React", "Python", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    isBest: true,
  },
  {
    id: 2,
    title: "[PROJECT 2 TITLE]",
    description: "[PROJECT 2 DESCRIPTION — Add 2-3 sentences about what this project does and the problem it solves.]",
    image: null,
    technologies: ["Java", "PostgreSQL", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "[PROJECT 3 TITLE]",
    description: "[PROJECT 3 DESCRIPTION — Add 2-3 sentences about what this project does and the problem it solves.]",
    image: null,
    technologies: ["React", "Node", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "[PROJECT 4 TITLE]",
    description: "[PROJECT 4 DESCRIPTION — Add 2-3 sentences about what this project does and the problem it solves.]",
    image: null,
    technologies: ["TypeScript", "Next.js", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "[PROJECT 5 TITLE]",
    description: "[PROJECT 5 DESCRIPTION — Add 2-3 sentences about what this project does and the problem it solves.]",
    image: null,
    technologies: ["Vue.js", "Firebase", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const getSlideClass = (index, currentIndex) => {
  const offset = index - currentIndex;
  if (offset === 0) return "carousel-slide active";
  if (offset === -1) return "carousel-slide prev";
  if (offset === 1) return "carousel-slide next";
  return offset < 0 ? "carousel-slide hidden-left" : "carousel-slide hidden-right";
};

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(projectsData.length - 1, i + 1));

  return (
    <section className="projects">
      {/* Header */}
      <div className="projects-title-row">
        <span className="projects-label">00 — Work</span>
        <h1 className="projects-heading">Featured Projects</h1>
        <p className="projects-subheading">
          A selection of projects that showcase my skills in full-stack development
        </p>
      </div>

      {/* Coverflow Carousel */}
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={getSlideClass(index, currentIndex)}
              onClick={() => {
                if (index === currentIndex - 1) prev();
                if (index === currentIndex + 1) next();
              }}
            >
              <div className={`project-card ${project.isBest ? "best-project-aura" : ""}`}>
                {/* Image */}
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="image-placeholder">
                      <span>📸 Add project screenshot</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="project-content">
                  {project.isBest && <span className="best-badge">⭐ Featured</span>}
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    <span className="tech-label">Tags</span>
                    <div className="tech-list">
                      {project.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} variant="solid" />
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => index !== currentIndex && e.preventDefault()}
                      >
                        🔗 Live Demo
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => index !== currentIndex && e.preventDefault()}
                      >
                        💻 GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="carousel-nav-bottom">
          <button className={`nav-btn ${currentIndex === 0 ? "disabled" : ""}`} onClick={prev} disabled={currentIndex === 0} aria-label="Previous">
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>

          <div className="carousel-dots">
            {projectsData.map((_, idx) => (
              <button
                key={idx}
                className={`dot-indicator ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          <button className={`nav-btn ${currentIndex === projectsData.length - 1 ? "disabled" : ""}`} onClick={next} disabled={currentIndex === projectsData.length - 1} aria-label="Next">
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* GitHub CTA — inline strip, not a big box */}
      <div className="projects-github-strip">
        <span>Want to see more?</span>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">
          <GithubIcon size={18} />
          View GitHub Profile
        </a>
      </div>
    </section>
  );
};
