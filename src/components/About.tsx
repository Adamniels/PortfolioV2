'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300">
          <p>
            I'm a curious and engaged IT student currently in my second year of the Master of Science 
            in Engineering program in Information Technology at Uppsala University. I have a strong 
            passion for programming and systems development, and I love problem-solving and constantly 
            learning new things.
          </p>
          
          <p>
            What I enjoy most about programming is that it involves all aspects of problem-solving – 
            from analyzing and understanding the problem to designing and building effective solutions. 
            I love breaking down and exploring challenges, experimenting with different approaches, 
            and really understanding how systems work.
          </p>
          
          <p>
            I enjoy both working in teams and independently, and I learn best when I get to build 
            things and try out new technologies in practice. I naturally take initiative and 
            responsibility, and I like structuring and driving things forward efficiently.
          </p>
          
          <p>
            Outside of studies, I read a lot – both courses and technical articles – and I love 
            diving deep into topics like programming, productivity, and learning. I've played ice 
            hockey most of my life, which taught me teamwork, discipline, and a constant drive 
            to improve.
          </p>
        </div>
      </motion.div>
    </section>
  )
} 