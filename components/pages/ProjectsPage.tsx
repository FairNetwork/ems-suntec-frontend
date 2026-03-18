"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import PageHeader from "@/components/ui/PageHeader"
import ProjectGallery from "@/components/sections/ProjectGallery"
import ContactTeaser from "@/components/sections/ContactTeaser"
import { useProjects } from "@/hooks/useProjects"
import { defaultLandingPageContent } from "@/constants/landing-pages"
import ProjectFilter from "@/components/ui/ProjectFilter"
import { filterProjectsByLocation, getProjectLocationFilter, sortProjectsByYearDesc } from "@/constants/projects"

type ProjectsPageProps = {
  initialLocationFilter?: string
}

export default function ProjectsPage({ initialLocationFilter = "all" }: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = useState(
    getProjectLocationFilter(initialLocationFilter) ? initialLocationFilter : "all",
  )
  const { projects, loading } = useProjects()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const requestedFilter = new URLSearchParams(window.location.search).get("location") ?? "all"
    setActiveFilter(getProjectLocationFilter(requestedFilter) ? requestedFilter : "all")
  }, [])

  const filteredProjects = sortProjectsByYearDesc(filterProjectsByLocation(projects, activeFilter))

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)

    const nextParams = new URLSearchParams(window.location.search)

    if (filter === "all") {
      nextParams.delete("location")
    } else {
      nextParams.set("location", filter)
    }

    const nextSearch = nextParams.toString()
    router.replace(nextSearch ? `${pathname}?${nextSearch}` : pathname, { scroll: false })
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20"
      key="projects"
    >
      <PageHeader title="Unsere Referenzen" subtitle="Unsere erfolgreich realisierten Projekte" />

      <div className="container mx-auto px-4 py-12">
        <ProjectFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        <ProjectGallery projects={filteredProjects} loading={loading} />
      </div>

      <ContactTeaser content={defaultLandingPageContent.contactTeaser} />
    </motion.main>
  )
}
