import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaReact, FaPython, FaJava, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiTensorflow, SiKubernetes } from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', icon: FaReact, color: '#61DAFB' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'PyTorch', icon: SiTensorflow, color: '#EE4C2C' },
      ],
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div ref={ref} className="max-w-6xl w-full">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass glass-hover p-8 rounded-3xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.5 }}
            >
              {/* Floating bubble effect on hover */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-400/5"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.08, duration: 0.4 }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <skill.icon className="text-4xl" style={{ color: skill.color }} />
                    </motion.div>
                    <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
