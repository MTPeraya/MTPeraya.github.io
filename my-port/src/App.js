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
  <div className="home-section">
    <div className="home-hero">
      <h1>MTPeraya</h1>
      <p className="home-subtitle">Software Engineer & Full Stack Developer</p>
      <p className="home-description">Building elegant solutions to complex problems.</p>
      <div className="home-cta">
        <Link to="/projects" className="btn btn-primary">View My Work</Link>
        <Link to="/contact" className="btn btn-secondary">Let's Talk</Link>
      </div>
    </div>
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
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
