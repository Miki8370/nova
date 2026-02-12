"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const featuredServices = [
  {
    title: "HR Supply & Management",
    description: "Skilled manpower solutions tailored to your business needs.",
    image: "/hr-supply.jpg",
  },
  {
    title: "Cleaning & Security",
    description: "Safe, secure, and hygienic environments for your organization.",
    image: "/cleaning-security.jpg",
  },
  {
    title: "Logistics Services",
    description: "Reliable workforce and operational logistics support.",
    image: "/logistics.jpg",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">

        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Core Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Reliable workforce and operational support solutions across industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-lg overflow-hidden bg-card border border-border hover:shadow-md transition-all"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/services">
          <Button size="lg" className="group bg-[#d97706] hover:bg-[#f59e0b] text-white">
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
