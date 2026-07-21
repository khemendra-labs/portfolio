'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FlaskConical, ExternalLink } from 'lucide-react'

const labs = [
  {
    id: 1,
    title: 'Ransomware Analysis Lab',
    objective: 'Perform static and dynamic analysis of LockBit 3.0 ransomware sample',
    environment: 'Windows 10 VM, Cuckoo Sandbox, Ghidra, Wireshark',
    methodology: 'Static analysis using Ghidra, dynamic analysis in sandbox, network traffic analysis',
    findings: 'Identified encryption algorithm, C2 communication, persistence mechanisms',
    evidence: 'Memory dumps, network captures, decompiled code snippets',
    lessons: 'Importance of behavioral analysis, understanding of ransomware families',
    date: '2024-01-20',
  },
  {
    id: 2,
    title: 'Memory Forensics Lab',
    objective: 'Analyze memory dump for malicious artifacts and indicators of compromise',
    environment: 'Volatility 3, Windows memory dump, SANS memory forensics toolkit',
    methodology: 'Process analysis, network connections, malware artifacts, registry hives',
    findings: 'Discovered injected processes, suspicious network connections, rootkit techniques',
    evidence: 'Process trees, memory strings, extracted binaries',
    lessons: 'Memory analysis crucial for detecting fileless malware',
    date: '2024-01-15',
  },
  {
    id: 3,
    title: 'Network Traffic Analysis Lab',
    objective: 'Analyze PCAP files for malicious network activity',
    environment: 'Wireshark, NetworkMiner, Suricata, malicious PCAP samples',
    methodology: 'Protocol analysis, payload inspection, anomaly detection, signature matching',
    findings: 'Identified data exfiltration, C2 beaconing, lateral movement attempts',
    evidence: 'Packet captures, flow data, extracted files',
    lessons: 'Network forensics essential for incident response',
    date: '2024-01-10',
  },
  {
    id: 4,
    title: 'Disk Forensics Lab',
    objective: 'Perform forensic analysis of compromised system disk image',
    environment: 'Autopsy, Sleuth Kit, Linux disk image, forensic workstation',
    methodology: 'File system analysis, timeline reconstruction, deleted file recovery, registry analysis',
    findings: 'Recovered deleted malware, identified attack timeline, extracted user activity',
    evidence: 'File metadata, recovered artifacts, timeline data',
    lessons: 'Disk forensics provides comprehensive attack reconstruction',
    date: '2024-01-05',
  },
]

export default function LabsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Labs</h1>
          <p className="text-muted-foreground mb-8">
            Hands-on cybersecurity labs and practical exercises
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labs.map((lab, index) => (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FlaskConical className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">{lab.title}</CardTitle>
                      </div>
                      <Badge variant="outline">{lab.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-1">Objective</h3>
                      <p className="text-sm text-muted-foreground">{lab.objective}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Environment</h3>
                      <p className="text-sm text-muted-foreground">{lab.environment}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Methodology</h3>
                      <p className="text-sm text-muted-foreground">{lab.methodology}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Findings</h3>
                      <p className="text-sm text-muted-foreground">{lab.findings}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Evidence</h3>
                      <p className="text-sm text-muted-foreground">{lab.evidence}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Lessons Learned</h3>
                      <p className="text-sm text-muted-foreground">{lab.lessons}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Lab Details
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
