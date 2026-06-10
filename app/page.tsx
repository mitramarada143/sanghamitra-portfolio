'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Products from '@/components/Products'
import SkillsDashboard from '@/components/SkillsDashboard'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import ImpactMetrics from '@/components/ImpactMetrics'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import portfolio from '@/data/portfolio.json'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <Hero profile={portfolio.profile} metrics={portfolio.impactMetrics} />
      <Timeline experiences={portfolio.experience} />
      <Products products={portfolio.products} />
      <SkillsDashboard skills={portfolio.skills} />
      <Education education={portfolio.education} certifications={portfolio.certifications} />
      <Achievements achievements={portfolio.achievements} />
      <ImpactMetrics metrics={portfolio.impactMetrics} />
      <Contact profile={portfolio.profile} />
      <Footer profile={portfolio.profile} />
    </main>
  )
}
