'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'
import { UserCircleIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full animate-pulse" 
                 style={{ transform: 'scale(1.05)' }} />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-gray-100">
              <UserCircleIcon className="w-full h-full text-gray-400" />
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold">
              Hi, I'm <span className="gradient-text">Adam Nielsen</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600">
              Backend/Fullstack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Passionate about building software that solves real problems, ranging from system level tools to
            full stack applications. Always eager to learn new technologies and turn ideas into code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <a href="#contact" className="primary-button">
              Get In Touch
            </a>
            <a href="#projects" className="secondary-button">
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 