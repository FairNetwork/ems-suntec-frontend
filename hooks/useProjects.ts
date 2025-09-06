"use client"

import {useState, useEffect} from "react"
import {Project, PROJECTS} from "@/constants/projects";

export function useProjects() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate API call
        const fetchProjects = async () => {
            setLoading(true)

            // Mock data
            const mockProjects: Project[] = [

            ]

            setProjects(PROJECTS)
            setLoading(false)
        }

        fetchProjects()
    }, [])

    return {projects, loading}
}
