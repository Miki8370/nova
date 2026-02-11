"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    title: "Talent Sourcing & Strategic Recruitment",
    description: "We identify and attract the highest-caliber talent through a merit-based and transparent selection process.",
    features: ["Competitive Sourcing", "Rigorous Screening", "Seamless Appointment", "Legal Compliance"],
    image: "/talent-sourcing.jpg",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M12 12 2.5 2.5" />
        <path d="m2 2 20 20" />
      </svg>
    ),
  },
  {
    title: "Workforce Supply & Management",
    description: "Nova handles the complexities of labor management so you can focus on your core operations.",
    features: ["Scalable Manpower", "Contract Administration", "Payroll & Benefits", "Attendance & Discipline"],
    image: "/workforce-management.jpg",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="m7 8-4 4 4 4" />
        <path d="m17 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    title: "Training & Professional Development",
    description: "A competent workforce is an organization's greatest asset. Programs designed to increase productivity and expertise.",
    features: ["Induction Training", "Skill Upgrading", "Leadership Development", "Industry Workshops"],
    image: "/training-development.jpg",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  {
    title: "Job Classification & Salary Structuring",
    description: "Build a fair and motivating internal structure that attracts and retains top talent.",
    features: ["Job Descriptions & Specifications", "Scientific Job Evaluation", "Competitive Salary Scales", "Market Data Analysis"],
    image: "/job-classification.jpg",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M12 12 2.5 2.5" />
        <path d="m2 2 20 20" />
      </svg>
    ),
  },
  {
    title: "Performance Management & Evaluation",
    description: "Link individual performance to your company's strategic goals with transparent systems.",
    features: ["KPI Development", "Appraisal Systems", "Performance-Linked Rewards", "Strategic Alignment"],
    image: "/performance-management.jpg",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="m7 8-4 4 4 4" />
        <path d="m17 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    title: "HR Consulting & Policy Advisory",
    description: "Leverage our expertise to build your own robust HR infrastructure and ensure compliance.",
    features: ["Manual Development", "Audit & Compliance", "Operational Support", "Strategic Advisory"],
    image: "/hr-consulting.jpg",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="py-20" style={{ backgroundImage: 'linear-gradient(to bottom, var(--nova-gradient-dark), var(--background))' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Human Resource Management for Sustainable Growth</h2>
          <p className="text-lg text-muted-foreground">
            We don't just supply staff; we manage the systems that make them successful. Nova HR Supply & Management PLC provides end-to-end solutions tailored to your organizational needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-lg overflow-hidden bg-card hover:bg-card/80 transition-all border ${
                index % 2 === 0
                  ? 'border-[#0d8b8b]/30 hover:border-[#0d8b8b]'
                  : 'border-[#d97706]/30 hover:border-[#d97706]'
              }`}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <service.icon className={`w-12 h-12 ${index % 2 === 0 ? 'text-[#0d8b8b]' : 'text-[#d97706]'}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <ArrowRight className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform bg-transparent">
                  Learn More
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
