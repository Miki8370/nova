"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nova HR</h3>
            <p className="text-sm text-muted-foreground">
              Strategic Human Resource Management for Sustainable Growth
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted-foreground transition-colors ${
                      index % 2 === 0 ? 'hover:text-[#0d8b8b]' : 'hover:text-[#d97706]'
                    }`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-[#0d8b8b] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-[#d97706] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-sm text-muted-foreground hover:text-[#0d8b8b] transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-[#d97706] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-[#0d8b8b] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-[#0d8b8b] transition-colors">
                  Talent Sourcing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-[#d97706] transition-colors">
                  Workforce Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-[#0d8b8b] transition-colors">
                  Training & Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-[#d97706] transition-colors">
                  HR Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Let's Connect!</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Connect with entrepreneurs, build your network, make great business.
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:contact@novahr.com" className="text-sm text-muted-foreground hover:text-[#0d8b8b] transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@novahr.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nova HR Supply & Management PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
