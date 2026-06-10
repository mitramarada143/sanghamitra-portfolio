'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Award, Calendar } from 'lucide-react'
import type { Education, Certification } from '@/types/portfolio'

interface EducationProps {
  education: Education[]
  certifications: Certification[]
}

export default function Education({ education, certifications }: EducationProps) {
  const [expandedId, setExpandedId] = useState<string | null>('edu-1')

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
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Advanced degrees and professional certifications
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-lg border-l-4 border-servicenow-500 p-6 cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setExpandedId(expandedId === edu.id ? null : edu.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">
                      {edu.degree} in {edu.field}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
                      <Calendar size={14} />
                      {edu.startDate} – {edu.endDate}
                      {edu.grade && <span className="ml-2">• GPA: {edu.grade}</span>}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === edu.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-slate-400" />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedId === edu.id && edu.highlights && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
                    >
                      <h5 className="font-semibold text-slate-900 dark:text-white mb-2">Highlights</h5>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                            <Award size={14} className="text-servicenow-600 mt-1 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Award size={20} className="text-servicenow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{cert.name}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-500">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
