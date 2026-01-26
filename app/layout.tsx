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
  title: "Madison - Technology Consulting & AI Solutions",
  description:
    "Empowering businesses with innovative technology solutions, driving efficiency and growth across various industries.",
    generator: 'v0.app'
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
