import { useState } from "react"

import novels from "../data/novels"
import "../styles/writing.css"

function Writing() {
  const [activeNovelId, setActiveNovelId] = useState(novels[0].id)
  const [activeChapterIndex, setActiveChapterIndex] = useState(0)

  const activeNovel =
    novels.find((novel) => novel.id === activeNovelId) ?? novels[0]
  const activeChapter = activeNovel.chapters[activeChapterIndex] ?? activeNovel.chapters[0]

  const handleNovelChange = (novelId) => {
    setActiveNovelId(novelId)
    setActiveChapterIndex(0)
  }

  return (
    <main className={`writing-page writing-page--${activeNovel.theme}`}>
      <div
        className="writing-page__backdrop"
        style={{ backgroundImage: `url(${activeNovel.background})` }}
        aria-hidden="true"
      />
      <div className="writing-page__overlay" aria-hidden="true" />

      <div className="writing-page__layout">
        <aside className="writing-page__rail" aria-label="Novel selector">
          <p className="writing-page__eyebrow">Literature</p>

          <div className="writing-page__tabs">
            {novels.map((novel) => (
              <button
                key={novel.id}
                type="button"
                className={`writing-page__tab${
                  novel.id === activeNovel.id ? " writing-page__tab--active" : ""
                }`}
                onClick={() => handleNovelChange(novel.id)}
                aria-pressed={novel.id === activeNovel.id}
              >
                <span className="writing-page__tab-title">{novel.tabLabel}</span>
                <span className="writing-page__tab-subtitle">{novel.subtitle}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="writing-page__content">
          <section className="writing-page__hero">
            <div className="writing-page__hero-copy">
              <p className="writing-page__eyebrow">Literature</p>
              <h1>{activeNovel.title}</h1>
              <p className="writing-page__subtitle">{activeNovel.subtitle}</p>
              <p className="writing-page__blurb">{activeNovel.blurb}</p>
            </div>

            <div className="writing-page__cover-shell">
              <img
                className="writing-page__cover"
                src={activeNovel.cover}
                alt={`${activeNovel.title} cover art`}
              />
            </div>
          </section>

          <section className="writing-reader">
            <div className="writing-reader__toolbar">
              <div className="writing-reader__toolbar-copy">
              </div>

              <a
                className="btn btn-secondary"
                href={activeChapter.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Chapter
              </a>
            </div>

            <div className="writing-reader__pagination" aria-label="Chapter navigation">
              {activeNovel.chapters.map((chapter, index) => (
                <button
                  key={chapter.url}
                  type="button"
                  className={`writing-reader__chapter${
                    index === activeChapterIndex
                      ? " writing-reader__chapter--active"
                      : ""
                  }`}
                  onClick={() => setActiveChapterIndex(index)}
                  aria-current={index === activeChapterIndex ? "page" : undefined}
                >
                  {chapter.title}
                </button>
              ))}
            </div>

            <div className="writing-reader__frame-shell">
              <iframe
                key={`${activeNovel.id}-${activeChapterIndex}`}
                className="writing-reader__frame"
                src={activeChapter.url}
                title={`${activeNovel.title} ${activeChapter.title}`}
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Writing
