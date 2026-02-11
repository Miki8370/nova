"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a4d4d] via-background to-background">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About NOVA</h1>
          <p className="text-lg text-muted-foreground">
            Connecting People. Creating Value.
          </p>
        </div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                NOVA is a professional workforce solutions company dedicated to connecting people and creating value. Established on December 12, 2025, NOVA was founded by five shareholders with a shared vision of delivering efficient, reliable, and structured human resource solutions to businesses across Ethiopia.
              </p>
              <p className="text-muted-foreground">
                Headquartered in Addis Ababa at Ethio China Street, TAF Energies Building, we provide comprehensive HR and workforce management services tailored to meet the evolving needs of modern organizations.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/about-office.jpg"
                alt="NOVA Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="p-8 rounded-lg bg-card border">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To deliver professional, efficient, and reliable workforce solutions that support business growth, improve productivity, and maintain high service standards.
            </p>
          </div>
          <div className="p-8 rounded-lg bg-card border">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To become a trusted bridge between businesses and skilled manpower, recognized for delivering innovative and ethical HR solutions that create long-term value.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Excellence", desc: "We strive for the highest standards in recruitment, supervision, and service delivery." },
              { title: "Innovation", desc: "We continuously improve our processes and workforce solutions." },
              { title: "Accountability", desc: "We operate with transparency, integrity, and responsibility." },
              { title: "Reliability", desc: "Delivering consistent, dependable service every single time." },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-lg bg-card border hover:border-primary transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/mission-vision.jpg"
                alt="Our Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Recruitment and staff outsourcing",
                "Workforce supervision and management",
                "Payroll processing and statutory compliance",
                "Employee training and service standards development",
                "HR administration and employee documentation",
                "Cleaning and security services",
                "Warehouse handling and logistics support",
                "Training and consultancy services",
              ].map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/team-values.jpg"
                alt="Our Approach"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              {[
                { title: "Properly Recruited", desc: "Rigorous selection process ensuring quality personnel" },
                { title: "Professionally Supervised", desc: "Continuous oversight and management of workforce" },
                { title: "Fully Compliant", desc: "Adherence to Ethiopian and international labor laws" },
                { title: "Well-trained", desc: "Performance-monitored and standards-driven workforce" },
                { title: "SOP Supported", desc: "Backed by Standard Operating Procedures for consistency" },
              ].map((approach, i) => (
                <motion.div
                  key={approach.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="p-4 rounded-lg bg-card border"
                >
                  <h4 className="font-semibold mb-1">{approach.title}</h4>
                  <p className="text-sm text-muted-foreground">{approach.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* What Makes Us Different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-8 rounded-lg bg-card border"
        >
          <h2 className="text-3xl font-bold mb-6">What Makes NOVA Different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Strong focus on quality personnel selection",
              "Continuous supervision and performance follow-up",
              "Ethical and professional HR practices",
              "Commitment to efficiency, reliability, and integrity",
              "Customized workforce solutions tailored to client needs",
              "Transparent and accountable operations",
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Who We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 rounded-lg bg-card border"
        >
          <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "NGOs and Embassies",
              "Hospitality and Tourism",
              "Banks and Insurance",
              "Construction and Manufacturing",
              "Small and Medium Enterprises",
              "Residential Compounds",
              "Healthcare Organizations",
            ].map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="p-4 rounded-lg bg-accent/5 border border-accent/20 hover:border-primary transition-colors text-center"
              >
                <p className="font-medium">{client}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 text-center p-8 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-3">Our Belief</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At NOVA, we believe that people are the foundation of every successful organization. By managing workforce needs with professionalism and care, we empower businesses to focus on growth and long-term success.
          </p>
          <p className="text-xl font-semibold mt-6 text-primary">Connecting People. Creating Value.</p>
        </motion.div>
      </div>
    </section>
  )
}
