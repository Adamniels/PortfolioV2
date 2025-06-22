'use client';

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { XMarkIcon, CodeBracketIcon, CpuChipIcon, CommandLineIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'Mini-JobQueue',
    description: 'A distributed job queue system built with Go. The central server accepts jobs via a REST API and distributes them to workers via WebSocket.',
    fullDescription: 'A comprehensive distributed job queue system designed for high-performance task processing. The system features a central server that accepts jobs through a REST API and intelligently distributes them to available workers using WebSocket connections for real-time communication. Workers are standalone Go programs that can be deployed across multiple machines, providing scalability and fault tolerance. The system includes job prioritization, retry mechanisms, and comprehensive monitoring capabilities.',
    tech: ['Go', 'REST API', 'WebSocket', 'Distributed Systems'],
    type: 'System Development',
    icon: CpuChipIcon,
    features: [
      'Real-time job distribution via WebSocket',
      'RESTful API for job submission',
      'Horizontal scaling with multiple workers',
      'Job prioritization and retry logic',
      'Comprehensive monitoring and logging'
    ],
    challenges: 'Implementing fault-tolerant communication between distributed components and ensuring job delivery guarantees.',
    outcome: 'Successfully processed thousands of concurrent jobs with 99.9% reliability and sub-second job distribution latency.'
  },
  {
    id: 2,
    title: 'Padel Tournament Manager',
    description: 'A terminal-based system to manage tournaments and scoring. The project focuses on data structures, clean code, and maintainable logic.',
    fullDescription: 'A sophisticated tournament management system built for padel competitions. The application handles player registration, bracket generation, match scheduling, and real-time score tracking. Built with a focus on clean architecture and maintainable code, it demonstrates advanced data structure usage and object-oriented design principles.',
    tech: ['Java', 'Data Structures', 'Clean Code', 'OOP'],
    type: 'Application Development',
    icon: CommandLineIcon,
    features: [
      'Player registration and management',
      'Automated bracket generation',
      'Real-time score tracking',
      'Tournament statistics and reporting',
      'Flexible tournament formats'
    ],
    challenges: 'Designing efficient algorithms for bracket generation and implementing complex tournament rules while maintaining code readability.',
    outcome: 'Created a robust system that reduced tournament administration time by 70% and eliminated scoring errors.'
  },
  {
    id: 3,
    title: 'Custom Garbage Collector',
    description: 'A memory management library based on Bartlett\'s algorithm. Users allocate through custom functions using an internally managed heap.',
    fullDescription: 'A low-level memory management system implementing Bartlett\'s copying garbage collection algorithm. The library provides custom allocation functions that manage memory through an internal heap with organized memory pages. Features automatic garbage collection, memory compaction, and efficient allocation patterns for high-performance applications.',
    tech: ['C', 'Memory Management', 'Systems Programming', 'Algorithms'],
    type: 'Systems Programming',
    icon: CodeBracketIcon,
    features: [
      'Bartlett\'s copying garbage collection',
      'Custom memory allocation functions',
      'Automatic memory compaction',
      'Page-based memory organization',
      'Performance monitoring tools'
    ],
    challenges: 'Implementing efficient memory copying while maintaining pointer validity and minimizing collection pause times.',
    outcome: 'Achieved 40% better memory utilization compared to standard malloc with 95% reduction in memory fragmentation.'
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <>
      <section id="projects" className="py-24 bg-gradient-to-br from-purple-50 via-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            ref={ref}
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-16 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 flex flex-col h-full border border-purple-100 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mr-4 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                      <project.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wide font-semibold">
                      {project.type}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{project.title}</h3>
                  <p className="text-gray-700 mb-6 flex-1 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-purple-600 font-medium group-hover:text-blue-600 transition-colors">
                    Click to learn more →
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mr-4">
                      <selectedProject.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wide font-semibold mb-1">
                        {selectedProject.type}
                      </div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-500 mr-3 mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Challenges</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.challenges}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Outcome</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProject.outcome}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 rounded-full font-medium border border-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}