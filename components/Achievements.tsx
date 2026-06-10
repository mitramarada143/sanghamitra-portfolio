'use client'

import { motion } from 'framer-motion'
import { Trophy, Sparkles, Award, Target } from 'lucide-react'
import type { Achievement } from '@/types/portfolio'

interface AchievementsProps {
  achievements: Achievement[]
}

const categoryIcons: Record<string, React.ReactNode> = {
  award: <Trophy size={20} />,
  leadership: <Target size={20} />,
  recognition: <Sparkles size={20} />
}

const categoryColors: Record<string, string> = {
  award: 'from-servicenow-500 to-isb-500',
  leadership: 'from-iiit-500 to-servicenow-500',
  recognition: 'from-iim-500 to-isb-500'
}

export default function Achievements({ achievements }: AchievementsProps) {
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Recognition from organizations and peers for excellence in delivery and leadership
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -8 }}
            >
              {/* Card */}
              <div className="h-full bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${categoryColors[achievement.category]}`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-servicenow-500 to-isb-500 flex items-center justify-center text-white mb-4">
                    {categoryIcons[achievement.category]}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {achievement.description}
                  </p>

                  {/* Impact */}
                  {achievement.impact && (
                    <p className="text-sm text-servicenow-600 dark:text-servicenow-400 font-medium mb-3">
                      {achievement.impact}
                    </p>
                  )}

                  {/* Date */}
                  <div className="text-xs text-slate-500 dark:text-slate-500">
                    {achievement.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
