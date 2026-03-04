import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useRef, useState } from 'react'

const codingPlatforms = [
  {
    name: 'LeetCode',
    screenshot: '/leetcode.png',
    rating: '1785',
    problems: '500+',
    link: 'https://leetcode.com/u/AvneeshTripathi/',
    details: 'Max Rating • Top 10% globally'
  },
  {
    name: 'Codeforces',
    screenshot: '/codeforce.png',
    rating: '1235',
    problems: '300+',
    link: 'https://codeforces.com/profile/A7B9CDM3',
    details: 'Max Rating • Pupil'
  },
  {
    name: 'CodeChef',
    screenshot: '/codechef.png',
    rating: '1527',
    problems: '200+',
    link: 'https://www.codechef.com/users/avanishtripath',
    details: '2★ Rating • Active Contestant'
  },
  {
    name: 'GeeksforGeeks',
    screenshot: '/gfg.png',
    problems: '400+',
    link: 'https://www.geeksforgeeks.org/profile/avanishtripathiab54x?tab=activity',
    details: 'Institute Rank Top 10'
  },
  {
    name: 'Codolio',
    screenshot: '/codolio.png',
    rating: 'Active',
    problems: '1480+',
    link: 'https://codolio.com/profile/A7B9CDM3',
    details: 'All Platforms Combined'
  }
]

const PlatformCard = ({ platform, index, isInView }) => {
  const [imgError, setImgError] = useState(false)
  
  return (
    <motion.a
      href={platform.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      whileHover={{ y: -5 }}
      className="block border border-white/10 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300 group"
    >
      {/* Screenshot */}
      <div className="relative aspect-video bg-gray-900 overflow-hidden">
        {!imgError ? (
          <img 
            src={platform.screenshot}
            alt={`${platform.name} Profile`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <span className="text-3xl font-bold text-green-500/50">{platform.name}</span>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white flex items-center gap-2 font-medium">
            View Profile <ExternalLink size={16} />
          </span>
        </div>
      </div>
      
      {/* Info */}
      <div className="p-4 bg-gray-900/50">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-white group-hover:text-green-500 transition-colors">
            {platform.name}
          </h4>
          <span className="text-green-500 font-bold">{platform.rating}</span>
        </div>
        <p className="text-gray-400 text-sm">{platform.details}</p>
        <p className="text-gray-500 text-xs mt-1">{platform.problems} problems solved</p>
      </div>
    </motion.a>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Cloud Engineer Intern',
      company: 'Atom Pluton Technology',
      period: 'Feb 2025 — Present',
      location: 'Remote',
      points: [
        'Designed and managed cloud infrastructure on AWS (EC2, S3, RDS, Lambda, CloudWatch) with CI/CD pipelines via GitHub Actions and AWS CodePipeline',
        'Configured Nginx reverse proxies, load balancers, and Docker/Kubernetes containerization for scalable, highly available microservices',
        'Monitored system health using CloudWatch and Prometheus; managed infrastructure-as-code with Terraform and Ansible',
        'Reduced deployment time by 40% by automating provisioning scripts and standardizing containerized environments'
      ]
    },
    {
      title: 'Freelance Full-Stack Developer',
      company: 'TalentTrack — Talent Agency Admin Dashboard',
      period: 'Jan 2025 — Present',
      location: 'Remote',
      points: [
        'Built internal management platform using Next.js 15, React 19, and Supabase (PostgreSQL) with RLS-based role hierarchy and full CRUD',
        'Integrated Cloudflare R2 for asset storage, custom glassmorphism UI with Tailwind CSS, and React Hook Form + Zod; 69+ Vercel production deployments',
        'Designed normalized PostgreSQL schema with ER diagram; implemented real-time data sync and secure Gmail-only registration flows'
      ]
    },
    {
      title: 'Deputy Secretary',
      company: 'K3 Club, KIET',
      period: 'Aug 2024 — Present',
      location: 'Ghaziabad',
      points: [
        'Organized 12+ technical workshops for 200+ students',
        'Increased LinkedIn and Instagram engagement by 150%',
        'Organized campus-wide coding competitions and tech events'
      ]
    }
  ]

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2025',
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/84789ee13c9948238eb39e46b26c7541',
      image: '/aws.png'
    },
    {
      name: 'The Complete Web Developer Bootcamp',
      issuer: 'Udemy (Angela Yu)',
      year: '2024'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4" style={{ backgroundColor: '#0b0f1a' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & <span className="text-green-500">Achievements</span>
          </h2>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 text-sm">01</span>
            Work Experience
          </h3>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-gray-800 hover:border-green-500/50 transition-colors"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900 border-2 border-green-500" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <p className="text-green-500 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                    <p className="text-gray-500 text-xs">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                      <span className="text-green-500 mt-1.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CP & Skills Row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Competitive Programming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 text-sm">02</span>
              Competitive Programming
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              1487+ problems solved across platforms, maintaining a focus on algorithmic optimization. 
              <span className="text-green-500 font-medium ml-2">Max Streak: 605 Days</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {codingPlatforms.slice(0, 4).map((platform, index) => (
                <PlatformCard 
                  key={platform.name}
                  platform={platform}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>

          {/* Certifications & Education */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 text-sm">03</span>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className={`block group p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all ${cert.link ? 'cursor-pointer' : ''}`}
                  >
                    <div className="flex gap-4">
                      {cert.image && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-800 shrink-0">
                          <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1 text-left">
                        <div className="flex items-start justify-between">
                          <h4 className="text-white font-medium group-hover:text-green-500 transition-colors">{cert.name}</h4>
                          {cert.link && (
                            <div className="text-gray-500 group-hover:text-green-500">
                              <ExternalLink size={16} />
                            </div>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mt-1">{cert.issuer} • {cert.year}</p>
                        {cert.link && (
                          <span 
                            className="text-xs text-green-500/70 group-hover:text-green-500 mt-2 inline-block"
                          >
                            Verify Credential →
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 text-sm">04</span>
                Education
              </h3>
              <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
                <p className="text-green-500 text-sm font-medium mb-1">2023 - 2027</p>
                <h4 className="text-lg font-semibold text-white">B.Tech in Computer Science Engineering</h4>
                <p className="text-gray-400">KIET Group of Institutions, Ghaziabad</p>
                <div className="mt-2 text-sm text-gray-500">
                  CGPA: 8.32/10 • Consistent SGPA 8.5+ in Core Subjects (DSA, OOP, OS, DBMS)
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
