import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top portfolio-navbar">
      <div className="container">

        {/* Logo */}
        <NavLink
          className="navbar-brand fw-bold"
          to="/"
          onClick={handleNavClick}
        >
          Shubham<span className="text-primary">.</span>
        </NavLink>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarMenu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className={`collapse navbar-collapse ${
            menuOpen ? "show" : ""
          }`}
          id="navbarMenu"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink
                to="/"
                end
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-house me-1"></i>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-person me-1"></i>
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/skills"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-code-slash me-1"></i>
                Skills
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-folder me-1"></i>
                Projects
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/experience"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-briefcase me-1"></i>
                Experience
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/education"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-mortarboard me-1"></i>
                Education
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <i className="bi bi-envelope me-1"></i>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary ms-lg-3 resume-btn"
            onClick={handleNavClick}
          >
            <i className="bi bi-file-earmark-pdf me-2"></i>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;