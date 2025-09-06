"use client"

import { motion } from "framer-motion"
import { Mail, Phone} from "lucide-react"

const teamMembers = [
    {
        name: "Thomas Harbering",
        position: "Geschäftsführer & Mitgründer",
        image: "/placeholder.svg?height=300&width=300",
        description: "Als staatlich geprüfter Techniker bringt Thomas jede Menge Erfahrung aus dem Elektrohandwerk mit. Neben seiner Rolle bei Ems Suntec führt er auch erfolgreich sein eigenes Unternehmen Elektro Harbering.",
        phone: "tel:+4901622913008",
        email: "thomas@ems-suntec.de"
    },
    {
        name: "Haiko Winter",
        position: "Geschäftsführer & Mitgründer",
        image: "/placeholder.svg?height=300&width=300",
        description: "Haiko ist seit der Gründung Teil von Ems Suntec und leitet das Unternehmen mit technischem Know-how und klarer Vision. Als Geschäftsführer ist er alleinvertretungsberechtigt und Ansprechpartner für strategische Fragen.",
        phone: "tel:+491797884043",
        email: "haiko@ems-suntec.de"
    }
]


export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ems Suntec</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lernen Sie die Experten kennen, die Ihre Solaranlage planen und installieren.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
            >
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.phone}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
