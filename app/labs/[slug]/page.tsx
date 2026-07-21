import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, FlaskConical } from 'lucide-react'
import Link from 'next/link'

export default function LabPage({ params }: { params: { slug: string } }) {
  // This will be replaced with Keystatic data fetching
  const lab = {
    title: 'ransomware-analysis',
    objective: 'Perform static and dynamic analysis of LockBit 3.0 ransomware sample',
    environment: 'Windows 10 VM, Cuckoo Sandbox, Ghidra, Wireshark',
    methodology: 'Static analysis using Ghidra, dynamic analysis in sandbox, network traffic analysis',
    findings: 'Identified encryption algorithm, C2 communication, persistence mechanisms',
    evidence: 'Screenshots of C2 traffic, encryption process, registry modifications',
    lessons: 'Importance of behavioral analysis, network monitoring, and persistence detection',
    date: '2024-01-20',
    content: `
# Ransomware Analysis Lab

## Objective

Perform comprehensive analysis of LockBit 3.0 ransomware sample to understand its behavior, capabilities, and indicators of compromise.

## Environment Setup

- Windows 10 VM (isolated network)
- Cuckoo Sandbox for dynamic analysis
- Ghidra for reverse engineering
- Wireshark for network monitoring
- Process Monitor for system activity tracking

## Methodology

### Static Analysis
1. File hash verification
2. PE header analysis
3. String extraction
4. Import/export table analysis
5. Code decompilation with Ghidra

### Dynamic Analysis
1. Execution in sandbox
2. Process monitoring
3. File system changes
4. Registry modifications
5. Network traffic capture

## Findings

### Encryption Algorithm
- Uses AES-256 for file encryption
- RSA-4096 for key protection
- Custom file extension: \`.lockbit\`

### C2 Communication
- HTTP POST to hardcoded domain
- Encrypted payload with custom protocol
- Beacon interval: 60 seconds

### Persistence Mechanisms
- Registry run key modification
- Scheduled task creation
- Service installation

## Evidence

Screenshots and logs captured during analysis show:
- Initial infection vector
- File encryption process
- C2 communication attempts
- Registry modifications

## Lessons Learned

1. Behavioral analysis is crucial for understanding ransomware
2. Network monitoring can reveal C2 infrastructure
3. Persistence mechanisms vary by ransomware family
4. Memory analysis can detect unpacked payloads
    `,
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/labs">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Labs
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary">
                <FlaskConical className="h-3 w-3 mr-1" />
                Lab
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">{lab.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{lab.date}</span>
              </div>
            </div>
          </header>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{lab.objective}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{lab.environment}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{lab.methodology}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{lab.findings}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Evidence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{lab.evidence}</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Lessons Learned</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{lab.lessons}</p>
            </CardContent>
          </Card>

          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: lab.content.replace(/\n/g, '<br />') }} />
          </div>
        </article>
      </div>
    </div>
  )
}
