"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactDetails = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+49 179 7884043",
    link: "tel:+491797884043",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@ems-suntec.de",
    link: "mailto:info@ems-suntec.de",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Diekstraße 23, 48282 Emsdetten",
    link: "https://g.co/kgs/PW67nHC",
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    content: "Mo-Fr: 8:00-15:00\nSa & So: Geschlossen",
    link: "#",
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kontaktinformationen</h3>

      {contactDetails.map((detail, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex items-start space-x-4"
        >
          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
            <detail.icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">{detail.title}</h4>
            {detail.link !== "#" ? (
              <a
                href={detail.link}
                className="text-gray-600 hover:text-primary transition-colors whitespace-pre-line"
              >
                {detail.content}
              </a>
            ) : (
              <p className="text-gray-600 whitespace-pre-line">{detail.content}</p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
