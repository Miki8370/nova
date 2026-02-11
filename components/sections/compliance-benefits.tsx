"use client"

import { motion } from "framer-motion"
import { Shield, Scale, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const benefits = [
  {
    title: "Reduced Legal Risk",
    description: "We handle the complexities of labor relations and contracts.",
    icon: Shield,
  },
  {
    title: "Fairness & Equity",
    description: "We ensure non-discrimination and transparency in every hiring decision.",
    icon: Scale,
  },
  {
    title: "Standardized Quality",
    description: "Our Admin Manual acts as a constitution for our operations, ensuring consistency across every project.",
    icon: CheckCircle,
  },
]

export default function ComplianceBenefits() {
  return (
    <section className="py-20" style={{ backgroundImage: 'linear-gradient(to bottom, var(--background), var(--nova-gradient-dark), var(--background))' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Compliance & Standards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            What this means for you
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-lg bg-card border hover:bg-card/80 transition-all ${
                  index % 2 === 0
                    ? 'border-[#0d8b8b]/30 hover:border-[#0d8b8b]'
                    : 'border-[#d97706]/30 hover:border-[#d97706]'
                }`}
              >
                <div className="mb-6">
                  <Icon className={`w-12 h-12 ${index % 2 === 0 ? 'text-[#0d8b8b]' : 'text-[#d97706]'}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
          
          </motion.div>
        </div>
      </div>
    </section>
  )
}
