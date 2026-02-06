import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'

// Coding platforms with screenshots
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
    link: 'https://auth.geeksforgeeks.org/user/avneeshtripathi',
    details: 'Institute Rank Top 10'
  },
  {
    name: 'Codolio',
    screenshot: '/codolio.png',
    rating: 'Active',
    problems: '1480+',
    link: 'https://codolio.com/profile/AvneeshTripathi',
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

  return (
    <section id="experience" className="py-20 px-4" style={{ backgroundColor: '#0b0f1a' }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & <span className="text-green-500">Achievements</span>
          </h2>
        </motion.div>

        {/* Leadership Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="border-l-2 border-green-500 pl-6 py-2">
            <p className="text-green-500 text-sm font-medium mb-1">2024 - Present</p>
            <h3 className="text-xl font-semibold text-white mb-2">
              Deputy Secretary — K3 Club, KIET
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl">
              Organized 12+ technical workshops for 200+ students. 
              Increased social media engagement by 150%. 
              Led coding competitions and tech events across the campus.
            </p>
          </div>
        </motion.div>

        {/* Competitive Programming Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Competitive Programming
          </h3>

          <p className="text-gray-400 max-w-2xl mb-6 leading-relaxed">
            I actively practice competitive programming and data structures,
            focusing on algorithmic thinking, optimization, and consistency.
            I enjoy solving challenging problems and participating in contests.
          </p>

          <ul className="space-y-2 text-white mb-8">
            <li>• <span className="text-green-500 font-medium">1480+</span> problems solved across platforms</li>
            <li>• LeetCode max rating: <span className="text-green-500 font-medium">1581</span></li>
            <li>• CodeChef <span className="text-green-500 font-medium">2★</span> (1455), Codeforces: <span className="text-green-500 font-medium">1235</span></li>
          </ul>

          {/* Platform Cards with Screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {codingPlatforms.map((platform, index) => (
              <PlatformCard 
                key={platform.name}
                platform={platform}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Education
          </h3>
          <div className="border-l-2 border-gray-600 pl-6 py-2">
            <p className="text-gray-500 text-sm font-medium mb-1">2023 - 2027</p>
            <h4 className="text-lg font-semibold text-white mb-1">
              B.Tech in Computer Science Engineering
            </h4>
            <p className="text-gray-400">
              KIET Group of Institutions, Ghaziabad
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Experience
