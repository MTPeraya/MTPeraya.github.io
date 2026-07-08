import React from "react";
import "./About.css";
import { TechBadge } from "./TechBadge";
import { MapPin, Coffee, Lightbulb, Heart } from "lucide-react";

export const About = () => {
  return (
    <section className="about">
      {/* Section Title - left aligned, different from centered titles elsewhere */}
      <div className="about-title-row">
        <span className="about-label">01 — About Me</span>
        <h1 className="about-heading">The story <em>behind</em> the code</h1>
      </div>

      {/* Two-column bento layout */}
      <div className="about-bento">
        {/* Large bio card */}
        <div className="bento-card bento-bio">
          <p className="bio-text">
            [YOUR INTRODUCTION HERE] — Replace this with a brief overview of who you are, your background, and what drives your passion for software development. 2-3 sentences.
          </p>
          <div className="bio-meta">
            <span><MapPin size={14} /> [Your Location]</span>
            <span><Coffee size={14} /> Fuelled by coffee</span>
          </div>
        </div>

        {/* Quick facts tall card */}
        <div className="bento-card bento-facts">
          <Lightbulb size={28} className="facts-icon" />
          <h3>Quick Facts</h3>
          <ul className="facts-list">
            <li>🎓 [Your Degree / University]</li>
            <li>💼 [Years] years of experience</li>
            <li>🌏 Open to remote work</li>
            <li>📚 Always learning</li>
          </ul>
        </div>

        {/* Passion card */}
        <div className="bento-card bento-passion">
          <Heart size={22} className="passion-icon" />
          <h3>What I love building</h3>
          <p>[DESCRIBE YOUR PASSION] — What type of products or challenges excite you most?</p>
        </div>

        {/* Expertise cards — 3 columns spanning full width */}
        <div className="bento-card bento-expertise">
          <h3>🎨 Frontend</h3>
          <div className="tech-badges">
            <TechBadge name="React" variant="solid" />
            <TechBadge name="HTML" variant="solid" />
            <TechBadge name="CSS" variant="solid" />
          </div>
        </div>

        <div className="bento-card bento-expertise">
          <h3>⚙️ Backend</h3>
          <div className="tech-badges">
            <TechBadge name="Python" variant="solid" />
            <TechBadge name="Java" variant="solid" />
            <TechBadge name="Node" variant="solid" />
          </div>
        </div>

        <div className="bento-card bento-expertise">
          <h3>🛠️ DevOps</h3>
          <div className="tech-badges">
            <TechBadge name="Docker" variant="solid" />
            <TechBadge name="Git" variant="solid" />
            <TechBadge name="PostgreSQL" variant="solid" />
          </div>
        </div>
      </div>
    </section>
  );
};
