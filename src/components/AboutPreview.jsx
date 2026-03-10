import "../styles/home.css"

const experiences = [
  {
    years: "2026 - Present",
    role: "Senior Software Consultant",
    company: "Heartland Community Network",
    location: "Remote",
    summary:
      "Developed full-stack web applications with React, Node.js, and MongoDB, delivering client-facing platforms that improved user engagement",
  },
  {
    years: "2024 - 2024",
    role: "Lead Application Developer",
    company: "Purdue University",
    location: "West Lafayette, IN",
    summary:
      "Designed and deployed a multi-tier Alternate Reality Game using Node.js, Docker containers, and MongoDB for data persistence, enabling the team to launch the service on schedule",
  },
  {
    years: "2021 - 2023",
    role: "Associate Engineer - SDET",
    company: "Commvault",
    location: "India",
    summary:
      "Automated 40+ test workflows, reducing weekly regression execution time to around 6 hours and improving overall test efficiency.",
  },
]

function AboutPreview() {
  return (
    <section className="home-section about-preview">
      <div className="section-heading">
        <h2>Exp Obtained</h2>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article key={experience.role} className="experience-list__item">
            <div className="experience-list__meta">
              <p className="experience-list__years">{experience.years}</p>
              <p className="experience-list__company">{experience.company}</p>
              <p className="experience-list__location">{experience.location}</p>
            </div>

            <div className="experience-list__body">
              <h3>{experience.role}</h3>
              <p>{experience.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutPreview
