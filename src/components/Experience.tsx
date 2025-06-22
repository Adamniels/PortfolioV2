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
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-black uppercase tracking-wider">Work Experience</h2>
          <div className="space-y-10">
            {experience.map((exp, index) => (
              <div
                key={exp.company}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-black">{exp.company}</h3>
                    <p className="text-blue-600">{exp.position}</p>
                  </div>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 