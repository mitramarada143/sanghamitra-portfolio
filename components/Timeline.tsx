'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Briefcase, Code, Lightbulb, TrendingUp } from 'lucide-react'
import type { Experience } from '@/types/portfolio'
import { calculateDuration, getCategoryColor, getCategoryBorder } from '@/lib/utils'

interface TimelineProps {
  experiences: Experience[]
}

const categoryIcons: Record<string, React.ReactNode> = {
  'product-management': <Briefcase size={20} />,
  'business-analysis': <TrendingUp size={20} />,
  'ai-products': <Lightbulb size={20} />,
  'consulting': <Briefcase size={20} />,
  'engineering': <Code size={20} />
}

const categoryLabels: Record<string, string> = {
  'product-management': 'Product Management',
  'business-analysis': 'Business Analysis',
  'ai-products': 'AI Products',
  'consulting': 'Consulting',
  'engineering': 'Engineering'
}

export default function Timeline({ experiences }: TimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>('exp-1')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [...new Set(experiences.map(e => e.category))]
  const filteredExperiences = selectedCategory
    ? experiences.filter(e => e.category === selectedCategory)
    : experiences

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Career Journey</h2>
          <p className="text-slate-600 dark:text-slate-400">
            5+ years building enterprise products and leading cross-functional teams
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedCategory === null
                ? 'bg-servicenow-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Roles
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? `text-white ${getCategoryColor(category).split(' ')[0]}`
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-12 h-12 bg-white dark:bg-slate-950 border-4 border-servicenow-600 rounded-full flex items-center justify-center">
                  {categoryIcons[exp.category]}
                </div>

                {/* Timeline Card */}
                <motion.div
                  className={`ml-24 bg-white dark:bg-slate-800 rounded-lg border-2 ${getCategoryBorder(
                    exp.category
                  )} overflow-hidden transition-all cursor-pointer`}
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  whileHover={{ y: -4 }}
                >
                  {/* Header */}
                  <div className="p-6 flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(exp.category)}`}>
                          {categoryLabels[exp.category]}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-1">{exp.company}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">
                        {exp.startDate.slice(0, 7)} – {exp.endDate === 'present' ? 'Present' : exp.endDate.slice(0, 7)}
                        {exp.duration && ` • ${exp.duration}`}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} className="text-slate-600 dark:text-slate-400" />
                    </motion.div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t-2 border-slate-200 dark:border-slate-700"
                      >
                        <div className="p-6 space-y-4">
                          {/* Description */}
                          <div>
                            <p className="text-slate-600 dark:text-slate-400">
                              {exp.description}
                            </p>
                          </div>

                          {/* Responsibilities */}
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-1">
                              {exp.responsibilities.slice(0, 3).map((resp, i) => (
                                <li key={i} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                  <span className="text-servicenow-600 mt-1">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* KPIs */}
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                              Impact & KPIs
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.kpis.slice(0, 3).map((kpi, i) => (
                                <span
                                  key={i}
                                  className="text-xs bg-servicenow-50 dark:bg-servicenow-950 text-servicenow-700 dark:text-servicenow-300 px-3 py-1 rounded-full"
                                >
                                  {kpi}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          {exp.technologies.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.slice(0, 4).map((tech, i) => (
                                  <span
                                    key={i}
                                    className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
