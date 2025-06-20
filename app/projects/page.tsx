"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import PageHeader from "@/components/ui/PageHeader"
import ProjectGallery from "@/components/sections/ProjectGallery"
import ProjectFilter from "@/components/ui/ProjectFilter"
import ContactTeaser from "@/components/sections/ContactTeaser"
import { useProjects } from "@/hooks/useProjects"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { projects, loading } = useProjects()

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20"
      key='projects'
    >
      <PageHeader title="Unsere Referenzen" subtitle="Über 500 erfolgreich realisierte Solarprojekte" />

      <div className="container mx-auto px-4 py-12">
        <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <ProjectGallery projects={filteredProjects} loading={loading} />
      </div>

      <ContactTeaser />
    </motion.main>
  )
}
