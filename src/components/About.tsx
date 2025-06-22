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
    <section id="about" className="py-24 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title mb-16">A Little Bit About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-400/30 shadow-2xl shadow-purple-500/20 glow">
                  <Image
                    src="/images/hero_hello_world.jpg"
                    alt="Adam Nielsen"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-20 blur-lg animate-pulse"></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6 text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                Hey! My name is <span className="gradient-text font-semibold">Adam</span> and I'm a web developer with a passion for building clean, user-friendly software. I'm currently studying Information Technology at Uppsala University, always eager to learn and create.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My experience ranges from system programming to full-stack web development. I love solving problems and turning ideas into reality.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me playing ice hockey, reading, or searching for the perfect cup of coffee.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-purple-400 font-medium">🎓 Uppsala University</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-purple-400 font-medium">🏒 Ice Hockey</span>
                </div>
                <div className="glass-card px-4 py-2 rounded-full">
                  <span className="text-purple-400 font-medium">☕ Coffee Enthusiast</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}