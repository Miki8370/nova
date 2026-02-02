import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Navigation from "@/components/sections/Navigation"
import Header from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import Image from "next/image"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nova",
  description: "Connecting People, Creating Value",
  generator: 'v0.app',
  
  openGraph: {
    images: [
      {
        url: "/nova_logo.png", // Direct access from public folder
        width: 1200,
        height: 630,
        alt: "Nova Logo",
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    images: ["/nova_logo.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
