import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDarkMode } from "./useDarkMode";
import "./index.css";
import { BubbleMenuComponent } from './components/BubbleMenu';
import { Layout } from './components/Layout';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';

// Home page
const Home = () => (
  <div className="scroll-container">
    <div id="home" className="home-section">
      <div className="home-hero">
        <h1>MTPeraya</h1>
        <p className="home-subtitle">Software Engineer & Full Stack Developer</p>
        <p className="home-description">Crafting exceptional digital experiences with elegant solutions to complex problems.</p>
        <div className="home-cta">
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </div>
    <div id="about" className="scroll-section"><About /></div>
    <div id="projects" className="scroll-section"><Projects /></div>
    <div id="skills" className="scroll-section"><Skills /></div>
    <div id="blog" className="scroll-section"><Blog /></div>
    <div id="contact" className="scroll-section"><Contact /></div>
  </div>
);

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <Router basename="/">
      <BubbleMenuComponent />
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
