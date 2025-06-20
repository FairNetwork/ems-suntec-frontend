"use client"

import { motion } from "framer-motion"

export default function LocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-100 rounded-lg p-6"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Unser Standort</h3>
      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-lg font-medium mb-2">Interaktive Karte</div>
          <div className="text-sm">
            Musterstraße 123
            <br />
            12345 Berlin
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>
          Besuchen Sie uns in unserem modernen Büro im Herzen von Berlin. Parkplätze sind direkt vor dem Gebäude
          verfügbar.
        </p>
      </div>
    </motion.div>
  )
}
