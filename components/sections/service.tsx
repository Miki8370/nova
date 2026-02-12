"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const services = [
  {
    title: "HR Supply & Management",
    description:
      "We provide skilled and semi-skilled manpower tailored to your operational needs, ensuring productivity, compliance, and efficiency.",
    features: [
      "Qualified Workforce Deployment",
      "Payroll & Administration",
      "Attendance Management",
      "Labor Law Compliance",
    ],
    image: "/hr-supply.jpg",
  },
  {
    title: "Hospitality Service",
    description:
      "Professional hospitality staff trained to deliver exceptional customer experiences in hotels, offices, and events.",
    features: [
      "Front Desk Personnel",
      "Housekeeping Staff",
      "Event Support Staff",
      "Customer Service Excellence",
    ],
    image: "/hospitality.jpg",
  },
  {
    title: "Cleaning & Security",
    description:
      "Reliable cleaning and security services designed to maintain safe, hygienic, and secure environments.",
    features: [
      "Commercial & Office Cleaning",
      "Industrial Cleaning",
      "Trained Security Guards",
      "24/7 Monitoring Support",
    ],
    image: "/cleaning-security.jpg",
  },
  {
    title: "Gardening Services",
    description:
      "Professional landscaping and garden maintenance services that enhance the beauty and sustainability of your premises.",
    features: [
      "Landscape Design",
      "Routine Garden Maintenance",
      "Irrigation Management",
      "Seasonal Planting",
    ],
    image: "/gardening.jpg",
  },
  {
    title: "Warehouse Handling",
    description:
      "Efficient warehouse workforce solutions to streamline inventory management and operational logistics.",
    features: [
      "Loading & Unloading",
      "Inventory Management",
      "Stock Control Support",
      "Operational Supervision",
    ],
    image: "/warehouse.jpg",
  },
  {
    title: "Logistics Services",
    description:
      "Reliable logistics manpower and operational support to ensure smooth transportation and distribution processes.",
    features: [
      "Fleet Support Staff",
      "Distribution Coordination",
      "Route Assistance",
      "Operational Logistics Planning",
    ],
    image: "/logistics.jpg",
  },
  {
    title: "Consultancy Services",
    description:
      "Strategic HR and operational consultancy designed to improve organizational efficiency and workforce performance.",
    features: [
      "HR Advisory",
      "Policy Development",
      "Workforce Optimization",
      "Compliance Consulting",
    ],
    image: "/consultancy.jpg",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Nova HR Supply & Management PLC delivers reliable, scalable, and professional workforce solutions across multiple industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-all"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <ArrowRight className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                  Request Service
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
