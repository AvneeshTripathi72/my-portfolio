import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'Code Verse – Online Coding Platform',
    description: 'A full-stack coding platform with 50+ DSA problems, live contests, multi-language execution, Redis caching, and AI-powered code suggestions. Improved API response time by 65%.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Judge0 API', 'Socket.io'],
    github: 'https://github.com/AvneeshTripathi72/coding_Platform',
    live: null,
    image: '/codingplatform.png',
    featured: true
  },
  {
    title: 'Portfolio Manager – SaaS Platform',
    description: 'A comprehensive portfolio management application built with Next.js 15. Features custom profile creation, resume & link management, analytics dashboard, and secure Clerk authentication.',
    tech: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Clerk', 'Shadcn/ui'],
    github: 'https://github.com/AvneeshTripathi72/Portfolio_Manager',
    live: 'https://dashboard.avanishtripathi.me/',
    image: '/portfoliomanger.png',
    featured: true
  },
  {
    title: 'Movie Booking System',
    description: 'Interactive movie ticket booking application with seat selection, showtime management, and secure payment processing.',
    tech: ['React', 'Express.js', 'PostgreSQL', 'Node.js', 'JWT'],
    github: 'https://github.com/AvneeshTripathi72/movie_System',
    live: 'https://movietickets.avanishtripathi.me/',
    image: '/moie.png',
    featured: true
  },
  {
    title: 'Notes Manager',
    description: 'A modern notes management application with rich text editing, organization features, and cloud sync capabilities.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    github: 'https://github.com/AvneeshTripathi72/notes_manager',
    live: 'https://notes-manager-beta.vercel.app/',
    image: '/notesmanager.png',
    featured: false
  },
  {
    title: 'Drive – Cloud Storage System',
    description: 'Secure cloud file management system supporting 100MB uploads, role-based access, file versioning, and optimized database queries reducing execution time by 40%.',
    tech: ['Spring Boot', 'PostgreSQL', 'AWS S3', 'JWT', 'REST API'],
    github: 'https://github.com/AvneeshTripathi72/drive',
    live: null,
    image: null,
    featured: false
  },
  {
    title: 'RAG-Powered Chatbot',
    description: 'AI-powered chatbot using Retrieval-Augmented Generation with Google Gemini for context-aware responses and document Q&A.',
    tech: ['Python', 'FastAPI', 'React', 'LangChain', 'ChromaDB'],
    github: 'https://github.com/AvneeshTripathi72/rag-powered-chatbot_0',
    live: null,
    image: '/rag.png',
    featured: false
  }
]

const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border border-gray-700 rounded-2xl overflow-hidden group hover:border-green-500/50 transition-all duration-300 bg-gray-900/50"
    >
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        {project.image && !imgError ? (
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: isHovered ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl opacity-30"
            >
              {project.title.includes('Code') ? '💻' : 
               project.title.includes('Drive') ? '☁️' : 
               project.title.includes('Portfolio') ? '🎨' : 
               project.title.includes('Chatbot') ? '🤖' : 
               project.title.includes('Notes') ? '📝' : '🎬'}
            </motion.div>
          </div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gray-800 border border-gray-600 rounded-xl text-white hover:text-green-500 hover:border-green-500 transition"
          >
            <Github size={22} />
          </motion.a>
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-800 border border-gray-600 rounded-xl text-white hover:text-green-500 hover:border-green-500 transition"
            >
              <ExternalLink size={22} />
            </motion.a>
          )}
        </motion.div>
        
        {project.featured && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-lg">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded-lg border border-gray-700"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 text-xs text-green-500">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-green-500 transition-colors"
          >
            <Github size={16} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-green-500 transition-colors"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showAll, setShowAll] = useState(false)

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 px-4" style={{ backgroundColor: '#0b0f1a' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-green-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A showcase of my recent work and side projects that demonstrate my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-green-500 text-green-500 rounded-xl font-medium hover:bg-green-500/10 transition-colors"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight
                size={18}
                className={`transition-transform duration-300 ${
                  showAll ? 'rotate-90' : ''
                }`}
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
