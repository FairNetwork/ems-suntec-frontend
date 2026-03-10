import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { siteConfig } from "@/constants/seo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.siteName} | ${siteConfig.defaultTitle}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.companyName, url: siteConfig.url }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "renewable energy",
  keywords: [
    "Photovoltaik",
    "PV-Anlage",
    "Solaranlage",
    "Solarteur",
    "Kreis Steinfurt",
    "Muensterland",
    "Emsdetten",
    "Muenster",
    "Ems Suntec",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.siteName} | ${siteConfig.defaultTitle}`,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: "/header-image.png",
        width: 1920,
        height: 1080,
        alt: "Photovoltaik von Ems Suntec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.siteName} | ${siteConfig.defaultTitle}`,
    description: siteConfig.defaultDescription,
    images: ["/header-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
