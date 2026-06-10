'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react'
import Button from '@/components/Button'
import type { Profile, ImpactMetric } from '@/types/portfolio'

interface HeroProps {
  profile: Profile
  metrics: ImpactMetric[]
}

export default function Hero({ profile, metrics }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <motion.div
        className="max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="text-sm font-semibold text-servicenow-600 dark:text-servicenow-400 bg-servicenow-50 dark:bg-servicenow-950 px-4 py-2 rounded-full border border-servicenow-200 dark:border-servicenow-800">
            🚀 Product Manager & AI Systems
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-6 leading-tight"
        >
          <span className="text-slate-900 dark:text-white">Building AI-Powered</span>
          <br />
          <span className="gradient-text">Enterprise Platforms</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-slate-600 dark:text-slate-400 text-center mb-8 max-w-2xl mx-auto"
        >
          {profile.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
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
          <Button
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            className="group"
          >
            <Linkedin size={20} />
            LinkedIn Profile
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {metrics.slice(0, 4).map((metric, i) => (
            <motion.div
              key={metric.id}
              className="bg-white dark:bg-slate-800 rounded-lg p-4 sm:p-6 border border-slate-200 dark:border-slate-700 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-servicenow-600 dark:text-servicenow-400 mb-2">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-slate-400 dark:text-slate-600 text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  )
}
