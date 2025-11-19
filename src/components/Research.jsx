import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaFlask, FaMicrochip } from 'react-icons/fa'

const Research = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const researchWork = [
    {
      icon: FaMicrochip,
      title: 'Debugging & Deployment of Samsung\'s "Tiny Recursive Model" (TRM)',
      organization: 'Samsung Research',
      description: 'What started as a simple goal — getting Samsung\'s Tiny Recursive Model (TRM) running — quickly turned into a full-scale debugging adventure. After moving the project into a WSL (Ubuntu) environment to fix Windows incompatibility, I manually patched C++/CUDA build errors (adam_atan2) and resolved multiple broken dependencies. Later, I uncovered deeper logic flaws in the evaluation scripts and confirmed that my 6 GB GPU simply couldn\'t handle the model\'s recursive architecture. This project taught me how complex AI research code really is under the hood — and how much you can learn by fixing what\'s broken rather than just running what works.',
      tech: ['PyTorch', 'CUDA', 'WSL', 'C++'],
      github: 'https://www.linkedin.com/posts/bala-dheeraj-chennavaram-886616299_what-started-as-a-weekend-project-turned-activity-7392438379767853056-gq66?utm_source=share&utm_medium=member_desktop',
      date: 'Nov 2025',
      color: '#1428A0',
    },
  ]

  return (
    <section id="research" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div ref={ref} className="max-w-6xl w-full">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 bg-clip-text text-transparent">
            Technical Research
          </span>
        </motion.h2>

        <div className="space-y-6">
          {researchWork.map((research, index) => (
            <motion.div
              key={research.title}
              className="glass glass-hover p-8 rounded-3xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <research.icon className="w-full h-full" style={{ color: research.color }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-white/5">
                    <research.icon className="text-4xl" style={{ color: research.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1 text-white">{research.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{research.organization}</p>
                    <span className="text-gray-400 text-sm font-mono">{research.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{research.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {research.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {research.github && (
                  <a
                    href={research.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full transition-all text-gray-300 hover:text-cyan-400"
                  >
                    <FaFlask className="text-lg" />
                    <span>Read Full Story on LinkedIn</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research
