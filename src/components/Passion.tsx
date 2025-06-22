'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const passions = [
  {
    title: 'Design',
    description: 'I love crafting beautiful, intuitive interfaces and experiences that people enjoy using on all digital platforms.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16.862 3.487a2.5 2.5 0 013.535 3.535l-12.02 12.02a2 2 0 01-.707.464l-4.01 1.337a.5.5 0 01-.632-.632l1.337-4.01a2 2 0 01.464-.707l12.02-12.02z" />
        <path d="M15 6l3 3" />
      </svg>
    )
  },
  {
    title: 'Development',
    description: 'With a strong foundation in computer science, I enjoy building clean, maintainable code and scalable software solutions.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M2 17h20M8 21h8" />
      </svg>
    )
  },
  {
    title: 'Involvement',
    description: 'I love collaborating, teaching, and being part of communities that share my passion for tech and creativity.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="9" cy="7" r="4" />
        <circle cx="17" cy="11" r="4" />
        <path d="M17 15v2a4 4 0 01-4 4H5a4 4 0 01-4-4v-2a4 4 0 014-4h8a4 4 0 014 4z" />
      </svg>
    )
  }
]

export default function Passion() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="passion" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-16">Passion</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {passions.map((passion, index) => (
              <motion.div 
                key={passion.title}
                className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-purple-100 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100 mb-6 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                  {passion.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{passion.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {passion.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}