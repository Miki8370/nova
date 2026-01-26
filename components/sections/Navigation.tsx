'use client'

import Link from 'next/link'
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

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg">Nova HR</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

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
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
