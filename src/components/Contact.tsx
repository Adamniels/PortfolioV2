'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { EnvelopeIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '+46 700 39 29 30',
    href: 'tel:+46700392930'
  },
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'adamnielsen401@gmail.com',
    href: 'mailto:adamnielsen401@gmail.com'
  },
  {
    icon: GlobeAltIcon,
    label: 'Portfolio',
    value: 'adamniels.github.io/Portfolio',
    href: 'https://adamniels.github.io/Portfolio/'
  }
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-16 text-center max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <contact.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-xl font-semibold mb-3 text-white">{contact.label}</h3>
                <p className="text-gray-300 text-center group-hover:text-white transition-colors">{contact.value}</p>
              </motion.a>
            ))}
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}