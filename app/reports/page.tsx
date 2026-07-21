'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FileText, ExternalLink } from 'lucide-react'

const reports = [
  {
    id: 1,
    title: 'Windows Memory Forensics Analysis',
    category: 'DFIR',
    summary: 'Analysis of malware persistence mechanisms using Volatility 3',
    tools: ['Volatility 3', 'Windows Forensics', 'Memory Analysis'],
    cves: ['CVE-2023-1234'],
    references: ['MITRE ATT&CK', 'Volatility Docs'],
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Ransomware Incident Response Case Study',
    category: 'DFIR',
    summary: 'Complete IR workflow for LockBit 3.0 ransomware infection',
    tools: ['Autopsy', 'Velociraptor', 'YARA'],
    cves: [],
    references: ['CISA Guidelines', 'NIST IR Framework'],
    date: '2024-01-10',
  },
  {
    id: 3,
    title: 'Linux Disk Forensics Investigation',
    category: 'DFIR',
    summary: 'Forensic analysis of compromised Linux server',
    tools: ['Autopsy', 'Sleuth Kit', 'Linux Forensics'],
    cves: ['CVE-2023-5678'],
    references: ['SANS DFIR', 'Linux Forensics Guide'],
    date: '2024-01-05',
  },
  {
    id: 4,
    title: 'APT28 Malware Analysis',
    category: 'Malware',
    summary: 'Static and dynamic analysis of APT28 custom malware',
    tools: ['Ghidra', 'IDA Pro', 'Cuckoo Sandbox'],
    cves: [],
    references: ['Mandiant Reports', 'CrowdStrike Intelligence'],
    date: '2023-12-20',
  },
  {
    id: 5,
    title: 'Web Application Vulnerability Assessment',
    category: 'Security Research',
    summary: 'Security assessment of enterprise web application',
    tools: ['Burp Suite', 'OWASP ZAP', 'Nmap'],
    cves: ['CVE-2023-9012', 'CVE-2023-9013'],
    references: ['OWASP Top 10', 'Burp Suite Docs'],
    date: '2023-12-15',
  },
  {
    id: 6,
    title: 'Threat Hunting Queries for SIEM',
    category: 'Security Research',
    summary: 'Custom threat hunting queries for detecting lateral movement',
    tools: ['Splunk', 'Elasticsearch', 'KQL'],
    cves: [],
    references: ['Atomic Red Team', 'Sigma Rules'],
    date: '2023-12-10',
  },
]

const categories = ['All', 'DFIR', 'Malware', 'Security Research']

export default function ReportsPage() {
  const [filter, setFilter] = React.useState('All')

  const filteredReports = filter === 'All' 
    ? reports 
    : reports.filter((r) => r.category === filter)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Reports</h1>
          <p className="text-muted-foreground mb-8">
            DFIR investigations, malware analysis, and security research reports
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{report.title}</CardTitle>
                      <Badge variant="outline">{report.category}</Badge>
                    </div>
                    <CardDescription>{report.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Tools Used</p>
                      <div className="flex flex-wrap gap-2">
                        {report.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {report.cves.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-2">CVEs</p>
                        <div className="flex flex-wrap gap-2">
                          {report.cves.map((cve) => (
                            <Badge key={cve} variant="destructive" className="text-xs">
                              {cve}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium mb-2">References</p>
                      <div className="flex flex-wrap gap-2">
                        {report.references.map((ref) => (
                          <Badge key={ref} variant="outline" className="text-xs">
                            {ref}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">{report.date}</span>
                      <Button size="sm" variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Read Report
                      </Button>
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
