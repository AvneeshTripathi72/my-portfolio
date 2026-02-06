import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-white/5 bg-bg">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-display font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              AKT
            </motion.a>
            <p className="text-textMuted text-sm">
              © 2026 Avneesh Kumar Tripathi
            </p>
          </div>

          <div className="flex gap-8 text-sm text-textMuted">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/AvneeshTripathi72"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-textMuted hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/avneeshtripathi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-textMuted hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:avneesh.tripathi.dev@gmail.com"
              className="p-2 text-textMuted hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
