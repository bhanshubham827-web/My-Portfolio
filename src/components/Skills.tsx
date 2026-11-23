import "../CSS/Skills.css";

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "bi-code-square",
    description:
      "Programming fundamentals, OOP concepts and problem solving.",
    skills: ["C#", "React.js", "JavaScript", "C++"],
  },
  {
    title: "Frontend",
    icon: "bi-window-stack",
    description:
      "Building responsive and interactive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
  {
    title: "Backend",
    icon: "bi-server",
    description:
      "Developing APIs and server-side applications.",
    skills: ["ASP.NET Core", "Web API", "Razor Pages", "Dapper"],
  },
  {
    title: "Database",
    icon: "bi-database",
    description:
      "Working with relational databases and application data.",
    skills: ["SQL Server", "MS SQL", "MySQL", "Database Design"],
  },
];

function Skills() {
  return (
    <section className="skills-page">

      <div className="container">

        {/* HERO */}

        <div className="skills-hero">

          <div className="row align-items-center g-5">

            {/* LEFT */}

            <div className="col-lg-7">

              <span className="skills-badge">
                <i className="bi bi-code-slash me-2"></i>
                Technical Skills
              </span>

              <h1 className="skills-title mt-3">
                Technologies I Use
                <span> To Build Applications</span>
              </h1>

              <p className="skills-description">
                My technical journey has taken me from programming
                fundamentals to full-stack application development.
                I enjoy learning technologies and applying them
                through practical projects.
              </p>

              <div className="skill-highlights">

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Programming
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Web Development
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  API Development
                </div>

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Database Management
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="col-lg-5">

              <div className="skills-visual">

                <div className="floating-icon icon-one">
                  <i className="bi bi-filetype-cs"></i>
                </div>

                <div className="floating-icon icon-two">
                  <i className="bi bi-filetype-js"></i>
                </div>

                <div className="floating-icon icon-three">
                  <i className="bi bi-database"></i>
                </div>

                <div className="code-visual">

                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="code-content">

                    <span className="code-blue">
                      const
                    </span>{" "}
                    developer = {"{"}

                    <br />

                    &nbsp;&nbsp;skills: [

                    <br />

                    &nbsp;&nbsp;&nbsp;&nbsp;
                    "ASP.NET Core",

                    <br />

                    &nbsp;&nbsp;&nbsp;&nbsp;
                    "React",

                    <br />

                    &nbsp;&nbsp;&nbsp;&nbsp;
                    "SQL Server"

                    <br />

                    &nbsp;&nbsp;]

                    <br />

                    {"}"};

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* SKILLS STACK */}

        <div className="skills-stack">

          <div className="section-heading text-center">

            <span>MY SKILLS STACK</span>

            <h2>
              Tools & <strong>Technologies</strong>
            </h2>

            <p>
              A collection of technologies I have learned and
              used while building applications.
            </p>

          </div>


          <div className="row g-4 mt-3">

            {skillCategories.map((category) => (

              <div
                className="col-md-6"
                key={category.title}
              >

                <div className="category-card hover-card">

                  <div className="category-top">

                    <div className="category-icon">
                      <i className={`bi ${category.icon}`}></i>
                    </div>

                    <div>
                      <h4>{category.title}</h4>
                      <p>{category.description}</p>
                    </div>

                  </div>


                  <div className="skill-tags">

                    {category.skills.map((skill) => (

                      <span key={skill}>
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* LEARNING */}

        <div className="learning-section hover-card">

          <div className="learning-icon">
            <i className="bi bi-lightbulb"></i>
          </div>

          <div>

            <span>ALWAYS LEARNING</span>

            <h3>
              Improving One Project at a Time
            </h3>

            <p>
              Currently improving my React, TypeScript,
              ASP.NET Core and API development skills by
              building practical projects and exploring
              modern development approaches.
            </p>

          </div>

        </div>


        {/* STATS */}

        <div className="row g-3 skills-stats">

          <div className="col-6 col-lg-3">
            <div className="stat-card hover-card">
              <h3>15+</h3>
              <p>Technologies</p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="stat-card">
              <h3>4+</h3>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="stat-card">
              <h3>4</h3>
              <p>Development Areas</p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="stat-card">
              <h3>∞</h3>
              <p>Learning Mindset</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;