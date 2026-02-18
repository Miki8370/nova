"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredServices = [
  {
    title: "HR Supply & Management",
    description: "Skilled manpower solutions tailored to your business needs.",
    icon: Users,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Cleaning & Security",
    description: "Safe, secure, and hygienic environments for your organization.",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Logistics Services",
    description: "Reliable workforce and operational logistics support.",
    icon: Truck,
    gradient: "from-orange-500 to-amber-400",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">

        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
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
          {featuredServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                
                {/* Icon background circle */}
                <div className="relative p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent group-hover:w-full transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Link href="/services">
            <Button size="lg" className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all">
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
