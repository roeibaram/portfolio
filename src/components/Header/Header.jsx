import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__nav">
        <p className="header__brand">RB</p>
        <ul className="header__nav-links">
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="header__hero">
        <p className="header__kicker">Software Engineer</p>
        <h1 className="header__name">
          Building clean, practical,
          <span>user-first products.</span>
        </h1>

        <div className="header__actions">
          <a href="#projects">View Projects</a>
          <a href="https://github.com/roeibaram" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/roeibaram/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <ul className="header__highlights">
          <li>JavaScript + React</li>
          <li>Node.js + Express</li>
          <li>MongoDB + REST APIs</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
