'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'

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
    href: '/event',
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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
      <div className="flex items-center justify-between h-20">
  <Link href="/" className="flex items-center flex-shrink-0">
    <Image
      src="/nova_logo.png"
      alt="Nova HR Logo"
      width={240}
      height={96}
      priority
      className="h-20 md:h-24 w-auto" // Matches or slightly exceeds nav height
    />
  </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Events</NavigationMenuTrigger>
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

          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
