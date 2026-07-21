'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const changelogEntries = [
  {
    version: '2024.01.20',
    date: 'January 20, 2024',
    changes: [
      'Added Ransomware Analysis Lab',
      'Updated Windows Memory Forensics report',
      'Added threat hunting queries for SIEM',
    ],
  },
  {
    version: '2024.01.15',
    date: 'January 15, 2024',
    changes: [
      'Added Memory Forensics Lab',
      'Published Volatility 3 guide',
      'Updated OIntel with new data sources',
    ],
  },
  {
    version: '2024.01.10',
    date: 'January 10, 2024',
    changes: [
      'Added Network Traffic Analysis Lab',
      'Published ransomware IR workflow',
      'Updated Firebase DFIR Toolkit',
    ],
  },
  {
    version: '2024.01.05',
    date: 'January 5, 2024',
    changes: [
      'Added Disk Forensics Lab',
      'Published Ubuntu hardening scripts',
      'Initial portfolio launch',
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Changelog</h1>
          <p className="text-muted-foreground mb-8">
            Updates and changes to the portfolio and projects
          </p>

          <div className="space-y-6">
            {changelogEntries.map((entry, index) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl">{entry.version}</CardTitle>
                      <Badge variant="outline" className="w-fit">{entry.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {entry.changes.map((change, changeIndex) => (
                        <li key={changeIndex}>{change}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
