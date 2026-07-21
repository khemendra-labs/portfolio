'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const milestones = [
  {
    year: '2024',
    title: 'Cybercrime Investigation Intern',
    description: 'Started internship focusing on digital forensics, malware analysis, and incident response investigations.',
    category: 'Career',
  },
  {
    year: '2024',
    title: 'MCA Cybersecurity Specialization',
    description: 'Began Master of Computer Applications with specialization in cybersecurity.',
    category: 'Education',
  },
  {
    year: '2024',
    title: 'Firebase DFIR Toolkit',
    description: 'Developed comprehensive toolkit for Firebase digital forensics and incident response.',
    category: 'Project',
  },
  {
    year: '2023',
    title: 'OIntel Project',
    description: 'Created automated OSINT collection and analysis framework for threat intelligence.',
    category: 'Project',
  },
  {
    year: '2023',
    title: 'CEH Certification',
    description: 'Obtained Certified Ethical Hacker certification from EC-Council.',
    category: 'Certification',
  },
  {
    year: '2023',
    title: 'NetScan Tool',
    description: 'Developed automated network scanning and vulnerability detection tool.',
    category: 'Project',
  },
  {
    year: '2023',
    title: 'CompTIA Security+',
    description: 'Achieved CompTIA Security+ certification.',
    category: 'Certification',
  },
  {
    year: '2022',
    title: 'eJPT Certification',
    description: 'Earned eLearnSecurity Junior Penetration Tester certification.',
    category: 'Certification',
  },
  {
    year: '2022',
    title: 'Ubuntu Hardening Scripts',
    description: 'Created automated security hardening scripts based on CIS benchmarks.',
    category: 'Project',
  },
]

export default function TimelinePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Timeline</h1>
          <p className="text-muted-foreground mb-8">
            Professional milestones and journey in cybersecurity
          </p>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <Card className="hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline">{milestone.year}</Badge>
                        <Badge variant="secondary">{milestone.category}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
