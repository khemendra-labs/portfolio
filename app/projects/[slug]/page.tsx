import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // This will be replaced with Keystatic data fetching
  const project = {
    title: 'OIntel',
    description: 'Automated OSINT collection and analysis framework for threat intelligence',
    problem: 'Security analysts spend hours manually collecting OSINT data from various sources, leading to missed threats and delayed response times.',
    solution: 'OIntel automates the collection, enrichment, and analysis of OSINT data from multiple sources, providing actionable intelligence in real-time.',
    technologies: ['Python', 'Elasticsearch', 'Docker', 'Kubernetes'],
    securityArea: 'Threat Intelligence',
    github: 'https://github.com/khemendra-labs/ointel',
    demo: null,
    featured: true,
    status: 'Active',
    date: '2024-01-15',
    content: `
# OIntel - OSINT Intelligence Framework

## Overview

OIntel is a comprehensive open-source intelligence (OSINT) collection and analysis framework designed for cybersecurity professionals.

## Features

- **Automated Collection**: Gather data from multiple sources automatically
- **Real-time Enrichment**: Enrich indicators with context and threat intelligence
- **Custom Workflows**: Build custom collection and analysis workflows
- **API Integration**: RESTful API for integration with existing tools
- **Dashboard**: Visual dashboard for monitoring and analysis

## Architecture

The system consists of:
1. **Collection Agents**: Modular collectors for different data sources
2. **Processing Pipeline**: Data normalization and enrichment
3. **Storage Layer**: Elasticsearch for fast search and retrieval
4. **API Layer**: RESTful API for external integrations
5. **Dashboard**: React-based visualization interface

## Installation

\`\`\`bash
git clone https://github.com/khemendra-labs/ointel
cd ointel
docker-compose up -d
\`\`\`

## Usage

### Basic Collection

\`\`\`python
from ointel import Collector

collector = Collector()
collector.collect(['shodan', 'virustotal', 'censys'])
\`\`\`

### Custom Workflows

\`\`\`python
from ointel import Workflow

workflow = Workflow()
workflow.add_step('shodan', query='port:22')
workflow.add_step('virustotal', enrich=True)
workflow.execute()
\`\`\`

## Data Sources

- Shodan
- VirusTotal
- Censys
- SecurityTrails
- WhoisXML
- BinaryEdge
- And more...

## License

MIT License - See LICENSE file for details
    `,
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">{project.securityArea}</Badge>
              <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                {project.status}
              </Badge>
              {project.featured && <Badge variant="outline">Featured</Badge>}
            </div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">{project.description}</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{project.date}</span>
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.problem}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.solution}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            {project.demo && (
              <Button variant="outline" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>

          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br />') }} />
          </div>
        </article>
      </div>
    </div>
  )
}
