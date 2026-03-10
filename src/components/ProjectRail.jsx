import ProjectCard from "./ProjectCard"
import "../styles/featured.css"

function ProjectRail({
  projects,
  ariaLabel = "Project rail",
  cardClassName = "",
}) {
  return (
    <div className="project-rail" aria-label={ariaLabel}>
      <div className="project-track">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="project-track__group"
            aria-hidden={groupIndex === 1}
          >
            {projects.map((project) => (
              <ProjectCard
                key={`${project.id}-${groupIndex}`}
                className={["project-rail__card", cardClassName].filter(Boolean).join(" ")}
                {...project}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectRail
