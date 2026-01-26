"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  
  // Only initialize scroll tracking after component is mounted
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    smooth: 100, // Optional: adds smooth scrolling behavior
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
      <motion.div
        style={isMounted ? { opacity, scale } : {}}
        className="container mx-auto px-4 pt-32 pb-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Connecting People, Creating Value
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Nova HR Supply & Management PLC is your strategic partner for modern, people-driven HR outsourcing. Based in Addis Ababa, we help organizations build stronger, more capable, and performance-driven workforces.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-black hover:bg-gray-100" asChild>
              <Link href="#services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              View Case Studies
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            alt="Technology Team Collaboration"
            width={1200}
            height={600}
            className="rounded-lg shadow-2xl"
            priority
          />
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
        <ChevronDown className="w-6 h-6 text-white animate-bounce mx-auto" />
      </div>
    </section>
  )
}