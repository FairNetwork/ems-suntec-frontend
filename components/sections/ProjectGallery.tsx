"use client"

import {motion} from "framer-motion"
import {MapPin, Zap, Calendar, BatteryCharging, BatteryFull} from "lucide-react"
import type {Project} from "@/hooks/useProjects"

interface ProjectGalleryProps {
    projects: Project[]
    loading: boolean
}

export default function ProjectGallery({projects, loading}: ProjectGalleryProps) {
    if (loading) {
        return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-gray-200 rounded-lg h-80 animate-pulse"/>
                ))}
            </div>
        )
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6, delay: index * 0.1}}
                    viewport={{once: true}}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                    <div className="relative overflow-hidden">
                        <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div
                            className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                            {project.category === "residential" && "Privat"}
                            {project.category === "commercial" && "Gewerbe"}
                            {project.category === "industrial" && "Industrie"}
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>

                        <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-500">
                                <MapPin className="w-4 h-4 mr-2"/>
                                {project.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <Zap className="w-4 h-4 mr-2"/>
                                {project.power} kWp Leistung
                            </div>
                            {project.wallbox && <div className="flex items-center text-sm text-gray-500">
                                <BatteryCharging className="w-4 h-4 mr-2"/>
                                Mit Wallbox
                            </div>}
                            <div className="flex items-center text-sm text-gray-500">
                                <BatteryFull className="w-4 h-4 mr-2"/>
                                {project.storage} Speicherkapazität
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-2"/>
                                Fertigstellung {project.year}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
