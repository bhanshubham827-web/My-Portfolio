import "../CSS/Education.css";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
  description: string;
  icon: string;
}

const educations: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "R.K.S.D College, Kaithal",
    startYear: 2023,
    endYear: 2026,
    description:
      "Studying computer applications with a focus on programming, web development, databases and software development.",
    icon: "bi-mortarboard",
  },
  // {
  //   id: 2,
  //   degree: "12th",
  //   institution: "GSS School, Kaithal",
  //   startYear: 2022,
  //   endYear: 2022,
  //   description:
  //     "Completed higher secondary education and developed an interest in computer science and technology.",
  //   icon: "bi-book",
  // },
  // {
  //   id: 3,
  //   degree: "10th",
  //   institution: "GSS School, Kaithal",
  //   startYear: 2020,
  //   endYear: 2020,
  //   description:
  //     "Completed secondary education and built the foundation for further academic learning.",
  //   icon: "bi-journal-bookmark",
  // },
];

function Education() {
  return (
    <section className="education-page">

      <div className="container">

        {/* HERO */}

        <div className="education-hero">

          <div className="row align-items-center g-5">

            <div className="col-lg-7">

              <span className="education-badge">
                <i className="bi bi-mortarboard me-2"></i>
                Education
              </span>

              <h1 className="education-title mt-3">
                My Academic
                <span> Journey</span>
              </h1>

              <p className="education-description">
                My academic journey has given me a strong foundation
                in computer applications, programming and software
                development.
              </p>

              <div className="education-highlights">

                <div>
                  <i className="bi bi-check-circle-fill"></i>
                  Computer Applications
                </div>

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
                  Database Management
                </div>

              </div>

            </div>


            <div className="col-lg-5">

              <div className="education-visual">

                <div className="education-cap">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>

                <div className="education-circle circle-one"></div>
                <div className="education-circle circle-two"></div>

                <div className="education-floating float-one">
                  <i className="bi bi-code-slash"></i>
                </div>

                <div className="education-floating float-two">
                  <i className="bi bi-database"></i>
                </div>

                <div className="education-floating float-three">
                  <i className="bi bi-laptop"></i>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* EDUCATION TIMELINE */}

        <div className="education-section">

          <div className="section-heading text-center">

            <span>ACADEMIC BACKGROUND</span>

            <h2>
              Education That Built My <strong>Foundation</strong>
            </h2>

            <p>
              From school education to computer applications,
              each stage has contributed to my technical growth.
            </p>

          </div>


          <div className="education-timeline">

            {educations.map((education, index) => (

              <div
                className="education-item"
                key={education.id}
              >

                <div className="education-year">

                  <span>
                    {education.startYear}
                  </span>

                  {education.endYear !== education.startYear && (
                    <>
                      <i className="bi bi-arrow-right"></i>
                      <span>{education.endYear}</span>
                    </>
                  )}

                </div>


                <div className="education-dot">

                  <i className={`bi ${education.icon}`}></i>

                </div>


                <div className="education-card hover-card">

                  <span className="education-number">
                    0{index + 1}
                  </span>

                  <h3>
                    {education.degree}
                  </h3>

                  <h4>
                    <i className="bi bi-building me-2"></i>
                    {education.institution}
                  </h4>

                  <p>
                    {education.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* LEARNING SECTION */}

        <div className="education-learning">

          <div className="learning-icon">
            <i className="bi bi-lightbulb"></i>
          </div>

          <div className="learning-content">

            <span>BEYOND THE CLASSROOM</span>

            <h2>
              Learning by Building
            </h2>

            <p>
              Along with academic studies, I have been developing
              practical projects and learning technologies such as
              ASP.NET Core, SQL Server, React, TypeScript and APIs.
            </p>

          </div>

        </div>


        {/* EDUCATION STATS */}

        <div className="row g-4 education-stats">

          <div className="col-6 col-lg-3">
            <div className="education-stat-card">
              <i className="bi bi-mortarboard"></i>
              <h3>1</h3>
              <p>BCA Degree</p>
            </div>
          </div>

          {/* <div className="col-6 col-lg-3">
            <div className="education-stat-card">
              <i className="bi bi-book"></i>
              <h3>12th</h3>
              <p>Higher Secondary</p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="education-stat-card">
              <i className="bi bi-journal"></i>
              <h3>10th</h3>
              <p>Secondary</p>
            </div>
          </div> */}

          <div className="col-6 col-lg-3">
            <div className="education-stat-card">
              <i className="bi bi-code-slash"></i>
              <h3>∞</h3>
              <p>Learning</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;