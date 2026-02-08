'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X, Search } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

const services = [
  {
    title: 'Talent Sourcing',
    description: 'Identify and attract high-caliber talent through merit-based selection',
    href: '/services',
  },
  {
    title: 'Workforce Management',
    description: 'Handle labor complexities and contract administration',
    href: '/services',
  },
  {
    title: 'Training & Development',
    description: 'Increase productivity with induction and skill upgrading programs',
    href: '/services',
  },
  {
    title: 'Job Classification',
    description: 'Build fair internal structures with competitive salary scales',
    href: '/services',
  },
  {
    title: 'Performance Management',
    description: 'Link individual performance to strategic goals',
    href: '/services',
  },
  {
    title: 'HR Consulting',
    description: 'Build robust HR infrastructure and ensure compliance',
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
              src="/nova_logo.png"
              alt="Nova HR Logo"
              width={100}
              height={50}
              priority
              className="h-10 md:h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#0d8b8b] hover:text-[#0da9a9] data-[state=open]:text-[#0da9a9]">Home</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {homeNav.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink asChild>
                            <div className="cursor-pointer rounded-md p-3 hover:bg-accent transition-colors">
                              <h4 className="text-sm font-semibold leading-none mb-1">
                                {item.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#d97706] hover:text-[#f59e0b] data-[state=open]:text-[#f59e0b]">About Us</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {aboutNav.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink asChild>
                            <div className="cursor-pointer rounded-md p-3 hover:bg-accent transition-colors">
                              <h4 className="text-sm font-semibold leading-none mb-1">
                                {item.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#0d8b8b] hover:text-[#0da9a9] data-[state=open]:text-[#0da9a9]">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink asChild>
                            <div className="cursor-pointer rounded-md p-3 hover:bg-accent transition-colors">
                              <h4 className="text-sm font-semibold leading-none mb-1">
                                {service.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#d97706] hover:text-[#f59e0b] data-[state=open]:text-[#f59e0b]">Events</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {events.map((event) => (
                        <Link
                          key={event.title}
                          href={event.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink asChild>
                            <div className="cursor-pointer rounded-md p-3 hover:bg-accent transition-colors">
                              <h4 className="text-sm font-semibold leading-none mb-1">
                                {event.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {event.description}
                              </p>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
            <Button asChild className="hidden md:flex">
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
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/services"
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Services
                    </Link>
                    <Link
                      href="/events"
                      className="text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Events
                    </Link>
                  </nav>

                  <Button asChild className="w-full">
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
