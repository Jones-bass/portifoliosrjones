'use client'

import Projects from '@/components/projects'
import Bio from '@/components/projects/Bio'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <motion.section
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.9 }}
    >
      <div className="lg:flex lg:grid-cols-app p-2 bg-slate-900 md:grid">
        <Bio />
        <Projects />
      </div>
    </motion.section>
  )
}
