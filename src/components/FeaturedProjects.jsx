import { Link } from "react-router-dom"

import ProjectRail from "./ProjectRail"
import projects from "../data/projects"

function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured)

  return (
    <section className="featured-home">
      <div className="section-heading featured-home__intro">
        <br />
        <br />
        <br />
        <h2>Current Featured Projects</h2>
      </div>

      <ProjectRail
        projects={featured}
        ariaLabel="Featured games marquee"
        cardClassName="featured-card"
      />

      <div className="featured-home__action">
        <Link to="/games" className="btn btn-primary">
          Check out more of my games
        </Link>
      </div>
    </section>
  )
}

export default FeaturedProjects
