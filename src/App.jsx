import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import Research from './components/Research'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import OceanBackground from './components/OceanBackground'
import MouseGlow from './components/MouseGlow'

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <MouseGlow />
      <OceanBackground />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Research />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}

export default App
