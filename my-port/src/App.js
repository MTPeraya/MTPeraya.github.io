import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDarkMode } from "./useDarkMode";
import "./index.css";
import { BubbleMenuComponent } from './components/BubbleMenu';
import { Layout } from './components/Layout';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import SpaceDust from './components/SpaceDust';

// Home page
const Home = () => (
  <div className="scroll-container">
    <div id="home"><Hero /></div>
    {/*div id="projects" className="scroll-section"><Projects /></div*/}
    {/*<div id="about" className="scroll-section"><About /></div> */} 
    {/*div id="skills" className="scroll-section"><Skills /></div*/}
    {/*div id="contact" className="scroll-section"><Contact /></div*/}
  </div>
);

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <Router basename="/">
      <SpaceDust color={theme === 'dark' ? '#ffffff' : '#4361EE'} />
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
