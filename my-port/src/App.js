import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDarkMode } from "./useDarkMode";
import "./index.css";
import { BubbleMenuComponent } from './components/BubbleMenu';
import { Layout } from './components/Layout';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

// Home page
const Home = () => (
  <div className="scroll-container">
    <div id="home" className="home-section"></div>
    <div id="about" className="scroll-section"><About /></div>
    <div id="projects" className="scroll-section"><Projects /></div>
    <div id="skills" className="scroll-section"><Skills /></div>
    <div id="contact" className="scroll-section"><Contact /></div>
  </div>
);

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <Router basename="/">
      <BubbleMenuComponent theme={theme} toggleTheme={toggleTheme} />
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
