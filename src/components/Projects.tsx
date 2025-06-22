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
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-black uppercase tracking-wider">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full border border-gray-100"
              >
                <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
                  {project.type}
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{project.title}</h3>
                <p className="text-gray-700 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 