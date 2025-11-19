import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const OceanBackground = () => {
  const { scrollYProgress } = useScroll()
  const [fish, setFish] = useState([])
  
  // Transform scroll to depth (beach → shallow → deep ocean)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ['#87CEEB', '#4A90A4', '#1e3a5f', '#0a192f']
  )
  
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6])

  // Initialize fish with random positions
  useEffect(() => {
    const initialFish = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 20 + Math.random() * 60,
      size: 20 + Math.random() * 30,
      speed: 15 + Math.random() * 10,
      direction: Math.random() > 0.5 ? 1 : -1,
    }))
    setFish(initialFish)
  }, [])

  const handleFishHover = (fishId) => {
    setFish(prevFish =>
      prevFish.map(f =>
        f.id === fishId
          ? {
              ...f,
              x: Math.random() * 100,
              y: 20 + Math.random() * 60,
              direction: f.direction * -1,
            }
          : f
      )
    )
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic background that changes with scroll */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#0a192f]/60" />
      
      {/* Depth overlay - gets darker as you scroll */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/40 to-[#0a192f]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Soft ambient light from surface */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(100, 255, 218, 0.3) 0%, transparent 50%)',
        }}
        animate={{
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Natural light rays - wider and more diffused */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute top-0 h-full opacity-5"
          style={{
            left: `${15 + i * 30}%`,
            width: '200px',
            background: 'linear-gradient(180deg, rgba(100, 255, 218, 0.2) 0%, rgba(100, 255, 218, 0.05) 40%, transparent 70%)',
            transform: 'skewX(-5deg)',
            filter: 'blur(40px)',
          }}
          animate={{
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 10 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}

      {/* Bubbles floating up */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full border border-cyan-400/30 bg-cyan-400/5"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-5%',
            width: `${8 + Math.random() * 20}px`,
            height: `${8 + Math.random() * 20}px`,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: 'linear',
          }}
        />
      ))}

      {/* Elegant fish silhouettes */}
      {fish.map((f) => (
        <motion.div
          key={f.id}
          className="absolute cursor-pointer"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
          }}
          animate={{
            x: [0, f.direction * 100, 0],
            y: [0, Math.sin(f.id) * 20, 0],
          }}
          transition={{
            duration: f.speed,
            repeat: Infinity,
            ease: 'linear',
          }}
          onHoverStart={() => handleFishHover(f.id)}
          whileHover={{ scale: 1.2 }}
        >
          <svg
            width={f.size}
            height={f.size * 0.5}
            viewBox="0 0 40 20"
            style={{
              transform: f.direction === 1 ? 'scaleX(1)' : 'scaleX(-1)',
              filter: 'drop-shadow(0 0 8px rgba(100, 255, 218, 0.3))',
            }}
          >
            <path
              d="M5,10 Q15,5 25,10 Q15,15 5,10 M25,10 L35,7 L35,13 Z M8,10 Q8,8 10,8"
              fill="rgba(100, 255, 218, 0.15)"
              stroke="rgba(100, 255, 218, 0.4)"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      ))}

      {/* Jellyfish silhouettes (deeper sections) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`jelly-${i}`}
          className="absolute"
          style={{
            left: `${30 + i * 25}%`,
            top: `${40 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.5,
          }}
        >
          <svg width="40" height="60" viewBox="0 0 40 60">
            <ellipse
              cx="20"
              cy="15"
              rx="15"
              ry="12"
              fill="rgba(100, 255, 218, 0.08)"
              stroke="rgba(100, 255, 218, 0.2)"
              strokeWidth="0.5"
            />
            {[...Array(6)].map((_, j) => (
              <motion.path
                key={j}
                d={`M${12 + j * 3},25 Q${12 + j * 3},35 ${10 + j * 3},45`}
                stroke="rgba(100, 255, 218, 0.15)"
                strokeWidth="1"
                fill="none"
                animate={{
                  d: [
                    `M${12 + j * 3},25 Q${12 + j * 3},35 ${10 + j * 3},45`,
                    `M${12 + j * 3},25 Q${14 + j * 3},35 ${12 + j * 3},45`,
                    `M${12 + j * 3},25 Q${12 + j * 3},35 ${10 + j * 3},45`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: j * 0.1,
                }}
              />
            ))}
          </svg>
        </motion.div>
      ))}

      {/* Subtle particles/plankton */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default OceanBackground
