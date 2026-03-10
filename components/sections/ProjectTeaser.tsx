"use client"

import {motion} from "framer-motion"
import Link from "next/link"
import {ArrowRight} from "lucide-react"
import {Button} from "@/components/ui/button"
import {useProjects} from "@/hooks/useProjects"
import type { ProjectTeaserContent } from "@/constants/landing-pages"
import {filterProjectsByLocation} from "@/constants/projects"

type ProjectTeaserProps = {
    content: ProjectTeaserContent
    projectFilterKey?: string
}

export default function ProjectTeaser({content, projectFilterKey}: ProjectTeaserProps) {
    const {projects} = useProjects()
    const filteredProjects = filterProjectsByLocation(projects, projectFilterKey)
    const featuredProjects = filteredProjects.slice(0, 3)
    const projectsHref = projectFilterKey ? `/projects?location=${projectFilterKey}` : "/projects"

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.heading}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {content.description}
                    </p>
                </motion.div>

                {featuredProjects.length > 0 ? (
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: index * 0.2}}
                                viewport={{once: true}}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <img src={project.image || "/placeholder.svg"} alt={project.title}
                                     className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <div
                                        className="text-sm text-primary font-medium mb-2">
                                        {project.category === "residential" && "Privat"}
                                        {project.category === "commercial" && "Gewerbe"}
                                        {project.category === "industrial" && "Industrie"}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">{project.power} kWp</span>
                                        <span className="text-sm text-gray-500">{project.year}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="mb-12 rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center"
                    >
                        <h3 className="mb-3 text-2xl font-semibold text-gray-900">Noch keine Referenzen aus diesem Ort</h3>
                        <p className="mx-auto max-w-2xl text-gray-600">
                            Weitere Projekte aus der Region finden Sie auf unserer Referenzseite. Dort können Sie den Ortsfilter direkt gesetzt öffnen.
                        </p>
                    </motion.div>
                )}

                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:primary"
                    >
                        <Link href={projectsHref}>
                            Alle Projekte ansehen
                            <ArrowRight className="ml-2 w-4 h-4"/>
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
