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
            I'm a software engineer with a passion for building products that make
            a real difference. My journey into tech started with a single coding
            class, and since then I've focused on writing clean, efficient code
            that solves meaningful problems.
          </p>
          <div className="bio-meta">
            <span><MapPin size={14} /> Bangkok, Thailand</span>
            <span><Coffee size={14} /> Fuelled by Cocoa</span>
          </div>
        </div>

        {/* Quick facts tall card */}
        <div className="bento-card bento-facts">
          <Lightbulb size={28} className="facts-icon" />
          <h3>Quick Facts</h3>
          <ul className="facts-list">
            <li>🎓 Software and Knowledge Engineering Junior @Kasetsart University</li>
            <li>📚 Always learning</li>
            <li>💼 years of experience</li>
            <li>🌏 Open to work internationally</li>
            
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
