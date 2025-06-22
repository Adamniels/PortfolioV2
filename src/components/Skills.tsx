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

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced': return 'bg-green-100 text-green-800 border-green-200'
    case 'Intermediate': return 'bg-blue-100 text-blue-800 border-blue-200'
    case 'Basic': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'Native': return 'bg-purple-100 text-purple-800 border-purple-200'
    case 'Fluent': return 'bg-indigo-100 text-indigo-800 border-indigo-200'
    default: return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-16 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-100 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </motion.div>
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