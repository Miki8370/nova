import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Header from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"

import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://novahrsm.com"),

  title: {
    default: "Nova HR SM | HR Consulting & Outsourcing Services in Ethiopia",
    template: "%s | Nova HR SM",
  },

  description:
    "Nova HR SM provides professional HR consulting, recruitment, employee training, and HR outsourcing services in Ethiopia. We help businesses build strong and productive teams.",

  keywords: [
    "HR consulting Ethiopia",
    "HR outsourcing Ethiopia",
    "Recruitment services Ethiopia",
    "Human resource management Ethiopia",
    "Employee training Ethiopia",
  ],

  icons: {
    icon: "/nova_image.jpeg",
    shortcut: "/nova_image.jpeg",
    apple: "/nova_image.jpeg",
  },

  openGraph: {
    title: "Nova HR SM | HR Services in Ethiopia",
    description:
      "Professional HR consulting, recruitment, training and outsourcing services tailored for Ethiopian businesses.",
    url: "https://novahrsm.com",
    siteName: "Nova HR SM",
    images: [
      {
        url: "/nova_image.jpeg",
        width: 1200,
        height: 630,
        alt: "Nova HR SM Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nova HR SM | HR Consulting Ethiopia",
    description:
      "Expert HR consulting, recruitment and outsourcing services in Ethiopia.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nova HR SM",
            url: "https://novahrsm.com",
            logo: "https://novahrsm.com/nova_image.jpeg",
            description:
              "HR consulting, recruitment and outsourcing services in Ethiopia.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "ET",
            },
          }),
  }}
/>
        
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