'use client';

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 w-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/images/hero_hello_world.jpg')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full mx-auto px-6 text-center"
        >
          <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight">
            Hi, I'm <span className="text-indigo-400">Adam Nielsen</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed mt-6">
            Passionate about building software that solves real problems, ranging from system level tools to
            full stack applications. Always eager to learn new technologies and turn ideas into code.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="#about"
              className="inline-block mt-8 text-white"
              aria-label="Scroll to about section"
            >
              <svg
                className="w-10 h-10 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 