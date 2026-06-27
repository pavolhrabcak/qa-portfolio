import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import FeaturedCaseStudy from './components/FeaturedCaseStudy'
import HowIWork from './components/HowIWork'
import PersonalProjects from './components/PersonalProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollNav from './components/ScrollNav'
import GlobalParticles from './components/GlobalParticles'
import CVPage from './pages/CVPage'

function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <GlobalParticles />
      <Navbar />
      <Hero />
      <About />
      <HowIWork />
      <Skills />
      <FeaturedCaseStudy />
      <Experience />
      <PersonalProjects />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ScrollNav />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/cv" element={<CVPage />} />
    </Routes>
  )
}
