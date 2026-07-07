import React from "react";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import "./Hero.css";
import TextType from './TextType';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <TextType 
                  text={["Hello! I'm Mint...","Sawasdee! I'm Mint..."]}
                  typingSpeed={100}
                  pauseDuration={3000}
                  showCursor
                  cursorCharacter="_"/>
          </div>
          <h1 className="hero-title">
            <span className="text-gradient"> Peraya Leangsongchai</span>
            <br />
            <span className="hero-title-sub">Software Engineer</span>
          </h1>
          <div className="hero-badge">
            <Sparkles className="badge-icon" size={16} />
            <span>Available for new opportunities</span>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <Code2 className="stat-icon" size={24} />
              <div className="stat-text">
                <span className="stat-value">Full Stack</span>
                <span className="stat-label">Development</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <Terminal className="stat-icon" size={24} />
              <div className="stat-text">
                <span className="stat-value">Clean Code</span>
                <span className="stat-label">Architecture</span>
              </div>
            </div>
          </div>
          <p className="hero-description">
            Software Engineer & Full Stack Developer. I specialize in building 
            scalable, efficient, and user-focused applications with modern technologies. 
            Transforming ideas into elegant code.
          </p>
          
          <div className="hero-cta-group">
            <button onClick={() => scrollToSection('projects')} className="btn-primary">
              View My Work <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
