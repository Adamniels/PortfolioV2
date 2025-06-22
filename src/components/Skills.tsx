'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', level: 'Advanced' },
      { name: 'Java', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'Go', level: 'Intermediate' },
      { name: 'TypeScript/JavaScript', level: 'Intermediate' },
      { name: 'MIPS Assembly', level: 'Basic' },
    ]
  },
  {
    title: 'Web & Fullstack',
    skills: [
      { name: 'HTML/CSS', level: 'Intermediate' },
      { name: 'Vue', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Intermediate' },
      { name: 'Database Design', level: 'Basic' },
    ]
  },
  {
    title: 'Tools & Environments',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Testing Frameworks', level: 'Intermediate' },
      { name: 'Terminal/CLI', level: 'Advanced' },
      { name: 'Networking', level: 'Intermediate' },
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', level: 'Advanced' },
      { name: 'Team Collaboration', level: 'Advanced' },
      { name: 'Communication', level: 'Advanced' },
      { name: 'Leadership', level: 'Advanced' },
    ]
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Swedish', level: 'Native' },
      { name: 'English', level: 'Fluent' },
    ]
  }
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-black uppercase tracking-wider">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-4 text-black">{category.title}</h3>
                <div className="space-y-2">
                  <ul className="list-disc list-inside text-gray-700 text-left">
                    {category.skills.map((skill) => (
                      <li key={skill.name}>{skill.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 