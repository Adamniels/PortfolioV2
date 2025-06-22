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
    <section id="education" className="py-24 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-16 text-center">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-100 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.school}</h3>
                    <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-lg">{edu.degree}</p>
                  </div>
                  <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{edu.period}</span>
                </div>
                {edu.courses.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-4 text-gray-800 text-lg">Relevant Courses:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.courses.map((course, i) => (
                        <motion.div
                          key={course}
                          className="text-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-2 rounded-lg border border-blue-100"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (i * 0.05) }}
                        >
                          • {course}
                        </motion.div>
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