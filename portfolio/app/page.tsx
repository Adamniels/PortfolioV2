'use client';

import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Passion from '@/components/Passion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Passion />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
  )
}
