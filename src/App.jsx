import { HashRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Games from "./pages/Games"
import ProjectPage from "./pages/ProjectPage"
import Research from "./pages/Research"
import Writing from "./pages/Writing"
import About from "./pages/About"

function App() {
  return (
    <HashRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<ProjectPage />} />
        <Route path="/research" element={<Research />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />

    </HashRouter>
  )
}

export default App