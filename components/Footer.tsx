'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import type { Profile } from '@/types/portfolio'

interface FooterProps {
  profile: Profile
}

export default function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Marada Sanghamitra</h3>
            <p className="text-slate-400 text-sm">
              Product Manager & Business System Analyst
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-slate-400 hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#products" className="text-slate-400 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              
                href={`mailto:${profile.email}`}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-servicenow-600 flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail size={20} />
              </a>
              
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
                href={profile.socialLinks.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
            <p>
              © {currentYear} Marada Sanghamitra. All rights reserved.
            </p>
            <p className="mt-4 sm:mt-0">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
