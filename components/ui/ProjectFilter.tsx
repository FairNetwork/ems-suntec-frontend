"use client"

import { motion } from "framer-motion"

interface ProjectFilterProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const filters = [
  { key: "all", label: "Alle Projekte" },
  { key: "residential", label: "Privat" },
  { key: "commercial", label: "Gewerbe" },
  { key: "industrial", label: "Industrie" },
]

export default function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {filters.map((filter) => (
        <motion.button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            activeFilter === filter.key
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  )
}
