'use client'

import { motion } from 'framer-motion'
import type { ImpactMetric } from '@/types/portfolio'

interface ImpactMetricsProps {
  metrics: ImpactMetric[]
}

export default function ImpactMetrics({ metrics }: ImpactMetricsProps) {
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Impact & Metrics</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Quantified outcomes and business impact across products and initiatives
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              variants={itemVariants}
              className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-servicenow-500 dark:hover:border-servicenow-500 transition-colors relative overflow-hidden"
              whileHover={{ y: -8 }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-servicenow-50 to-isb-50 dark:from-servicenow-950 dark:to-isb-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

              {/* Content */}
              <div className="relative z-10">
                {/* Value */}
                <motion.div
                  className="text-3xl sm:text-4xl font-bold text-servicenow-600 dark:text-servicenow-400 mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  {metric.value}
                </motion.div>

                {/* Label */}
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
