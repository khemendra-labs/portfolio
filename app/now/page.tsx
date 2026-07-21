import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function NowPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Now</h1>
        <p className="text-muted-foreground mb-8">
          What I'm currently focused on
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Focus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Work</h3>
                <p className="text-muted-foreground">
                  Working as a Cybercrime Investigation Intern, focusing on digital forensics cases, 
                  malware analysis, and incident response investigations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Pursuing MCA with Cybersecurity Specialization. Learning advanced topics in 
                  network security, malware analysis, and digital forensics.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Certification</h3>
                <p className="text-muted-foreground">
                  Preparing for NCFL (National Cyber Forensics Lab) certification. 
                  Focusing on memory forensics, network forensics, and advanced malware analysis.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">OIntel</h3>
                <p className="text-muted-foreground">
                  Enhancing the OSINT framework with new data sources and improved analysis capabilities.
                </p>
                <Badge variant="outline" className="mt-2">Active Development</Badge>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Malware Analysis Sandbox</h3>
                <p className="text-muted-foreground">
                  Building an automated malware analysis environment with behavior monitoring and reporting.
                </p>
                <Badge variant="outline" className="mt-2">In Development</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Technical Skills</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Advanced memory forensics with Volatility 3</li>
                  <li>Malware reverse engineering with Ghidra</li>
                  <li>Threat hunting techniques and SIEM queries</li>
                  <li>Cloud security and Azure/AWS security services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Research Areas</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Ransomware analysis and detection</li>
                  <li>Living off the land techniques</li>
                  <li>Fileless malware detection</li>
                  <li>Threat intelligence automation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Practical Malware Analysis</li>
                <li>The Art of Memory Forensics</li>
                <li>RTFM: Red Team Field Manual</li>
                <li>Blue Team Field Manual</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
