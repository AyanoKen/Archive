import { Link } from "react-router-dom"

import "../styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="nav-logo">
          <Link to="/">Kireet / Ayano</Link>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/games">Games</Link>
          <Link to="/research">Research</Link>
          <Link to="/writing">Literature</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
