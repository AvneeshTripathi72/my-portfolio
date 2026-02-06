import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Code2, Calendar } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 px-4" style={{ backgroundColor: '#0b0f1a' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-green-500">Me</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-green-500/30 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 border-2 border-green-500/20 rounded-2xl transform -rotate-3" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-white/10">
                <img 
                  src="/avneesh.png"
                  alt="Avneesh Kumar Tripathi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a <span className="text-green-500 font-medium">Computer Science Engineering</span> undergraduate 
              at <span className="text-white font-medium">KIET Group of Institutions</span>, 
              graduating in <span className="text-green-500 font-medium">2027</span>.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              I have a strong foundation in full-stack development, data structures, 
              and system design. I've solved <span className="text-green-500 font-medium">1480+ algorithmic problems</span> across 
              platforms and built production-ready applications.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-green-500" />
                <span>Ghaziabad, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <GraduationCap size={18} className="text-green-500" />
                <span>B.Tech CSE, KIET (2023-2027)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Code2 size={18} className="text-green-500" />
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Calendar size={18} className="text-green-500" />
                <span>Available for Internships</span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-white font-semibold mb-3">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm border border-white/10 rounded-lg text-gray-400 hover:border-green-500/50 hover:text-green-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
