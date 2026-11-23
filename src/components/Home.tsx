import { Link } from "react-router-dom";
import "../CSS/Home.css";

function Home() {
  return (
    <section className="home-page">

      {/* HERO SECTION */}

      <div className="container">

        <div className="row align-items-center g-5 home-hero">

          {/* LEFT CONTENT */}

          <div className="col-lg-6">

            <div className="home-badge">
              <span className="status-dot"></span>
              Available for Opportunities
            </div>

            <h1 className="home-title">
              Hi, I'm{" "}
              <span>Shubham</span>
            </h1>

            <h2 className="home-role">
              Software Developer
            </h2>

            <p className="home-description">
              I build modern web applications using ASP.NET Core,
              React, TypeScript and SQL Server. I enjoy learning
              new technologies and turning ideas into practical
              applications.
            </p>

            <div className="home-buttons">

              <Link
                to="/projects"
                className="btn btn-primary home-btn"
              >
                <i className="bi bi-folder2-open me-2"></i>
                View Projects
              </Link>

              <Link
                to="/contact"
                className="btn btn-outline-primary home-btn"
              >
                <i className="bi bi-envelope me-2"></i>
                Contact Me
              </Link>

            </div>

            <div className="home-social">

              <span>Connect with me</span>

              <a
                href="https://github.com/pankajg0swami"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/pankaj-goswami-49460a372"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="mailto:Pankajgoswamiiji@gmail.com">
                <i className="bi bi-envelope"></i>
              </a>

            </div>

          </div>


          {/* RIGHT DEVELOPER CARD */}

          <div className="col-lg-6">

            <div className="developer-wrapper">

              <div className="developer-card">

                <div className="developer-header">

                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>developer.ts</span>

                </div>

                <div className="developer-code">

                  <div>
                    <span className="code-blue">const</span>{" "}
                    developer = {"{"}
                  </div>

                  <div className="code-indent">
                    name:{" "}
                    <span className="code-green">
                      "shubham"
                    </span>,
                  </div>

                  <div className="code-indent">
                    role:{" "}
                    <span className="code-green">
                      "Software Developer"
                    </span>,
                  </div>

                  <div className="code-indent">
                    experience:{" "}
                    <span className="code-orange">
                      "SSGM Digital"
                    </span>,
                  </div>

                  <div className="code-indent">
                    frontend:{" "}
                    <span className="code-green">
                      ["React", "TypeScript"]
                    </span>,
                  </div>

                  <div className="code-indent">
                    backend:{" "}
                    <span className="code-green">
                      ["ASP.NET Core", "Web API"]
                    </span>,
                  </div>

                  <div className="code-indent">
                    database:{" "}
                    <span className="code-green">
                      ["SQL Server"]
                    </span>
                  </div>

                  <div>{"}"}</div>

                  <div className="code-comment">
                    // Always learning. Always building.
                  </div>

                </div>

              </div>


              {/* FLOATING CARDS */}

              <div className="floating-card floating-card-one">
                <i className="bi bi-code-slash"></i>
                <div>
                  <strong>5+</strong>
                  <span>Technologies</span>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <i className="bi bi-laptop"></i>
                <div>
                  <strong>4+</strong>
                  <span>Projects</span>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* QUICK STATS */}

        <div className="home-stats">

          <div className="home-stat">
            <i className="bi bi-code-square"></i>
            <div>
              <strong>15+</strong>
              <span>Technologies</span>
            </div>
          </div>

          <div className="home-stat">
            <i className="bi bi-folder-check"></i>
            <div>
              <strong>4+</strong>
              <span>Projects</span>
            </div>
          </div>

          <div className="home-stat">
            <i className="bi bi-briefcase"></i>
            <div>
              <strong>2026</strong>
              <span>Professional Journey</span>
            </div>
          </div>

          <div className="home-stat">
            <i className="bi bi-lightbulb"></i>
            <div>
              <strong>∞</strong>
              <span>Learning Mindset</span>
            </div>
          </div>

        </div>


        {/* JOURNEY PREVIEW */}

        <div className="home-journey">

          <div className="journey-content">

            <span>MY DEVELOPMENT JOURNEY</span>

            <h2>
              Learn. Build. <strong>Improve.</strong>
            </h2>

            <p>
              My development journey started with programming
              fundamentals and gradually moved toward web
              development, backend APIs and modern React
              applications.
            </p>

            <Link to="/experience">
              Explore My Journey
              <i className="bi bi-arrow-right ms-2"></i>
            </Link>

          </div>

          <div className="journey-icons">

            <div>
              <i className="bi bi-code-square"></i>
              <span>Learn</span>
            </div>

            <div>
              <i className="bi bi-tools"></i>
              <span>Build</span>
            </div>

            <div>
              <i className="bi bi-lightning"></i>
              <span>Improve</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;