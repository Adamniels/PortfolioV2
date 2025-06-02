'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const education = [
  {
    school: 'Uppsala University',
    degree: 'MSc in Information Technology',
    period: '2023 – ongoing',
    courses: [
      'Intro to IT (Python)',
      'Data Structures and Programming (TypeScript)',
      'Imperative & Object-Oriented Programming (C, Java)',
      'Computer Architecture (MIPS Assembly)',
      'Linear Algebra',
      'Calculus',
      'Multivariable Calculus (ongoing)',
      'System Design',
      'Probability & Statistics',
      'Computer Systems with Go + Vue project'
    ]
  },
  {
    school: 'Thorildsplans Gymnasium',
    degree: 'Economics Program',
    period: '2016 – 2019',
    courses: []
  }
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{edu.school}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{edu.degree}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{edu.period}</span>
                </div>
                {edu.courses.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Relevant Courses:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.courses.map((course) => (
                        <div
                          key={course}
                          className="text-gray-700 dark:text-gray-300 text-sm"
                        >
                          • {course}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 