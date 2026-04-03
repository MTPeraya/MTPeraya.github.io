import React from "react";
import "./Layout.css";

export const Layout = ({ children, theme, toggleTheme }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="header-container">
          <h1 className="logo">MTPeraya</h1>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        <div className="footer-content">
          <p>&copy; 2026 MTPeraya. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:hello@example.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
