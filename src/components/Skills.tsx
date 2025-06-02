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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-blue-600 dark:text-blue-400 text-sm">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{
                            width: skill.level === 'Advanced' ? '90%' :
                                   skill.level === 'Intermediate' ? '70%' :
                                   skill.level === 'Basic' ? '50%' :
                                   skill.level === 'Native' ? '100%' :
                                   skill.level === 'Fluent' ? '90%' : '0%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 