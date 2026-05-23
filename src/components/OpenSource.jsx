import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaCodeBranch } from 'react-icons/fa'

const OpenSource = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const contributions = [
    {
      title: 'python-visualization/folium',
      role: 'Open Source Contributor',
      pr: 'PR #2211',
      link: 'https://github.com/python-visualization/folium/pull/2211',
      date: '2025',
      points: [
        'Enabled runtime hex-color support for map markers, resolving ValueError crashes caused by rigid color validation',
        'Engineered a cross-stack workaround using Python backend validation and runtime CSS injection via Jinja2 templating',
        'Bypassed third-party CDN constraints without modifying external dependencies'
      ],
      tech: ['Python', 'Jinja2', 'CSS', 'Open Source']
    }
  ]

  return (
    <section id="opensource" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div ref={ref} className="max-w-4xl w-full">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 bg-clip-text text-transparent">
            Open Source
          </span>
        </motion.h2>

        <div className="space-y-8">
          {contributions.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass glass-hover p-8 rounded-3xl relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                <FaCodeBranch className="w-full h-full text-cyan-400" />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="text-xl text-cyan-400 font-semibold mb-2">
                      {item.role} <span className="text-gray-400">|</span> {item.pr}
                    </div>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-mono text-cyan-300 border border-cyan-400/30">
                      {item.date}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-cyan-400 mr-3 mt-1">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white max-w-fit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-xl" />
                    <span>View Pull Request</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenSource
