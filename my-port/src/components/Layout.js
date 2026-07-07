import React from "react";
import "./Layout.css";

export const Layout = ({ children, theme, toggleTheme }) => {
  return (
    <div className="layout">

      <main className="layout-main">{children}</main>

      <footer className="layout-footer">
        <div className="footer-content">
          <p>&copy; 2026 Peraya Leangsongchai. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/MTPeraya"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/peraya-lsc/"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
            
            <a href="mailto:m.perayalsc@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
