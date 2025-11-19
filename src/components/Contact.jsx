/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDiscord } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/dheerusri324',
      color: '#333',
      username: '@dheerusri324',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/bala-dheeraj-chennavaram-886616299',
      color: '#0077B5',
      username: 'Bala Dheeraj Chennavaram',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:121012dheeraj@gmail.com',
      color: '#EA4335',
      username: '121012dheeraj@gmail.com',
    },
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div ref={ref} className="max-w-4xl w-full">
        <motion.h2
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover p-6 rounded-2xl flex items-center gap-4 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-4 rounded-xl bg-white/5">
                <social.icon className="text-3xl" style={{ color: social.color }} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">{social.name}</h3>
                <p className="text-gray-400 text-sm font-mono">{social.username}</p>
              </div>

              <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center glass p-8 rounded-3xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-gray-400 mb-4">
            💡 Currently open to opportunities
          </p>
          <p className="text-sm text-gray-500 font-mono">
            Built with React + Vite + Framer Motion + Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
