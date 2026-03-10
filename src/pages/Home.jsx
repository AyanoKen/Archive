import AboutPreview from "../components/AboutPreview"
import FeaturedProjects from "../components/FeaturedProjects"
import FeaturedResearch from "../components/FeaturedResearch"
import Hero from "../components/Hero"

function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <FeaturedResearch />
    </main>
  )
}

export default Home
