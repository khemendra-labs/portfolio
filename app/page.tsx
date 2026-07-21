'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Bug, Lock, FileText, Github, ExternalLink, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    name: 'OIntel',
    problem: 'Lack of centralized OSINT gathering for threat intelligence',
    solution: 'Automated OSINT collection and analysis framework',
    technologies: ['Python', 'APIs', 'Data Analysis'],
    securityArea: 'Threat Intelligence',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    name: 'NetScan',
    problem: 'Manual network reconnaissance is time-consuming',
    solution: 'Automated network scanning and vulnerability detection',
    technologies: ['Python', 'Nmap', 'Scapy'],
    securityArea: 'Network Security',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    name: 'Firebase DFIR Toolkit',
    problem: 'Limited tools for Firebase incident response',
    solution: 'Comprehensive toolkit for Firebase forensics',
    technologies: ['Python', 'Firebase API', 'Forensics'],
    securityArea: 'DFIR',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    name: 'Ubuntu Hardening Scripts',
    problem: 'Manual server hardening is error-prone',
    solution: 'Automated security hardening for Ubuntu servers',
    technologies: ['Bash', 'CIS Benchmarks', 'Security'],
    securityArea: 'System Hardening',
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
]

const securityBadges = [
  { name: 'DFIR', icon: Shield },
  { name: 'Incident Response', icon: Bug },
  { name: 'Vulnerability Assessment', icon: Lock },
  { name: 'Malware Analysis', icon: FileText },
  { name: 'Security Automation', icon: Shield },
]

const skills = {
  programming: ['Python', 'Bash', 'SQL', 'JavaScript'],
  securityTools: ['Wireshark', 'Autopsy', 'Volatility', 'Burp Suite', 'Metasploit'],
  platforms: ['Linux', 'Windows', 'Azure', 'AWS'],
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-primary">KHEMENDRA</span> LABS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Cybersecurity Research & Engineering Portfolio
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Breaking systems ethically, building security relentlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projects">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/reports">
                  Read Reports
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Card */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl">Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Role</h3>
                  <p className="text-muted-foreground">Cybercrime Investigation Intern</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">MCA Cybersecurity Specialization</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Focus Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Digital Forensics', 'Incident Response', 'VAPT', 'Malware Analysis', 'Security Automation'].map((area) => (
                      <Badge key={area} variant="secondary">{area}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Security Focus Badges */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Security Focus Areas</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {securityBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:border-primary transition-colors">
                  <CardContent className="pt-6">
                    <badge.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="font-medium">{badge.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Security tools and research projects</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <Badge variant="outline" className="w-fit">{project.securityArea}</Badge>
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
                          <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Research</h2>
            <p className="text-muted-foreground">Latest reports, labs, and blog posts</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">Latest Report</CardTitle>
                  <CardDescription>Windows Memory Forensics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Analysis of malware persistence mechanisms using Volatility 3
                  </p>
                  <Button size="sm" variant="outline" asChild className="w-full">
                    <Link href="/reports">
                      Read Report
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">Latest Lab</CardTitle>
                  <CardDescription>Ransomware Analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Static and dynamic analysis of LockBit 3.0 ransomware sample
                  </p>
                  <Button size="sm" variant="outline" asChild className="w-full">
                    <Link href="/labs">
                      View Lab
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">Latest Blog Post</CardTitle>
                  <CardDescription>Threat Hunting Techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Building effective threat hunting queries for SIEM platforms
                  </p>
                  <Button size="sm" variant="outline" asChild className="w-full">
                    <Link href="/blog">
                      Read Post
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Programming</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Security Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.securityTools.map((tool) => (
                      <Badge key={tool} variant="secondary">{tool}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.platforms.map((platform) => (
                      <Badge key={platform} variant="secondary">{platform}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in collaboration or have a security project? Let's discuss.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
