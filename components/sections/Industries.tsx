"use client"

import { motion } from "framer-motion"

const industries = [
  {
    name: "Financial Services",
    description: "Empowering banks, fintech, and insurance companies with secure, scalable solutions",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M2 17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8.32a5 5 0 0 0-2.64-4.4L12 0 4.64 3.92A5 5 0 0 0 2 8.32Z" />
        <path d="m6 12 6-3 6 3" />
        <path d="M12 9v8" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    description: "Advancing patient care with AI-powered diagnostics and secure health information systems",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "E-commerce",
    description: "Building seamless shopping experiences with scalable platforms and smart inventory systems",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
]

export default function Industries() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-[#020817] to-[#020817] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%209.40.27%E2%80%AFAM-373LVsiWeCMUoIp1mD84gCtt4nlzTn.png')] opacity-5 bg-cover bg-center" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text">Industries We Serve</h2>
          <p className="text-lg text-gray-400">Delivering innovative solutions across various sectors</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-[#0a101f]/40 border border-gray-800/50 backdrop-blur-sm hover:bg-[#0a101f]/60 transition-all duration-300">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-full bg-[#1a1f2e] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <industry.icon className="w-8 h-8 text-primary relative z-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
