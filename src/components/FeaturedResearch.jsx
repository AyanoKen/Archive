import research from "../data/research"
import "../styles/home.css"

function FeaturedResearch() {
  const publication = research[0]

  return (
    <section className="home-section research-feature">
      <div className="section-heading">
        <p className="section-kicker">{publication.eyebrow}</p>
        <h2>{publication.title}</h2>
        <p className="section-copy">{publication.description}</p>
      </div>

      <article className="research-panel">
        <div className="research-panel__copy">
          <p className="research-panel__label">Abstract</p>
          {publication.abstract.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <a
            href={publication.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {publication.link.label}
          </a>
        </div>

        <aside className="research-panel__meta">
          <p className="research-panel__label">Focus Areas</p>
          <br />
          <ul>
            {publication.focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </aside>
      </article>
    </section>
  )
}

export default FeaturedResearch
