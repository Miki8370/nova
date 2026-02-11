"use client"

import { motion } from "framer-motion"
import { Target, Shield, Zap } from "lucide-react"

const impactAreas = [
  {
    title: "Talent Alignment",
    description: "Finding the talent that aligns with your mission",
    icon: Target,
  },
  {
    title: "Legal Compliance",
    description: "Ensuring all HR practices meet the 1156/2019 Labor Proclamation standards.",
    icon: Shield,
  },
  {
    title: "Performance Excellence",
    description: "Building systems that reward and drive results",
    icon: Zap,
  },
]

export default function ImpactAreas() {
  return (
    <section className="py-20" style={{ backgroundImage: 'linear-gradient(to bottom, var(--background), var(--nova-gradient-dark))' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Impact Areas
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={area.title}
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
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
