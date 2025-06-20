"use client"

import { motion } from "framer-motion"
import { Star, Users, Award, Clock } from "lucide-react"

const indicators = [
  {
    icon: Star,
    value: "5/5",
    label: "Kundenbewertung",
    description: "Basierend auf 10+ Bewertungen",
  },
  {
    icon: Users,
    value: "500+",
    label: "Zufriedene Kunden",
    description: "Seit 2024",
  },
  {
    icon: Award,
    value: "25 Jahre",
    label: "Garantie",
    description: "Auf alle Komponenten",
  },
  {
    icon: Clock,
    value: "24h",
    label: "Antwortzeit",
    description: "Bei Serviceanfragen",
  },
]

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <indicator.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{indicator.value}</div>
              <div className="text-sm font-medium text-gray-900 mb-1">{indicator.label}</div>
              <div className="text-xs text-gray-500">{indicator.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
