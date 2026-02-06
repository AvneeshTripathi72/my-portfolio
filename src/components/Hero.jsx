import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail, Download, FileText } from 'lucide-react'

const Hero = () => {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 pt-24"
      style={{ backgroundColor: '#0b0f1a' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/80" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Avneesh Kumar Tripathi</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 font-medium mb-4"
            >
              Full Stack Developer |{' '}
              <span className="text-green-500">Java</span> •{' '}
              <span className="text-cyan-400">Spring Boot</span> •{' '}
              <span className="text-green-500">React</span> •{' '}
              <span className="text-cyan-400">MERN</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              I build scalable full-stack applications, cloud-ready systems, 
              and performance-optimized platforms with clean architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-green-500 text-black font-semibold rounded-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border border-green-500 text-green-500 font-semibold rounded-xl flex items-center gap-2 hover:bg-green-500/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="https://github.com/AvneeshTripathi72"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 hover:text-green-500 hover:border-green-500 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/avneeshtripathi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 hover:text-green-500 hover:border-green-500 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={22} />
              </motion.a>
              <motion.a
                href="mailto:avneesh.tripathi.dev@gmail.com"
                className="p-3 bg-gray-800 border border-gray-700 rounded-xl text-gray-300 hover:text-green-500 hover:border-green-500 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={22} />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md border border-gray-700 rounded-2xl overflow-hidden hover:border-green-500/50 transition-colors bg-gray-900/80 shadow-xl">
              <div className="bg-gray-800 relative overflow-hidden">
                <img 
                  src="/resume.png"
                  alt="Resume Preview"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-full aspect-[3/4] flex-col items-center justify-center text-gray-500 p-8 bg-gradient-to-br from-gray-800 to-gray-900">
                  <FileText size={80} className="mb-4 text-green-500/50" />
                  <p className="text-xl font-bold text-white">Resume</p>
                  <p className="text-sm text-gray-400 mt-1">Avneesh Kumar Tripathi</p>
                  <p className="text-xs text-gray-500 mt-2">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="p-4 bg-gray-900">
                <motion.a
                  href="/Avneesh_tripathi_resume.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-green-500 text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-green-400 transition-colors"
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
