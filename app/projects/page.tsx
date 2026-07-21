'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'OIntel',
    slug: 'ointel',
    description: 'Automated OSINT collection and analysis framework for threat intelligence',
    problem: 'Lack of centralized OSINT gathering for threat intelligence',
    solution: 'Automated OSINT collection and analysis framework',
    technologies: ['Python', 'APIs', 'Data Analysis', 'Threat Intelligence'],
    securityArea: 'Threat Intelligence',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    status: 'Active',
  },
  {
    name: 'NetScan',
    slug: 'netscan',
    description: 'Automated network scanning and vulnerability detection tool',
    problem: 'Manual network reconnaissance is time-consuming',
    solution: 'Automated network scanning and vulnerability detection',
    technologies: ['Python', 'Nmap', 'Scapy', 'Network Security'],
    securityArea: 'Network Security',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    status: 'Active',
  },
  {
    name: 'Firebase DFIR Toolkit',
    slug: 'firebase-dfir-toolkit',
    description: 'Comprehensive toolkit for Firebase digital forensics and incident response',
    problem: 'Limited tools for Firebase incident response',
    solution: 'Comprehensive toolkit for Firebase forensics',
    technologies: ['Python', 'Firebase API', 'Forensics', 'Cloud Security'],
    securityArea: 'DFIR',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
    status: 'Active',
  },
  {
    name: 'Ubuntu Hardening Scripts',
    slug: 'ubuntu-hardening-scripts',
    description: 'Automated security hardening scripts for Ubuntu servers based on CIS benchmarks',
    problem: 'Manual server hardening is error-prone',
    solution: 'Automated security hardening for Ubuntu servers',
    technologies: ['Bash', 'CIS Benchmarks', 'Security', 'DevSecOps'],
    securityArea: 'System Hardening',
    github: 'https://github.com',
    demo: null,
    featured: true,
    status: 'Stable',
  },
  {
    name: 'Malware Analysis Sandbox',
    slug: 'malware-analysis-sandbox',
    description: 'Isolated environment for safe malware analysis and behavior monitoring',
    problem: 'Need for safe malware analysis environment',
    solution: 'Automated sandbox with behavior monitoring',
    technologies: ['Python', 'Virtualization', 'API Monitoring', 'Behavior Analysis'],
    securityArea: 'Malware Analysis',
    github: 'https://github.com',
    demo: null,
    featured: false,
    status: 'In Development',
  },
  {
    name: 'SIEM Dashboard',
    slug: 'siem-dashboard',
    description: 'Custom dashboard for security event monitoring and alerting',
    problem: 'Complex SIEM interfaces require customization',
    solution: 'Streamlined dashboard for critical alerts',
    technologies: ['React', 'Python', 'Elasticsearch', 'Security Monitoring'],
    securityArea: 'Security Operations',
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
    status: 'Beta',
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = React.useState('All')

  const securityAreas = ['All', ...Array.from(new Set(projects.map((p) => p.securityArea)))]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter((p) => p.securityArea === filter)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground mb-8">
            Security tools, research projects, and open-source contributions
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {securityAreas.map((area) => (
              <Button
                key={area}
                variant={filter === area ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(area)}
              >
                {area}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      {project.featured && (
                        <Badge variant="default">Featured</Badge>
                      )}
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-1">Problem</p>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Solution</p>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <Badge variant="outline">{project.securityArea}</Badge>
                      <Badge variant={project.status === 'Active' || project.status === 'Stable' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
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
