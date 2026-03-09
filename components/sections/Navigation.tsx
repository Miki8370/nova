'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, Search } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'

const Packages = [
  {
    title: "Talent Sourcing & Strategic Recruitment Package",
    description: "A complete recruitment package designed to identify, evaluate, and onboard top-tier talent efficiently.",
    href: '/packages',
  },
  {
    title: "Workforce Supply & Management Package",
    description: "A structured workforce solution package that handles labor administration, payroll, and performance.",
    href: '/packages',
  },
  {
    title: "Training & Professional Development Package",
    description: "A performance-driven development package focused on increasing productivity and leadership capacity.",
    href: '/packages',
  },
  {
    title: "Job Classification & Salary Structuring Package",
    description: "A strategic compensation package designed to create fair structures that attract and retain talent.",
    href: '/packages',
  },
  {
    
    title: "Performance Management & Evaluation Package",
    description: "A structured performance package aligning KPIs, appraisals, and rewards with company strategy.",
    href: '/packages',
  }
]

const services = [
  {
    title: 'HR Supply & Management',
    description: 'Skilled manpower solutions tailored to your business needs.',
    href: '/services',
  },
  {
    title: 'Cleaning & Security',
    description: 'Safe, secure, and hygienic environments for your organization.',
    href: '/services',
  },
  {
    title: 'Logistics Services',
    description: 'Reliable workforce and operational logistics support.',
    href: '/services',
  },
]

const events = [
  {
    title: 'Upcoming Events',
    description: 'Explore our latest HR events and networking sessions',
    href: '/events',
  },
  {
    title: 'Workshops',
    description: 'Professional development and training workshops',
    href: '/events',
  },
  {
    title: 'Conferences',
    description: 'Industry conferences and business networking events',
    href: '/events',
  },
]

const homeNav = [
  {
    title: 'Welcome to Nova HR',
    description: 'Strategic Human Resource Management for Sustainable Growth',
    href: '/',
  },
  {
    title: 'Featured Services',
    description: 'Explore our core HR solutions and offerings',
    href: '/',
  },
]

const aboutNav = [
  {
    title: 'Our Story',
    description: 'Discover Nova HR\'s mission, vision, and values',
    href: '/about',
  },
  {
    title: 'Our Team',
    description: 'Meet the professionals behind Nova HR',
    href: '/about',
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/40' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 -ml-4">
            <Image
              src="/nova_logo0.png"
              alt="Nova HR Logo"
              width={100}
              height={50}
              priority
              className="h-10 md:h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  isActive('/') 
                    ? 'text-[#f59e0b] border-b-[#f59e0b]' 
                    : 'text-[#d97706] border-b-transparent hover:text-[#f59e0b]'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  isActive('/about') 
                    ? 'text-[#f59e0b] border-b-[#f59e0b]' 
                    : 'text-[#d97706] border-b-transparent hover:text-[#f59e0b]'
                }`}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  isActive('/services') 
                    ? 'text-[#f59e0b] border-b-[#f59e0b]' 
                    : 'text-[#d97706] border-b-transparent hover:text-[#f59e0b]'
                }`}
              >
                Services
              </Link>
              <Link
                href="/packages"
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  isActive('/packages') 
                    ? 'text-[#f59e0b] border-b-[#f59e0b]' 
                    : 'text-[#d97706] border-b-transparent hover:text-[#f59e0b]'
                }`}
              >
                Packages
              </Link>
              <Link
                href="/events"
                className={`text-sm font-medium transition-colors pb-1 border-b-2 ${
                  isActive('/events') 
                    ? 'text-[#f59e0b] border-b-[#f59e0b]' 
                    : 'text-[#d97706] border-b-transparent hover:text-[#f59e0b]'
                }`}
              >
                Events
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="relative hidden lg:flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-40 px-4 py-2 rounded-md bg-background/50 border border-border/40 text-sm placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <Search className="absolute right-3 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search Icon Mobile */}
            <button className="md:hidden text-muted-foreground hover:text-foreground transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Desktop Contact Button */}
            <Button asChild className="hidden md:flex bg-[#d97706] hover:bg-[#f59e0b] text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                {/* Add SheetTitle for accessibility (visually hidden) */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu for Nova HR website
                </SheetDescription>
                
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-1 px-4 py-2 rounded-md bg-background border border-border/40 text-sm placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                    <Button variant="ghost" size="icon">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>

                  <nav className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className={`text-lg font-medium transition-colors pb-2 border-b-2 ${
                        isActive('/') 
                          ? 'text-[#f59e0b] border-b-[#f59e0b]' 
                          : 'text-[#d97706] border-b-transparent hover:text-[#f59e0b]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className={`text-lg font-medium transition-colors pb-2 border-b-2 ${
                        isActive('/about') 
                          ? 'text-[#f59e0b] border-b-[#f59e0b]' 
                          : 'text-[#d97706] border-b-transparent hover:text-[#f59e0b]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/services"
                      className={`text-lg font-medium transition-colors pb-2 border-b-2 ${
                        isActive('/services') 
                          ? 'text-[#f59e0b] border-b-[#f59e0b]' 
                          : 'text-[#d97706] border-b-transparent hover:text-[#f59e0b]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </Link>
                    <Link
                      href="/packages"
                      className={`text-lg font-medium transition-colors pb-2 border-b-2 ${
                        isActive('/packages') 
                          ? 'text-[#f59e0b] border-b-[#f59e0b]' 
                          : 'text-[#d97706] border-b-transparent hover:text-[#f59e0b]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Packages
                    </Link>
                    <Link
                      href="/events"
                      className={`text-lg font-medium transition-colors pb-2 border-b-2 ${
                        isActive('/events') 
                          ? 'text-[#f59e0b] border-b-[#f59e0b]' 
                          : 'text-[#d97706] border-b-transparent hover:text-[#f59e0b]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Events
                    </Link>
                  </nav>

                  <Button asChild className="w-full bg-[#d97706] hover:bg-[#f59e0b] text-white">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}