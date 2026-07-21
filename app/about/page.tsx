import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Who I Am</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                I am a cybersecurity researcher and engineer specializing in digital forensics, incident response, and vulnerability assessment. Currently pursuing MCA with cybersecurity specialization.
              </p>
              <p className="text-muted-foreground">
                My work focuses on building security tools, analyzing malware, conducting DFIR investigations, and contributing to the cybersecurity community through research and open-source projects.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Role</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">Cybercrime Investigation Intern</p>
              <p className="text-muted-foreground mt-2">
                Working on digital forensics cases, malware analysis, and incident response investigations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-lg font-semibold">MCA - Cybersecurity Specialization</p>
                <p className="text-muted-foreground">Currently pursuing</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Digital Forensics</Badge>
                  <Badge variant="secondary">Network Security</Badge>
                  <Badge variant="secondary">Malware Analysis</Badge>
                  <Badge variant="secondary">Ethical Hacking</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To advance cybersecurity through research, tool development, and knowledge sharing. I believe in ethical security practices and building systems that protect against evolving threats.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Ethical security practices</li>
                <li>Knowledge sharing and community contribution</li>
                <li>Continuous learning and research</li>
                <li>Building secure and reliable systems</li>
                <li>Transparency in security research</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
