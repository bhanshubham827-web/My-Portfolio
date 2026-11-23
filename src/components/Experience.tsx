import "../CSS/Experience.css";

interface JourneyItem {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  icon: string;
}

const journey: JourneyItem[] = [
  {
    id: 1,
    number: "01",
    title: "Programming Foundations",
    subtitle: "Starting With the Basics",
    description:
      "Built a strong foundation in programming concepts, object-oriented programming, problem solving and core programming languages.",
    technologies: ["C#", "Java Script", "C++"],
    icon: "bi-code-square",
  },
  {
    id: 2,
    number: "02",
    title: "Web Development",
    subtitle: "Building for the Web",
    description:
      "Started creating responsive web interfaces and learned how frontend technologies work together to build modern websites.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: "bi-globe2",
  },
  {
    id: 3,
    number: "03",
    title: "Backend & APIs",
    subtitle: "Understanding Application Logic",
    description:
      "Moved into backend development by building CRUD applications, REST APIs, authentication and database-driven applications.",
    technologies: ["ASP.NET Core", "Web API", "Razor Pages", "Dapper", "EF Core"],
    icon: "bi-server",
  },
  {
    id: 4,
    number: "04",
    title: "Modern Frontend",
    subtitle: "Learning React",
    description:
      "Currently developing modern frontend applications using React and TypeScript while learning component-based development and API integration.",
    technologies: ["React", "TypeScript", "Vite", "Axios"],
    icon: "bi-braces",
  },
];

function Experience() {
  return (
    <section className="experience-page">

      <div className="container">

        {/* HERO */}

        <div className="experience-hero">

          <div className="row align-items-center g-5">

            <div className="col-lg-7">

              <span className="experience-badge">
                <i className="bi bi-briefcase me-2"></i>
                My Journey
              </span>

              <h1 className="experience-title mt-3">
                Learning,
                <span> Building & Growing</span>
              </h1>

              <p className="experience-description">
                My development journey has been a continuous process of
                learning new technologies, building practical projects and
                improving my understanding of software development.
              </p>

              <div className="journey-points">

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Practical Project Development
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Backend & API Development
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Database Management
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Modern React Development
                </div>

              </div>

            </div>


            <div className="col-lg-5">

              <div className="experience-visual">

                <div className="experience-icon-main">
                  <i className="bi bi-rocket-takeoff"></i>
                </div>

                <div className="experience-ring ring-one"></div>
                <div className="experience-ring ring-two"></div>

                <div className="floating-tech tech-one">
                  <i className="bi bi-code-slash"></i>
                </div>

                <div className="floating-tech tech-two">
                  <i className="bi bi-database"></i>
                </div>

                <div className="floating-tech tech-three">
                  <i className="bi bi-braces"></i>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* JOURNEY TIMELINE */}

        <div className="journey-section">

          <div className="section-heading text-center">

            <span>DEVELOPMENT JOURNEY</span>

            <h2>
              From Learning to <strong>Building</strong>
            </h2>

            <p>
              Every stage of my journey has introduced me to new concepts
              and helped me build better applications.
            </p>

          </div>


          <div className="timeline">

            {journey.map((item, index) => (

              <div
                className={`timeline-item ${
                  index % 2 === 0 ? "timeline-left" : "timeline-right"
                }`}
                key={item.id}
              >

                <div className="timeline-number">
                  {item.number}
                </div>

                <div className="timeline-dot">
                  <i className={`bi ${item.icon}`}></i>
                </div>

                <div className="timeline-card">

                  <span className="timeline-subtitle">
                    {item.subtitle}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="timeline-technologies">

                    {item.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* WORK EXPERIENCE */}

        <div className="work-experience-section">

        <div className="section-heading text-center">

            <span>WORK EXPERIENCE</span>

            <h2>
            Professional <strong>Experience</strong>
            </h2>

            <p>
            My practical experience working on software development
            projects and learning modern development technologies.
            </p>

        </div>


        <div className="experience-card">

            <div className="experience-card-left">

            <div className="company-icon">
                <i className="bi bi-building"></i>
            </div>

            </div>


            <div className="experience-card-content">

            <div className="experience-card-header">

                <div>
                <span className="experience-status">
                    CURRENT EXPERIENCE
                </span>

                <h3>Software Developer </h3>

                <h4>SSGM Digital</h4>
                </div>

                <span className="experience-duration">
                2026 - Present
                </span>

            </div>


      <p>
        Working on software development projects while gaining
        practical experience in backend development, databases,
        APIs and modern frontend technologies.
      </p>


      <div className="experience-technologies">

        <span>C#</span>
        <span>ASP.NET Core</span>
        <span>SQL Server</span>
        <span>React</span>
        <span>Web API</span>

      </div>

    </div>

  </div>

</div>


        {/* CURRENT FOCUS */}

        <div className="current-focus">

          <div className="focus-icon">
            <i className="bi bi-lightning-charge-fill"></i>
          </div>

          <div className="focus-content">

            <span>CURRENT FOCUS</span>

            <h2>
              Exploring Modern Development
            </h2>

            <p>
              Currently focusing on React, TypeScript, ASP.NET Core,
              Web APIs and building practical full-stack applications.
              The goal is to keep improving through hands-on projects.
            </p>

          </div>

          <div className="focus-arrow">
            <i className="bi bi-arrow-right"></i>
          </div>

        </div>


        {/* CLOSING */}

        <div className="growth-section text-center">

          <span>THE JOURNEY CONTINUES</span>

          <h2>
            Learn Something.
            <strong> Build Something.</strong>
          </h2>

          <p>
            I believe the best way to improve as a developer is to keep
            learning, experimenting and turning ideas into working projects.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Experience;