import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jae-Sik Jeong - Software Engineer & AI Researcher",
  description:
    "Software Engineer passionate about Spatial AI, Time-series Prediction, and Computer Vision Applications. Explore my projects and research in machine learning and infrastructure.",
  keywords: [
    "Software Engineer",
    "AI",
    "Machine Learning",
    "Spatial AI",
    "Computer Vision",
    "Time-series Prediction",
    "Python",
    "PyTorch",
    "PostgreSQL",
  ],
  authors: [{ name: "Jae-Sik Jeong" }],
  creator: "Jae-Sik Jeong",
  openGraph: {
    title: "Jae-Sik Jeong - Software Engineer & AI Researcher",
    description:
      "Software Engineer passionate about Spatial AI, Time-series Prediction, and Computer Vision Applications.",
    url: "https://jaesik.github.io",
    siteName: "Jae-Sik Jeong Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jae-Sik Jeong - Software Engineer & AI Researcher",
    description:
      "Software Engineer passionate about Spatial AI, Time-series Prediction, and Computer Vision Applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
