/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        ref={ref}
        className="max-w-4xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <motion.div 
          className="glass glass-hover p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a Computer Science Engineering student at Vasavi College of Engineering, Hyderabad, 
            with a strong passion for AI and machine learning. My journey has been driven by curiosity 
            and a continuous learning mindset, always exploring new technologies and their applications.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I specialize in developing intelligent systems and applying end-to-end engineering practices. 
            From building AI-powered waste management platforms to real-time system monitoring tools, 
            I focus on creating practical, reliable, and impactful technology solutions.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            With experience in both frontend and backend integration, I enjoy tackling complex problems 
            and turning ideas into reality. Currently pursuing my B.E. in Computer Science with a GPA of 8.73/10, 
            I'm always eager to learn and contribute to innovative projects.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
