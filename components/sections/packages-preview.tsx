"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const featuredPackages = [
  {
    title: "Talent Sourcing & Recruitment Package",
    description: "Complete end-to-end recruitment and onboarding solution.",
    image: "/talent-sourcing.jpg",
  },
  {
    title: "Workforce Supply & Management Package",
    description: "Comprehensive workforce administration and payroll management.",
    image: "/workforce-management.jpg",
  },
  {
    title: "Training & Development Package",
    description: "Professional growth and productivity enhancement programs.",
    image: "/training-development.jpg",
  },
]

export default function PackagesPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">

        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Featured Packages
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Structured HR packages tailored to support your organization’s success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-card border border-border"
            >
              <div className="relative h-40 w-full overflow-hidden bg-muted">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link href="/packages">
          <Button size="lg" className="group bg-[#d97706] hover:bg-[#f59e0b] text-white">
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
