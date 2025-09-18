"use client"

import { motion } from "framer-motion"
import { Leaf, Shield, Users, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Nachhaltigkeit",
    description: "Wir glauben an eine saubere Energiezukunft und setzen uns aktiv für den Klimaschutz ein.",
  },
  {
    icon: Shield,
    title: "Qualität",
    description: "Höchste Standards bei Planung, Installation und Service für langfristige Kundenzufriedenheit.",
  },
  {
    icon: Users,
    title: "Partnerschaft",
    description: "Wir begleiten unsere Kunden von der ersten Beratung bis zur Fertigstellung.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modernste Technologien und innovative Lösungen für maximale Effizienz.",
  },
]

export default function ValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Werte</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Diese Prinzipien leiten uns in allem, was wir tun.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
