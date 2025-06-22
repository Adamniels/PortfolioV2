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
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-black uppercase tracking-wider">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {contactInfo.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <contact.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-black">{contact.label}</h3>
                <p className="text-gray-700 text-center">{contact.value}</p>
              </a>
            ))}
          </div>
          <div className="mt-12 text-center text-gray-700 text-lg font-medium">
            <p>
              I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 