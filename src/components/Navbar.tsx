'use client';

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Technical Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 top-0">
      <nav className="container h-20 flex items-center justify-between">
        <div className="flex lg:flex-1">
          <a href="#" className="text-2xl font-bold gradient-text">
            Adam Nielsen
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2 text-gray-600 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link text-base"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" 
               onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <a href="#" className="text-2xl font-bold gradient-text">
                Adam Nielsen
              </a>
              <button
                type="button"
                className="p-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-medium text-gray-900 hover:text-indigo-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 