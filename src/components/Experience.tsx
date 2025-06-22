'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experience = [
  {
    company: 'Cerves AB',
    position: 'Carpenter',
    period: '2019 – 2023',
    description: [
      'Worked both independently and in teams on various construction projects',
      'Developed problem-solving skills by handling situations without predefined solutions',
      'Learned to take responsibility and make decisions in a hands-on environment',
      'Improved adaptability and creative thinking through practical challenges',
      'Strengthened communication skills through daily interaction with team members and clients'
    ]
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-16 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-purple-100 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h3>
                    <p className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-semibold text-lg">{exp.position}</p>
                  </div>
                  <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="text-gray-700 flex items-start leading-relaxed"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: (index * 0.2) + (i * 0.1) }}
                    >
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}