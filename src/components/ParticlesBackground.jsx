import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const generateParticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    color: Math.random() > 0.5 ? '#00ff7f' : '#ff4d88'
  }))
}

const ParticlesBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setParticles(generateParticles(30))
  }, [])

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            y: ['0%', '-100%'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default ParticlesBackground
