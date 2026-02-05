import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Navigation from "@/components/sections/Navigation"
import Header from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nova",
  description: "Connecting People, Creating Value",
  
  icons: {
    icon: '/nova_image.jpeg', 
    shortcut: '/nova_image.jpeg',
    apple: '/nova_image.jpeg',
  },
  
  openGraph: {
    images: [
      {
        url: "/nova_image.jpeg",
        width: 1200,
        height: 630,
        alt: "Nova Logo",
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    images: ["/nova_image.jpeg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/nova_image.jpeg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}