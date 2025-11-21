import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTrophy, FaMedal, FaCertificate, FaStar } from 'react-icons/fa'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const achievements = [
    {
      icon: FaTrophy,
      title: 'NPTEL Top 1% - AI: Concepts and Techniques',
      description: 'Ranked in the top 1% among nation-wide participants in Artificial Intelligence: Concepts and Techniques',
      date: '2025',
      color: '#FFD700',
      highlight: true,
    },
    {
      icon: FaTrophy,
      title: 'NPTEL Top 2% - DSA using Java',
      description: 'Ranked in the top 2% among nation-wide participants in Data Structures and Algorithms using Java',
      date: '2024',
      color: '#FFD700',
    },
    {
      icon: FaStar,
      title: 'NPTEL Top 5% - DBMS',
      description: 'Ranked in the top 5% among nation-wide participants in Database Management Systems',
      date: '2025',
      color: '#64FFDA',
    },
    {
      icon: FaMedal,
      title: 'Academic Excellence',
      description: 'Maintaining GPA of 8.73/10 at Vasavi College of Engineering, Hyderabad',
      date: '2023 - Present',
      color: '#C0C0C0',
    },
  ]

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div ref={ref} className="max-w-6xl w-full">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 bg-clip-text text-transparent">
            Achievements
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className={`glass glass-hover p-8 rounded-3xl relative overflow-hidden ${
                achievement.highlight ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-transparent' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {achievement.highlight && (
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-bold rounded-full border border-cyan-400"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  NEW
                </motion.div>
              )}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <achievement.icon className="w-full h-full" style={{ color: achievement.color }} />
              </div>

              <div className="relative z-10">
                <div className="mb-4">
                  <achievement.icon className="text-5xl" style={{ color: achievement.color }} />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">{achievement.title}</h3>
                <p className="text-gray-300 mb-3 leading-relaxed">{achievement.description}</p>
                <span className="text-cyan-400 font-mono text-sm">{achievement.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
