import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const links = [
    { text: "Home", to: "/" },
    { text: "Projects", to: "/projects" },
  ];

  return (
    <nav className="site-nav">
      <div className="nav-shell">
        <div className="nav-inner">
          <Link className="brand-link" to="/" onClick={() => setShowMenu(false)}>
            <span className="brand-mark">&lt;/&gt;</span>
            <span className="brand-copy">
              <span className="brand-title">rohit8020</span>
              <span className="brand-subtitle">Backend Engineer</span>
            </span>
          </Link>

          <div className="nav-links nav-links-desktop">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${
                  location.pathname === link.to ? "nav-link-active" : ""
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="nav-toggle-wrap">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="nav-toggle"
              aria-expanded={showMenu}
              aria-label="Toggle navigation menu"
              type="button"
            >
              <svg
                className="nav-toggle-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`nav-links-mobile ${showMenu ? "nav-links-mobile-open" : ""}`}>
        <div className="nav-mobile-panel">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${
                location.pathname === link.to ? "nav-link-active" : ""
              }`}
              onClick={() => setShowMenu(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
