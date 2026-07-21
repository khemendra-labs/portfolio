import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Resume</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-6">
                Download my resume to learn more about my experience and skills.
              </p>
              <Button size="lg" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Summary</h3>
              <p className="text-muted-foreground">
                Cybercrime Investigation Intern with expertise in Digital Forensics, Incident Response, 
                Vulnerability Assessment, Malware Analysis, and Security Automation. 
                Currently pursuing MCA with Cybersecurity specialization.
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Key Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Programming</h4>
                  <p className="text-muted-foreground text-sm">Python, Bash, SQL, JavaScript</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Security Tools</h4>
                  <p className="text-muted-foreground text-sm">Wireshark, Autopsy, Volatility, Burp Suite, Metasploit</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Platforms</h4>
                  <p className="text-muted-foreground text-sm">Linux, Windows, Azure, AWS</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Focus Areas</h4>
                  <p className="text-muted-foreground text-sm">DFIR, VAPT, Malware Analysis, Security Automation</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
