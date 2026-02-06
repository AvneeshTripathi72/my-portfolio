import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'avneesh.tripathi.dev@gmail.com',
    href: 'mailto:avneesh.tripathi.dev@gmail.com'
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+91 7355931587',
    href: 'tel:+917355931587'
  },
  {
    icon: <Linkedin size={24} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/avneeshtripathi',
    href: 'https://www.linkedin.com/in/avneeshtripathi/'
  },
  {
    icon: <Github size={24} />,
    label: 'GitHub',
    value: 'github.com/AvneeshTripathi72',
    href: 'https://github.com/AvneeshTripathi72'
  }
]

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 px-4 relative bg-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 shadow-lg shadow-black/30">
              <h3 className="text-2xl font-display font-bold text-textMain mb-6">
                Let's Connect
              </h3>
              <p className="text-textMuted mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Feel free to reach out through any of the following channels.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <a
                      href={info.href}
                      target={info.label === 'LinkedIn' || info.label === 'GitHub' ? '_blank' : undefined}
                      rel={info.label === 'LinkedIn' || info.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 glass-card-hover"
                    >
                      <div className="text-textMuted group-hover:text-primary transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-textMuted">{info.label}</p>
                        <p className="text-textMain group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6 shadow-lg shadow-black/30">
              <h3 className="text-2xl font-display font-bold text-textMain mb-2">
                Send a Message
              </h3>
              
              <div>
                <label htmlFor="name" className="block text-sm text-textMuted mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-xl text-textMain placeholder-textMuted focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder=" "
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-textMuted mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-xl text-textMain placeholder-textMuted focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-textMuted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-200 border border-white/10 rounded-xl text-textMain placeholder-textMuted focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-primary bg-primary/10 p-4 rounded-xl"
                >
                  <CheckCircle size={20} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-500/10 p-4 rounded-xl"
                >
                  <AlertCircle size={20} />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
