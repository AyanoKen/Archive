import ProjectRail from "../components/ProjectRail"
import projects from "../data/projects"
import "../styles/games.css"

const gameSections = [
  { key: "2d", title: "2D Games" },
  { key: "3d", title: "3D Games" },
  { key: "xr", title: "XR Games" },
]

function Games() {
  return (
    <main className="games-page">
      {gameSections.map((section) => (
        <section key={section.key} className="games-section">
          <h2 className="games-section__title">{section.title}</h2>
          <ProjectRail
            projects={projects.filter((project) => project.category === section.key)}
            ariaLabel={`${section.title} marquee`}
            cardClassName="games-section__card"
          />
        </section>
      ))}
    </main>
  )
}

export default Games
