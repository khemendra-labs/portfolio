'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    id: 1,
    name: 'NCFL (National Cyber Forensics Lab)',
    issuer: 'Government of India',
    date: '2024 - In Progress',
    status: 'In Progress',
    description: 'Advanced digital forensics certification covering memory analysis, network forensics, and malware analysis.',
    credentialId: null,
    url: null,
  },
  {
    id: 2,
    name: 'CEH (Certified Ethical Hacker)',
    issuer: 'EC-Council',
    date: '2023',
    status: 'Completed',
    description: 'Certification covering ethical hacking methodologies, tools, and techniques.',
    credentialId: 'ECC12345678',
    url: 'https://eccouncil.org',
  },
  {
    id: 3,
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2023',
    status: 'Completed',
    description: 'Foundational cybersecurity certification covering security principles and practices.',
    credentialId: 'COMP09876543',
    url: 'https://comptia.org',
  },
  {
    id: 4,
    name: 'eJPT (eLearnSecurity Junior Penetration Tester)',
    issuer: 'INE',
    date: '2022',
    status: 'Completed',
    description: 'Practical penetration testing certification with hands-on exam.',
    credentialId: 'eJPT-123456',
    url: 'https://ine.com',
  },
]

export default function CertificationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Certifications</h1>
          <p className="text-muted-foreground mb-8">
            Professional certifications and ongoing learning
          </p>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Award className="h-6 w-6 text-primary" />
                        <div>
                          <CardTitle className="text-xl">{cert.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>
                      <Badge variant={cert.status === 'Completed' ? 'default' : 'secondary'} className="w-fit">
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{cert.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          Verify
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
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
