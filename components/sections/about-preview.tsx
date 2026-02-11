"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

export default function AboutUsPreview() {
  const coreValues = [
    { title: "Excellence", icon: "⭐" },
    { title: "Innovation", icon: "💡" },
    { title: "Accountability", icon: "🎯" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-background via-background to-[#0a4d4d]/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About NOVA</h2>
            <p className="text-lg text-muted-foreground">
              Professional workforce solutions dedicated to connecting people and creating value
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {/* Company Overview */}
            <div className="p-6 rounded-lg bg-card border border-[#0d8b8b]/30 hover:border-[#0d8b8b] transition-colors">
              <div className="mb-4 inline-block p-2 bg-[#0d8b8b]/10 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#0d8b8b]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Who We Are</h3>
              <p className="text-sm text-muted-foreground mb-4">
                NOVA is a professional workforce solutions company established on December 12, 2025. Founded by five shareholders with a shared vision, we deliver efficient, reliable, and structured HR solutions to businesses across Ethiopia.
              </p>
              <p className="text-xs text-muted-foreground">
                Headquartered in Addis Ababa at TAF Energies Building, providing comprehensive workforce management services.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="p-6 rounded-lg bg-card border border-[#d97706]/30 hover:border-[#d97706] transition-colors">
              <div className="mb-4 inline-block p-2 bg-[#d97706]/10 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-[#d97706]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To deliver professional, efficient, and reliable workforce solutions that support business growth, improve productivity, and maintain high service standards.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6">Core Values</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {coreValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`p-6 rounded-lg bg-card border text-center group cursor-pointer transition-colors ${
                    i % 2 === 0 
                      ? 'border-[#0d8b8b]/30 hover:border-[#0d8b8b]' 
                      : 'border-[#d97706]/30 hover:border-[#d97706]'
                  }`}
                >
                  <p className="text-3xl mb-3">{value.icon}</p>
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What We Do Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 p-8 rounded-lg bg-card border border-[#0d8b8b]/30 hover:border-[#0d8b8b] transition-colors"
          >
            <h3 className="text-2xl font-semibold mb-6">What We Offer</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {[
                "Recruitment and Staff Outsourcing",
                "Workforce Supervision & Management",
                "Payroll Processing & Compliance",
                "Employee Training & Development",
                "HR Administration & Documentation",
                "Security & Cleaning Services",
                "Warehouse & Logistics Support",
                "Training & Consultancy",
              ].map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0d8b8b] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <Button asChild className="bg-[#0d8b8b] hover:bg-[#0da9a9] text-white">
              <Link href="/about">
                View Our Full Story
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
