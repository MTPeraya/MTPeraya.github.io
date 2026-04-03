import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { TechBadge } from "./TechBadge";

export const About = () => {
  return (
    <section className="about">
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">Software Engineer & Full Stack Developer</h1>
          <p className="hero-subtitle">
            Building scalable, efficient, and user-focused applications with modern technologies.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              View My Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar">[Avatar/Profile Image]</div>
        </div>
      </div>

      <div className="about-intro">
        <h2>About Me</h2>
        <p className="intro-text">
          [YOUR INTRODUCTION HERE] — Replace this with a brief overview of who you are, your background, and what
          drives your passion for software development. 2-3 sentences.
        </p>
      </div>

      <div className="about-expertise">
        <h2>Core Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>🎨 Full Stack Development</h3>
            <p>[DESCRIBE YOUR FULL STACK SKILLS HERE] — Your experience building complete applications from frontend to backend.</p>
            <div className="tech-badges">
              <TechBadge name="React" variant="solid" />
              <TechBadge name="Python" variant="solid" />
              <TechBadge name="Java" variant="solid" />
            </div>
          </div>

          <div className="expertise-card">
            <h3>⚙️ Backend & DevOps</h3>
            <p>[DESCRIBE YOUR BACKEND/DEVOPS EXPERTISE HERE] — Server-side development, databases, containerization, deployment.</p>
            <div className="tech-badges">
              <TechBadge name="Docker" variant="solid" />
              <TechBadge name="PostgreSQL" variant="solid" />
              <TechBadge name="Node" variant="solid" />
            </div>
          </div>

          <div className="expertise-card">
            <h3>🚀 Problem Solving</h3>
            <p>[DESCRIBE YOUR PROBLEM-SOLVING APPROACH HERE] — How you approach challenges and deliver impactful solutions.</p>
            <div className="tech-badges">
              <TechBadge name="Git" variant="solid" />
              <TechBadge name="Linux" variant="solid" />
              <TechBadge name="REST API" variant="solid" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <h2>Ready to Collaborate?</h2>
        <p>Whether you're building a startup MVP or scaling enterprise systems, let's create something amazing together.</p>
        <Link to="/contact" className="btn btn-large">
          Start a Conversation
        </Link>
      </div>
    </section>
  );
};
