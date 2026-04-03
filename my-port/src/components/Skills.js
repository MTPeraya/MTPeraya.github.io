import React from "react";
import { Link } from "react-router-dom";
import "./Skills.css";
import { TechBadge } from "./TechBadge";

const skillsData = {
  languages: {
    title: "Languages",
    description: "[YOUR DETAIL HERE] — Add proficiency notes or years of experience with each language.",
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  frontend: {
    title: "Frontend",
    description: "[YOUR DETAIL HERE] — Libraries, frameworks, and tools you use for building user interfaces.",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  backend: {
    title: "Backend & Databases",
    description: "[YOUR DETAIL HERE] — Server-side frameworks, APIs, and database technologies.",
    skills: ["Node", "PostgreSQL", "MongoDB", "REST API"],
  },
  devops: {
    title: "DevOps & Tools",
    description: "[YOUR DETAIL HERE] — Deployment, containerization, and development tools.",
    skills: ["Docker", "Git", "Linux", "AWS"],
  },
};

export const Skills = () => {
  return (
    <section className="skills">
      <div className="section-header">
        <h1>Technical Skills</h1>
        <p>A comprehensive overview of my technical expertise across the full stack</p>
      </div>

      <div className="skills-grid">
        {Object.entries(skillsData).map(([key, category]) => (
          <div key={key} className="skill-category">
            <div className="category-header">
              <h2>{category.title}</h2>
              <p className="category-description">{category.description}</p>
            </div>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill} className="skill-item">
                  <TechBadge name={skill} variant="solid" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-highlight">
        <h2>Core Competencies</h2>
        <div className="competencies-list">
          <div className="competency-item">
            <h3>Full Stack Development</h3>
            <p>Building complete applications from database to user interface</p>
          </div>
          <div className="competency-item">
            <h3>Software Architecture</h3>
            <p>[YOUR DETAIL HERE] — How you design scalable, maintainable systems</p>
          </div>
          <div className="competency-item">
            <h3>Problem Solving</h3>
            <p>[YOUR DETAIL HERE] — Approach to debugging, optimization, and algorithmic challenges</p>
          </div>
          <div className="competency-item">
            <h3>Code Quality</h3>
            <p>[YOUR DETAIL HERE] — Testing strategies, documentation, and best practices</p>
          </div>
        </div>
      </div>

      <div className="skills-cta">
        <h2>Want to work together?</h2>
        <p>
          If you're looking for a developer who combines solid fundamentals with modern technologies and a commitment
          to code quality, let's talk!
        </p>
        <Link to="/contact" className="btn btn-primary">
          Start a Conversation
        </Link>
      </div>
    </section>
  );
};
