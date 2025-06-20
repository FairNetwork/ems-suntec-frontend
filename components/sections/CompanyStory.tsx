"use client"

import { motion } from "framer-motion"

export default function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Unsere Geschichte</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Ems Suntec wurde 2024 von Thomas Harbering und Haiko Winter gegründet – mit dem Ziel, hochwertige Photovoltaiklösungen
                im Münsterland anzubieten und so aktiv zur Energiewende beizutragen. Aus einer regional verwurzelten Idee wurde ein
                professioneller Dienstleister für moderne Solartechnik.
              </p>
              <p>
                Seit der Gründung haben wir zahlreiche Projekte erfolgreich umgesetzt – vom Einfamilienhaus bis hin zu gewerblichen
                Anlagen. Dabei stehen für uns Qualität, Zuverlässigkeit und eine ehrliche Beratung im Mittelpunkt jeder Zusammenarbeit.
              </p>
              <p>
                Mit einem engagierten Team und einem ganzheitlichen Leistungsansatz – von der Planung bis zur Inbetriebnahme –
                begleiten wir unsere Kundinnen und Kunden auf dem Weg zur eigenen Energieunabhängigkeit. Jede Anlage bringt uns
                dem Ziel einer nachhaltigen Zukunft ein Stück näher.
              </p>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="SolarTech Solutions Firmengebäude"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm">Projekte realisiert</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
