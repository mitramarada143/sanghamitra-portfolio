'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, MapPin, ArrowRight } from 'lucide-react'
import Button from '@/components/Button'
import type { Profile } from '@/types/portfolio'

interface ContactProps {
  profile: Profile
}

export default function Contact({ profile }: ContactProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            I'm always interested in hearing about new opportunities and collaborations.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Email */}
          <motion.a
            href={`mailto:${profile.email}`}
            variants={itemVariants}
            className="group bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-servicenow-500 hover:dark:border-servicenow-500 transition-colors"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-servicenow-100 dark:bg-servicenow-900 flex items-center justify-center text-servicenow-600 dark:text-servicenow-400 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Email</h3>
                <p className="text-slate-600 dark:text-slate-400">{profile.email}</p>
                <div className="inline-flex items-center gap-2 text-servicenow-600 dark:text-servicenow-400 font-medium mt-2 group-hover:gap-3 transition-all">
                  Send a message
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${profile.phone}`}
            variants={itemVariants}
            className="group bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-isb-500 hover:dark:border-isb-500 transition-colors"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-isb-100 dark:bg-isb-900 flex items-center justify-center text-isb-600 dark:text-isb-400 flex-shrink-0">
                <Phone size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
                <p className="text-slate-600 dark:text-slate-400">{profile.phone}</p>
                <div className="inline-flex items-center gap-2 text-isb-600 dark:text-isb-400 font-medium mt-2 group-hover:gap-3 transition-all">
                  Call me
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </motion.a>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-iiit-100 dark:bg-iiit-900 flex items-center justify-center text-iiit-600 dark:text-iiit-400 flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-400">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="group bg-slate-50 dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 hover:border-servicenow-500 hover:dark:border-servicenow-500 transition-colors"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <Linkedin size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">LinkedIn</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm truncate">LinkedIn Profile</p>
                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-2 group-hover:gap-3 transition-all">
                  Connect
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-servicenow-50 to-isb-50 dark:from-servicenow-950 dark:to-isb-950 rounded-2xl p-12 border border-servicenow-200 dark:border-servicenow-800"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to collaborate?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            Whether you have a question, opportunity, or just want to chat, feel free to reach out.
          </p>
          <Button
            href={`mailto:${profile.email}`}
            variant="primary"
            size="lg"
            className="group"
          >
            <Mail size={20} />
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
