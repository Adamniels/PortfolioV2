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
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-black uppercase tracking-wider">Education</h2>
          <div className="space-y-10">
            {education.map((edu, index) => (
              <div
                key={edu.school}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black">{edu.school}</h3>
                    <p className="text-blue-600">{edu.degree}</p>
                  </div>
                  <span className="text-gray-500">{edu.period}</span>
                </div>
                {edu.courses.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-800">Relevant Courses:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.courses.map((course) => (
                        <div
                          key={course}
                          className="text-gray-700 text-sm"
                        >
                          • {course}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 