import { Link } from "react-router-dom"

import "../styles/project-card.css"

function ProjectCard({
  id,
  eyebrow,
  title,
  description,
  thumbnail,
  thumbnailAlt,
  detailPath,
  className = "",
}) {
  const path = detailPath ?? (id ? `/games/${id}` : "/games")
  const cardClassName = ["project-card", className].filter(Boolean).join(" ")

  return (
    <Link
      to={path}
      className={cardClassName}
      aria-label={`View details for ${title}`}
    >
      <div className="project-card__media">
        {thumbnail ? (
          <img
            className="project-card__image"
            src={thumbnail}
            alt={thumbnailAlt ?? `${title} thumbnail`}
            loading="lazy"
          />
        ) : (
          <div
            className="project-card__image project-card__image--placeholder"
            aria-hidden="true"
          >
            <span>Open Project</span>
          </div>
        )}
      </div>

      <div className="project-card__content">
        {eyebrow ? <p className="project-card__eyebrow">{eyebrow}</p> : null}
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <span className="project-card__cta">Open project</span>
      </div>
    </Link>
  )
}

export default ProjectCard
