'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'Mini-JobQueue',
    description: 'A distributed job queue system built with Go. The central server accepts jobs via a REST API and distributes them to workers via WebSocket. Workers are standalone Go programs that execute the job and report results back.',
    tech: ['Go', 'REST API', 'WebSocket'],
    type: 'System Development'
  },
  {
    title: 'Padel Tournament Manager',
    description: 'A terminal-based system to manage tournaments and scoring. The project focuses on data structures, clean code, and maintainable logic.',
    tech: ['Java', 'Data Structures', 'Clean Code'],
    type: 'Application Development'
  },
  {
    title: 'Custom Garbage Collector',
    description: 'A memory management library based on Bartlett\'s algorithm. Users allocate through custom functions using an internally managed heap with memory pages.',
    tech: ['C', 'Memory Management', 'Systems Programming'],
    type: 'Systems Programming'
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    {project.type}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 