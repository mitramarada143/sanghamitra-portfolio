'use client'

import { motion } from 'framer-motion'
import type { Skill } from '@/types/portfolio'

interface SkillsDashboardProps {
  skills: Skill[]
}

export default function SkillsDashboard({ skills }: SkillsDashboardProps) {
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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400">
            A comprehensive overview of my professional capabilities and technical knowledge
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillCategory) => (
            <motion.div
              key={skillCategory.id}
              variants={itemVariants}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800"
              whileHover={{ y: -4 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {skillCategory.category}
                </h3>
                {skillCategory.proficiency !== undefined && (
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-servicenow-500 to-isb-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skillCategory.proficiency}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white w-12">
                      {skillCategory.proficiency}%
                    </span>
                  </div>
                )}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skillCategory.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
