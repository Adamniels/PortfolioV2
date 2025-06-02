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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <contact.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{contact.label}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{contact.value}</p>
              </motion.a>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center text-gray-600 dark:text-gray-400"
          >
            <p>
              I'm always interested in hearing about new opportunities and exciting projects.
              Feel free to reach out!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 