import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-6">
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </div>
    </main>
  )
} 