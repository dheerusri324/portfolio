import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Text Emotion Classifier | NLP & Deep Learning',
      description: 'Built a Deep Learning NLP model to detect emotions in text using TensorFlow and Keras. Addressed dataset imbalance using Random Oversampling techniques and implemented a real-time command-line interface for instant predictions.',
      tech: ['Python', 'TensorFlow', 'Keras', 'NLP', 'Machine Learning'],
      github: 'https://github.com/dheerusri324/TextEmotionClassifier',
      live: null,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'SmartWaste360 - AI Waste Management Platform',
      description: 'Full-stack AI-powered waste management platform with 70-90% accuracy through image recognition. Integrated Google Gemini AI for real-time waste classification. Features interactive mapping with Leaflet for route optimization, RESTful APIs with Flask and PostgreSQL, and deployed on Vercel and Render with CI/CD automation.',
      tech: ['React.js', 'Flask', 'PostgreSQL', 'Gemini API', 'Leaflet', 'Tailwind CSS'],
      github: 'https://github.com/dheerusri324',
      live: 'https://smartwaste360-frontend.vercel.app/',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'System Anomaly Monitor',
      description: 'AI-powered real-time system monitoring application that detects unusual CPU, memory, disk, and network activity using Machine Learning (Isolation Forest) and statistical anomaly detection. Features a JavaFX dashboard connected to a Python backend via socket programming, displaying live metrics and anomaly alerts.',
      tech: ['Python', 'Java', 'JavaFX', 'ML', 'Socket Programming'],
      github: 'https://github.com/dheerusri324/SystemAnomalyMonitor',
      live: null,
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'CareConnect - Healthcare Management System',
      description: 'Full-stack healthcare platform that streamlines doctor-patient interactions. Enables patients to browse specialists, book appointments, and leave reviews. Features secure role-based authentication using JWT & Bcrypt, end-to-end scheduling with status tracking, and responsive design with Framer Motion & GSAP animations.',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
      github: 'https://github.com/dheerusri324/CareConnect',
      live: null,
      gradient: 'from-blue-500 to-teal-500',
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div ref={ref} className="max-w-6xl w-full">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass glass-hover p-8 rounded-3xl relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Ripple effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(100, 255, 218, 0.1) 0%, transparent 70%)',
                }}
              />
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <motion.h3
                    className={`text-3xl font-bold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-mono"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 0.2)' }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full transition-all"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-xl" />
                      <span>Code</span>
                    </motion.a>
                    
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 rounded-full transition-all"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
