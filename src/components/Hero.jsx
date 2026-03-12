import { Link } from "react-router-dom"

import "../styles/home.css"

function Hero() {
  return (
    <section className="hero">
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__nebula hero__nebula--one" aria-hidden="true" />
      <div className="hero__nebula hero__nebula--two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-kicker">Game Developer | Narrative Designer | Systems Thinker</p>
        <h1 className="hero-title">Architect of Interactive Worlds</h1>
        <p className="hero-lede">Turning design, code, and narrative into playable magic.</p>
        <p className="hero-subtitle">
          Building gameplay systems, AI-driven experiences, and immersive worlds
          with the rigor of an ex-SDET and the curiosity of a designer.
        </p>

        <div className="hero-buttons">
          <Link to="/games" className="btn btn-primary">
            View Games
          </Link>
          <Link to="/research" className="btn btn-secondary">
            Read Research
          </Link>
          <a
            href="https://drive.google.com/file/d/1lZXX3SjHQRvUI_6jLjqFnxAkSEn9CrZt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Resume
          </a>
        </div>

        <div className="hero-metrics">
          <article>
            <span>Systems</span>
            <p>Gameplay architecture, balancing, and multiplayer flow.</p>
          </article>
          <article>
            <span>Narrative</span>
            <p>Worldbuilding and emotional pacing shaped through mechanics.</p>
          </article>
          <article>
            <span>XR & AI</span>
            <p>VR interaction, adaptive systems, and research-backed experimentation.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hero
