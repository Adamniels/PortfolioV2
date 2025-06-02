'use client';

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Profile Image */}
            <div className="md:col-span-5">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <Image
                  src="/images/hero_hello_world.jpg"
                  alt="Adam Nielsen"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="md:col-span-7 space-y-6">
              <p className="text-lg text-gray-200">
                Hey! I'm Adam, a passionate software developer with a focus on backend and fullstack development. 
                Currently pursuing my studies in Information Technology at Uppsala University, I'm constantly exploring 
                new technologies and pushing my boundaries in software development.
              </p>
              
              <p className="text-lg text-gray-200">
                With a strong foundation in various programming languages and technologies, I enjoy tackling 
                complex problems and creating efficient, scalable solutions. My experience ranges from system-level 
                programming to full-stack web development.
              </p>

              <p className="text-lg text-gray-200">
                When I'm not coding, you can find me reading technical articles, exploring new technologies, 
                or playing ice hockey - a sport that has taught me the value of teamwork and continuous improvement.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 