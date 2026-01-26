"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-[#020817] to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Nova Perspective</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              At Nova, we believe that people are the most valuable resource of any organization—they are the heartbeat of every mission. Established in 2025, we bring a fresh perspective and a deep passion for service.
            </p>
            <p>
              We deliver end-to-end HR support, including talent sourcing, workforce management, training, and operational support. We work with businesses across governmental, NGO, and private sectors to ensure they receive the right people and the right systems to grow sustainably.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
