import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import ThreeBackground from '@/components/three-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khemendra Labs | Cybersecurity Research & Engineering',
  description: 'Cybersecurity Research & Engineering Portfolio - DFIR investigations, digital forensics research, vulnerability research, security tooling, malware analysis, incident response, and security automation.',
  keywords: ['cybersecurity', 'DFIR', 'digital forensics', 'malware analysis', 'incident response', 'vulnerability research', 'security automation'],
  authors: [{ name: 'Khemendra' }],
  openGraph: {
    title: 'Khemendra Labs | Cybersecurity Research & Engineering',
    description: 'Cybersecurity Research & Engineering Portfolio',
    type: 'website',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ThreeBackground />
          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
