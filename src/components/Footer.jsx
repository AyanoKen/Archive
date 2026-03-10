import "../styles/footer.css"

function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__eyebrow">Kireet Gannavarapu</p>
          <h2>Interactive worlds built with systems thinking.</h2>
          <p className="site-footer__copy">
            Game development, research, XR experimentation, and narrative design
            shaped through technical rigor.
          </p>
        </div>

        <div className="site-footer__links">
          <a
            href="https://github.com/AyanoKen"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kireet-gannavarapu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:ayanoken64@gmail.com">ayanoken64@gmail.com</a>
        </div>
      </div>

      <p className="site-footer__copyright">
        &copy; 2026 Kireet Gannavarapu. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
