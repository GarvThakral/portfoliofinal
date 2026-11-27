import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { profile } from "@/lib/portfolio-data"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${profile.name} | AI & ML Engineer · Full-Stack Developer`,
  description: `${profile.summary} Explore Herth, VisionForge, LeadIntel, Influence OS, and D2B.`,
  openGraph: {
    title: `${profile.name} | AI & ML Engineer`,
    description: profile.summary,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
