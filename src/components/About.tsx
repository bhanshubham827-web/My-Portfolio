import { Link } from "react-router-dom";
import "../CSS/About.css";

function About() {
  return (
    <section className="about-page">

      <div className="container">

        {/* HERO */}
        <div className="about-hero">

          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-6">

              <span className="about-badge">
                <i className="bi bi-person-circle me-2"></i>
                About Me
              </span>

              <h1 className="about-title mt-3">
                My Journey From
                <span> Learning to Building</span>
              </h1>

              <p className="about-text">
                I am Pankaj Goswami, a BCA graduate and aspiring software
                developer with an interest in programming, web development,
                backend technologies and modern applications.
              </p>

              <p className="about-text">
                My development journey started with programming fundamentals
                and gradually moved toward web development, databases,
                ASP.NET Core, Web APIs and React.
              </p>

              <div className="about-buttons">

                <Link
                  to="/projects"
                  className="btn btn-primary"
                >
                  <i className="bi bi-folder2-open me-2"></i>
                  Explore My Projects
                </Link>

                <Link
                  to="/skills"
                  className="btn btn-outline-primary"
                >
                  <i className="bi bi-code-slash me-2"></i>
                  View Skills
                </Link>

              </div>

            </div>

            {/* RIGHT */}
            <div className="col-lg-6">

              <div className="journey-card hover-card">

                <div className="journey-header">
                  <div>
                    <span>MY JOURNEY</span>
                    <h4>From Code to Applications</h4>
                  </div>

                  <div className="journey-icon">
                    <i className="bi bi-rocket-takeoff"></i>
                  </div>
                </div>

                <div className="journey-line">

                  <div className="journey-item">
                    <div className="journey-dot"></div>

                    <div>
                      <span>01</span>
                      <h5>Programming</h5>
                      <p>C#, Java Script, C++, React.js</p>
                    </div>
                  </div>

                  <div className="journey-item">
                    <div className="journey-dot"></div>

                    <div>
                      <span>02</span>
                      <h5>Web Development</h5>
                      <p>HTML, CSS, JavaScript & Bootstrap</p>
                    </div>
                  </div>

                  <div className="journey-item">
                    <div className="journey-dot"></div>

                    <div>
                      <span>03</span>
                      <h5>Backend & APIs</h5>
                      <p>ASP.NET Core, Web API & Dapper</p>
                    </div>
                  </div>

                  <div className="journey-item">
                    <div className="journey-dot"></div>

                    <div>
                      <span>04</span>
                      <h5>Modern Frontend</h5>
                      <p>React, TypeScript, Vite & Axios</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* WHAT I WORK WITH */}
        <div className="work-section">

          <div className="text-center section-heading">

            <span className="small-label">
              WHAT I WORK WITH
            </span>

            <h2>
              Building With <span>Modern Technologies</span>
            </h2>

            <p>
              I enjoy working across different parts of application
              development and continuously improving my technical skills.
            </p>

          </div>


          <div className="row g-4 mt-2">

            <div className="col-md-6 col-lg-3">
              <div className="work-card">
                <div className="work-icon">
                  <i className="bi bi-code-square"></i>
                </div>

                <h4>Programming</h4>

                <p>
                  Strong foundation in programming concepts,
                  OOP and problem solving.
                </p>

                <span>C# · JavaScript · React.js · C++</span>
              </div>
            </div>


            <div className="col-md-6 col-lg-3">
              <div className="work-card">
                <div className="work-icon">
                  <i className="bi bi-globe2"></i>
                </div>

                <h4>Web Development</h4>

                <p>
                  Creating responsive and user-friendly
                  web applications.
                </p>

                <span>HTML · CSS · JS · React</span>
              </div>
            </div>


            <div className="col-md-6 col-lg-3">
              <div className="work-card">
                <div className="work-icon">
                  <i className="bi bi-server"></i>
                </div>

                <h4>Backend & API</h4>

                <p>
                  Building APIs and backend applications
                  with clean architecture.
                </p>

                <span>ASP.NET Core · Web API</span>
              </div>
            </div>


            <div className="col-md-6 col-lg-3">
              <div className="work-card">
                <div className="work-icon">
                  <i className="bi bi-database"></i>
                </div>

                <h4>Database</h4>

                <p>
                  Designing databases and working with
                  queries and application data.
                </p>

                <span>SQL Server · Dapper</span>
              </div>
            </div>

          </div>

        </div>


        {/* CURRENT FOCUS */}
        <div className="focus-section">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <span className="focus-label">
                <i className="bi bi-lightning-charge-fill me-2"></i>
                CURRENT FOCUS
              </span>

              <h2>
                Always Learning. Always Building.
              </h2>

              <p>
                Currently focusing on improving my React, TypeScript,
                ASP.NET Core and API development skills while building
                practical projects that solve real problems.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

              <Link
                to="/contact"
                className="btn btn-light focus-button"
              >
                Let's Connect
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;