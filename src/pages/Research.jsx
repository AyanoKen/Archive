import research from "../data/research"
import "../styles/research.css"

function Research() {
  return (
    <main className="research-page">
      <section className="research-page__hero">
        <h1>My Research work</h1>
      </section>

      <div className="research-page__grid">
        {research.map((publication) => (
          <article key={publication.id} className="research-card">
            <p className="research-card__eyebrow">{publication.eyebrow}</p>
            <h2>{publication.title}</h2>
            <p className="research-card__description">{publication.description}</p>

            <div className="research-card__abstract">
              {publication.abstract.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="research-card__tags">
              {publication.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>

            <a
              href={publication.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {publication.link.label}
            </a>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Research
