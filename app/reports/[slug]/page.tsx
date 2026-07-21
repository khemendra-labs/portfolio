import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ReportPage({ params }: { params: { slug: string } }) {
  // This will be replaced with Keystatic data fetching
  const report = {
    title: 'windows-memory-forensics',
    category: 'DFIR',
    summary: 'Comprehensive analysis of Windows memory dump using Volatility 3 to detect malicious processes and network connections',
    tools: ['Volatility 3', 'Windows 10 VM', 'Mimikatz'],
    cves: [],
    references: [
      'https://volatility-labs.blogspot.com',
      'https://github.com/volatilityfoundation/volatility3'
    ],
    date: '2024-01-15',
    content: `
# Windows Memory Forensics Analysis

## Executive Summary

This report details the forensic analysis of a Windows 10 memory dump to identify malicious processes, network connections, and artifacts of compromise.

## Analysis Methodology

### 1. Image Information
Used \`windows.info\` plugin to identify the system profile and memory structure.

### 2. Process Analysis
Enumerated running processes using \`windows.pslist\` and \`windows.pstree\`.

### 3. Network Connections
Analyzed network connections with \`windows.netscan\`.

### 4. Malware Artifacts
Scanned for injected code and suspicious DLLs.

## Findings

- Suspicious process: \`svchost.exe\` with unusual parent PID
- Hidden network connection to 192.168.1.100:4444
- Evidence of process hollowing technique

## Recommendations

1. Isolate affected systems
2. Collect additional artifacts
3. Perform timeline analysis
4. Investigate lateral movement
    `,
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/reports">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Reports
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">{report.category}</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">{report.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{report.date}</span>
              </div>
            </div>
          </header>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{report.summary}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Tools Used</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {report.tools.map((tool) => (
                  <Badge key={tool} variant="outline">{tool}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {report.cves.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>CVEs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {report.cves.map((cve) => (
                    <Badge key={cve} variant="destructive">{cve}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>References</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {report.references.map((ref, index) => (
                  <li key={index}>
                    <a href={ref} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {ref}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: report.content.replace(/\n/g, '<br />') }} />
          </div>
        </article>
      </div>
    </div>
  )
}
