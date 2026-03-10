import { useState } from "react"
import { Link, useParams } from "react-router-dom"

import projects from "../data/projects"
import "../styles/project-page.css"

function ProjectPage() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)
  const project = projects.find((entry) => entry.id === id)

  if (!project) {
    return (
      <main className="project-page project-page--missing">
        <p className="project-page__eyebrow">Project Not Found</p>
        <h1>This route does not match a project yet.</h1>
        <Link className="project-page__back-link" to="/games">
          Return to projects
        </Link>
      </main>
    )
  }

  return (
    <main className="project-page">
      <Link className="project-page__back-link" to="/games">
        Back to projects
      </Link>

      <section className="project-page__masthead">
        <p className="project-page__eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p className="project-page__summary">{project.summary}</p>

        <div className="project-page__meta-strip">
          <article>
            <span>Role</span>
            <p>{project.role}</p>
          </article>
          <article>
            <span>Team</span>
            <p>{project.teamSize}</p>
          </article>
          <article>
            <span>Duration</span>
            <p>{project.duration}</p>
          </article>
        </div>
      </section>

      <section className="project-page__feature">
        <div className="project-page__media-shell">
          <iframe
            className="project-page__video"
            src={project.videoEmbed}
            title={`${project.title} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <aside className="project-page__side-panel">
          <h2>Highlights</h2>
          <ul className="project-page__highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="project-page__links">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section className="project-page__story">
        <div className="project-page__overview">
          <h2>Overview</h2>
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="project-page__stack-block">
          <h2>Focus</h2>
          <ul className="project-page__stack">
            {project.techStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="project-page__gallery-section">
        <div className="project-page__section-header">
          <p className="project-page__eyebrow">Gallery</p>
          <h2>Visual snapshots from the build.</h2>
        </div>

        <div className="project-page__gallery">
          {project.gallery.map((imageSrc, index) => (
            <button
              key={imageSrc}
              type="button"
              className="project-page__gallery-item"
              onClick={() => setSelectedImage(imageSrc)}
              aria-label={`Expand screenshot ${index + 1} for ${project.title}`}
            >
              <img
                src={imageSrc}
                alt={`${project.title} screenshot ${index + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      {selectedImage ? (
        <button
          type="button"
          className="project-page__lightbox"
          onClick={() => setSelectedImage(null)}
          aria-label="Close expanded screenshot"
        >
          <img
            className="project-page__lightbox-image"
            src={selectedImage}
            alt={`Expanded view of ${project.title}`}
          />
        </button>
      ) : null}
    </main>
  )
}

export default ProjectPage
