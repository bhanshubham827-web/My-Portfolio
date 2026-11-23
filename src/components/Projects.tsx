import "../CSS/Projects.css";

interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  type: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Expense Tracker",
    description:
      "A complete expense management application for tracking income, expenses, categories, debts and financial records.",
    technologies: [
      "ASP.NET Core",
      "Razor Pages",
      "Dapper",
      "SQL Server",
    ],
    icon: "bi-wallet2",
    type: "Full Stack",
    githubUrl: "https://github.com/",
  },
  {
    id: 2,
    number: "02",
    title: "Employee Management System",
    description:
      "An employee management application with CRUD operations, API integration and database management.",
    technologies: [
      "ASP.NET Core",
      "Web API",
      "SQL Server",
      "Bootstrap",
    ],
    icon: "bi-people",
    type: "Web API",
    githubUrl: "https://github.com/",
  },
  {
    id: 3,
    number: "03",
    title: "Task Manager",
    description:
      "A task management application for creating, tracking and managing tasks with authentication and filtering.",
    technologies: [
      "ASP.NET Core",
      "Razor Pages",
      "Dapper",
      "SQL Server",
    ],
    icon: "bi-check2-square",
    type: "Web Application",
    githubUrl: "https://github.com/",
  },
  {
    id: 4,
    number: "04",
    title: "React Employee Management",
    description:
      "A modern React and TypeScript frontend for managing employee information and communicating with APIs.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Axios",
    ],
    icon: "bi-braces",
    type: "Frontend",
    githubUrl: "https://github.com/",
  },
];

function Projects() {
  return (
    <section className="projects-page">

      <div className="container">

        {/* HERO */}

        <div className="projects-hero">

          <div className="row align-items-center g-5">

            <div className="col-lg-7">

              <span className="projects-badge">
                <i className="bi bi-folder2-open me-2"></i>
                My Projects
              </span>

              <h1 className="projects-title mt-3">
                Things I've
                <span> Built & Learned From</span>
              </h1>

              <p className="projects-description">
                These projects represent my journey from learning
                programming concepts to building complete web
                applications and modern React interfaces.
              </p>

              <div className="project-stats">

                <div>
                  <strong>04+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>10+</strong>
                  <span>Technologies</span>
                </div>

                <div>
                  <strong>∞</strong>
                  <span>Ideas to Build</span>
                </div>

              </div>

            </div>


            <div className="col-lg-5">

              <div className="projects-visual">

                <div className="project-window">

                  <div className="project-window-header">

                    <div className="window-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <span>projects.tsx</span>

                  </div>

                  <div className="project-code">

                    <span className="code-blue">const</span>{" "}
                    projects = [

                    <br />

                    &nbsp;&nbsp;"Expense Tracker",

                    <br />

                    &nbsp;&nbsp;"Employee Management",

                    <br />

                    &nbsp;&nbsp;"Task Manager",

                    <br />

                    &nbsp;&nbsp;"React Management"

                    <br />

                    ];

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* PROJECTS */}

        <div className="projects-section">

          <div className="section-heading">

            <span>WHAT I'VE BUILT</span>

            <h2>
              From <strong>Ideas</strong> to Applications
            </h2>

            <p>
              Each project helped me understand new concepts,
              solve problems and improve my development skills.
            </p>

          </div>


          <div className="row g-4 mt-3">

            {projects.map((project) => (

              <div
                className="col-md-6"
                key={project.id}
              >

                <div className="project-card hover-card">

                  <div className="project-card-top">

                    <div className="project-icon">
                      <i className={`bi ${project.icon}`}></i>
                    </div>

                    <span className="project-number">
                      {project.number}
                    </span>

                  </div>


                  <div className="project-type">
                    {project.type}
                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p className="project-description">
                    {project.description}
                  </p>


                  <div className="project-technologies">

                    {project.technologies.map((technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    ))}

                  </div>


                  <div className="project-footer">

                    <span>
                      <i className="bi bi-code-slash me-1"></i>
                      Development Project
                    </span>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                        <i className="bi bi-arrow-up-right ms-1"></i>
                      </a>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* JOURNEY */}

        <div className="project-journey">

          <div className="section-heading text-center">

            <span>MY DEVELOPMENT JOURNEY</span>

            <h2>
              Learning Through <strong>Projects</strong>
            </h2>

          </div>


          <div className="journey-flow">

            <div className="flow-item">
              <span>01</span>
              <h4>Learn</h4>
              <p>Understand programming concepts.</p>
            </div>

            <i className="bi bi-arrow-right"></i>

            <div className="flow-item">
              <span>02</span>
              <h4>Build</h4>
              <p>Apply concepts in practical projects.</p>
            </div>

            <i className="bi bi-arrow-right"></i>

            <div className="flow-item">
              <span>03</span>
              <h4>Solve</h4>
              <p>Find solutions to real development problems.</p>
            </div>

            <i className="bi bi-arrow-right"></i>

            <div className="flow-item">
              <span>04</span>
              <h4>Improve</h4>
              <p>Learn from every project and keep growing.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;