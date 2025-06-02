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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{exp.position}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
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