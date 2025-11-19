import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-4xl text-center">
        <div className="mb-6">
          <span className="text-cyan-400 font-mono text-lg">Hi, my name is</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
          Bala Dheeraj Chennavaram
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-gray-300 mb-6">
          Always Exploring New Technologies
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Motivated Computer Science student with strong exposure to AI and machine learning. 
          Building intelligent systems and applying end-to-end engineering practices with a continuous learning mindset.
        </p>

        <div className="flex gap-6 justify-center mb-12">
          {[
            { icon: FaGithub, href: 'https://github.com/dheerusri324', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/bala-dheeraj-chennavaram-886616299', label: 'LinkedIn' },
            { icon: FaEnvelope, href: 'mailto:121012dheeraj@gmail.com', label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-4 rounded-full inline-block transform transition-transform hover:scale-110"
              style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <social.icon className="text-2xl text-cyan-400" />
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="inline-block glass glass-hover px-8 py-4 rounded-full text-cyan-400 font-semibold transform transition-transform hover:scale-105"
          style={{ 
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
        >
          Dive Deeper
        </a>
      </div>

      {/* Scroll indicator - positioned at bottom of section */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
