import React, { useState } from "react";
import "./Skills.css";
import { TechBadge } from "./TechBadge";

const skillsData = {
  languages: {
    title: "Languages",
    icon: "💬",
    color: "#4361EE",
    skills: ["Python", "Java", "JavaScript", "TypeScript"],
  },
  frontend: {
    title: "Frontend",
    icon: "🎨",
    color: "#E83E8C",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  backend: {
    title: "Backend & DB",
    icon: "⚙️",
    color: "#00C9A7",
    skills: ["Node", "PostgreSQL", "MongoDB", "REST API"],
  },
  devops: {
    title: "DevOps & Tools",
    icon: "🛠️",
    color: "#F72585",
    skills: ["Docker", "Git", "Linux", "AWS"],
  },
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  return (
    <section className="skills">
      {/* Section label + asymmetric title */}
      <div className="skills-title-row">
        <span className="skills-label">02 — Skills</span>
        <h1 className="skills-heading">
          What's in my<br />
          <span className="skills-heading-accent">toolbox?</span>
        </h1>
      </div>

      <div className="skills-layout">
        {/* Sidebar tab navigation */}
        <div className="skills-tabs">
          {Object.entries(skillsData).map(([key, cat]) => (
            <button
              key={key}
              className={`skills-tab ${activeCategory === key ? "active" : ""}`}
              onClick={() => setActiveCategory(key)}
              style={activeCategory === key ? { borderColor: cat.color } : {}}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span className="tab-label">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div className="skills-panel">
          {Object.entries(skillsData).map(([key, cat]) => (
            <div
              key={key}
              className={`skills-panel-content ${activeCategory === key ? "visible" : ""}`}
            >
              <div className="panel-header">
                <span className="panel-icon" style={{ background: cat.color + "22" }}>
                  {cat.icon}
                </span>
                <div>
                  <h2 className="panel-title">{cat.title}</h2>
                  <p className="panel-desc">[YOUR DETAIL HERE] — Add a short note about your experience in {cat.title.toLowerCase()}.</p>
                </div>
              </div>
              <div className="skills-badges">
                {cat.skills.map((skill) => (
                  <TechBadge key={skill} name={skill} variant="solid" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competency strip — horizontal instead of grid */}
      <div className="competency-strip">
        {["Full Stack Development", "Software Architecture", "Problem Solving", "Code Quality"].map((c) => (
          <div key={c} className="competency-chip">
            <span className="chip-dot" />
            {c}
          </div>
        ))}
      </div>
    </section>
  );
};
