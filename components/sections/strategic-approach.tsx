"use client"

import { motion } from "framer-motion"
import { Briefcase, DollarSign, TrendingUp } from "lucide-react"

const strategies = [
  {
    title: "Scientific Job Classification",
    description: "Defining clear roles and responsibilities.",
    icon: Briefcase,
  },
  {
    title: "Fair Salary Structuring",
    description: "Implementing competitive, grade-based compensation.",
    icon: DollarSign,
  },
  {
    title: "Performance Tracking",
    description: "Using SMART KPIs to drive organizational objectives.",
    icon: TrendingUp,
  },
]

export default function StrategicApproach() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a4d4d]/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Strategic Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We move beyond simple administration to provide a holistic HR experience.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon
            return (
              <motion.div
                key={strategy.title}
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
                <h3 className="text-xl font-semibold mb-3">{strategy.title}</h3>
                <p className="text-muted-foreground">{strategy.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
