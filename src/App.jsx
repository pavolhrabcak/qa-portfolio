import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import FeaturedCaseStudy from './components/FeaturedCaseStudy'
import HowIWork from './components/HowIWork'
import Training from './components/Training'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <Hero />
      <About />
      <HowIWork />
      <Skills />
      <Experience />
      <FeaturedCaseStudy />
      <Training />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
