import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C/C++', 'SQL'],
    color: 'primary'
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Material UI', 'Monaco Editor', 'HTML/CSS'],
    color: 'accent'
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Microservices'],
    color: 'primary'
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma ORM', 'Mongoose'],
    color: 'accent'
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'AWS (EC2, S3, RDS)', 'Nginx', 'GitHub Actions', 'CI/CD'],
    color: 'primary'
  },
  {
    title: 'CS Fundamentals',
    skills: ['DSA', 'OOP', 'LLD', 'System Design', 'DBMS', 'Operating Systems'],
    color: 'accent'
  }
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 px-4 relative bg-bg">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <h3 className={`text-lg font-semibold mb-4 ${
                category.color === 'primary' ? 'text-primary' : 'text-accent'
              }`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
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

