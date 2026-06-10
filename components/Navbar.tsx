'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { label: 'About', href: '#hero' },
    { label: 'Experience', href: '#timeline' },
    { label: 'Products', href: '#products' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 z-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="text-xl font-bold gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            MS
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section, i) => (
              <motion.a
                key={section.label}
                href={section.href}
                className="text-slate-700 dark:text-slate-300 hover:text-servicenow-600 dark:hover:text-servicenow-400 transition-colors text-sm font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {section.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900 dark:text-slate-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800"
          >
            <div className="flex flex-col gap-4 py-4">
              {sections.map((section) => (
                
                  key={section.label}
                  href={section.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-servicenow-600 dark:hover:text-servicenow-400 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
