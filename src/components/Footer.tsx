import { Link } from "react-router-dom";
import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="portfolio-footer">

      <div className="container">

        <div className="row gy-4">

          {/* BRAND */}

          <div className="col-lg-5">

            <Link to="/" className="footer-brand">
              Pankaj<span>.</span>
            </Link>

            <p className="footer-description">
              Aspiring software developer passionate about programming,
              web development and building modern applications.
            </p>

            <div className="footer-social">

              <a
                href="https://github.com/pankajg0swami"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/pankaj-goswami-49460a372"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="mailto:Pankajgoswamiiji@gmail.com"
                title="Email"
              >
                <i className="bi bi-envelope"></i>
              </a>

              <a
                href="tel:+919255973126"
                title="Phone"
              >
                <i className="bi bi-telephone"></i>
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}

          <div className="col-6 col-lg-3">

            <h5 className="footer-heading">
              Quick Links
            </h5>

            <ul className="footer-links">

              <li>
                <Link to="/">
                  <i className="bi bi-chevron-right"></i>
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <i className="bi bi-chevron-right"></i>
                  About
                </Link>
              </li>

              <li>
                <Link to="/skills">
                  <i className="bi bi-chevron-right"></i>
                  Skills
                </Link>
              </li>

              <li>
                <Link to="/projects">
                  <i className="bi bi-chevron-right"></i>
                  Projects
                </Link>
              </li>

            </ul>

          </div>


          {/* EXPLORE */}

          <div className="col-6 col-lg-4">

            <h5 className="footer-heading">
              Explore
            </h5>

            <ul className="footer-links">

              <li>
                <Link to="/experience">
                  <i className="bi bi-chevron-right"></i>
                  Experience
                </Link>
              </li>

              <li>
                <Link to="/education">
                  <i className="bi bi-chevron-right"></i>
                  Education
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <i className="bi bi-chevron-right"></i>
                  Contact
                </Link>
              </li>

              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-chevron-right"></i>
                  Resume
                </a>
              </li>

            </ul>

          </div>

        </div>


        <hr className="footer-divider" />


        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Pankaj Goswami.
            All Rights Reserved.
          </p>

          <Link to="/" className="back-to-top">
            <i className="bi bi-arrow-up"></i>
          </Link>

        </div>

      </div>

    </footer>
  );
}

export default Footer;