import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import OceanBackground from './components/OceanBackground'

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <OceanBackground />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}

export default App
