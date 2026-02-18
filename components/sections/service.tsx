"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Shield, Truck, Utensils, Package, TreePine, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    icon: Users,
    gradient: "from-blue-500 to-cyan-400",
    accentColor: "bg-blue-100 text-blue-700",
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
    icon: Utensils,
    gradient: "from-purple-500 to-pink-400",
    accentColor: "bg-purple-100 text-purple-700",
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
    icon: Shield,
    gradient: "from-emerald-500 to-teal-400",
    accentColor: "bg-emerald-100 text-emerald-700",
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
    icon: TreePine,
    gradient: "from-green-500 to-lime-400",
    accentColor: "bg-green-100 text-green-700",
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
    icon: Package,
    gradient: "from-yellow-500 to-orange-400",
    accentColor: "bg-yellow-100 text-yellow-700",
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
    icon: Truck,
    gradient: "from-orange-500 to-amber-400",
    accentColor: "bg-orange-100 text-orange-700",
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
    icon: Briefcase,
    gradient: "from-red-500 to-rose-400",
    accentColor: "bg-red-100 text-red-700",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
          >
            Our Professional Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Nova HR Supply & Management PLC delivers reliable, scalable, and professional workforce solutions across multiple industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-foreground/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                
                {/* Decorative background element */}
                <div className="absolute top-8 right-8 w-20 h-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity" style={{background: service.gradient}} />

                <div className="p-8 relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <ArrowRight className="w-4 h-4 mr-3 text-foreground flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    variant="ghost" 
                    className={`w-full justify-start group-hover:translate-x-1 transition-transform ${service.accentColor}`}
                  >
                    Request Service
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
