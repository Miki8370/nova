"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const packages = [
  {
    title: "Talent Sourcing & Strategic Recruitment Package",
    description: "A complete recruitment package designed to identify, evaluate, and onboard top-tier talent efficiently.",
    features: ["Competitive Sourcing", "Rigorous Screening", "Seamless Appointment", "Legal Compliance"],
    image: "/talent-sourcing.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M12 12 2.5 2.5" />
        <path d="m2 2 20 20" />
      </svg>
    ),
  },
  {
    title: "Workforce Supply & Management Package",
    description: "A structured workforce solution package that handles labor administration, payroll, and performance.",
    features: ["Scalable Manpower", "Contract Administration", "Payroll & Benefits", "Attendance & Discipline"],
    image: "/workforce-management.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m7 8-4 4 4 4" />
        <path d="m17 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    title: "Training & Professional Development Package",
    description: "A performance-driven development package focused on increasing productivity and leadership capacity.",
    features: ["Induction Training", "Skill Upgrading", "Leadership Development", "Industry Workshops"],
    image: "/training-development.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    title: "Job Classification & Salary Structuring Package",
    description: "A strategic compensation package designed to create fair structures that attract and retain talent.",
    features: ["Job Descriptions & Specifications", "Scientific Job Evaluation", "Competitive Salary Scales", "Market Data Analysis"],
    image: "/job-classification.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M12 12 2.5 2.5" />
        <path d="m2 2 20 20" />
      </svg>
    ),
  },
  {
    title: "Performance Management & Evaluation Package",
    description: "A structured performance package aligning KPIs, appraisals, and rewards with company strategy.",
    features: ["KPI Development", "Appraisal Systems", "Performance-Linked Rewards", "Strategic Alignment"],
    image: "/performance-management.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m7 8-4 4 4 4" />
        <path d="m17 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    title: "HR Consulting & Policy Advisory Package",
    description: "A complete HR advisory package to build compliant and scalable HR infrastructures.",
    features: ["Manual Development", "Audit & Compliance", "Operational Support", "Strategic Advisory"],
    image: "/hr-consulting.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
]

export default function Packages() {
  return (
    <section className="py-20" style={{ backgroundImage: 'linear-gradient(to bottom, var(--nova-gradient-dark), var(--background))' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our HR Solution Packages</h2>
          <p className="text-lg text-muted-foreground">
            Explore our structured and scalable HR packages designed to support sustainable growth and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-card hover:bg-card/80 transition-all border border-border"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <pkg.icon className="w-12 h-12 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{pkg.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{pkg.description}</p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <ArrowRight className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform bg-transparent">
                  View Package Details
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
