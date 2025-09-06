"use client"

import {useState, useEffect} from "react"

export interface Project {
    id: string
    title: string
    description: string
    image: string
    category: "residential" | "commercial" | "industrial"
    power: number
    year: number
    location: string
    wallbox: boolean,
    storage: string,
}

export function useProjects() {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate API call
        const fetchProjects = async () => {
            setLoading(true)

            // Mock data
            const mockProjects: Project[] = [
                {
                    id: '01965cb7-b2c1-7cf5-a508-389a8cac99c8',
                    category: 'residential',
                    image: '/references/1.png',
                    power: 9.43,
                    title: 'PV-Anlage Neuenkirchen',
                    year: 2024,
                    description: '',
                    location: 'Neuenkirchen',
                    wallbox: false,
                    storage: ""

                },
                {
                    id: '01965cb7-ce67-781c-a42d-b7491cfd3e7e',
                    category: 'residential',
                    image: '/references/2.png',
                    power: 16.8,
                    title: 'PV-Anlage Borghorst',
                    year: 2024,
                    description: '',
                    location: 'Borghorst',
                    wallbox: false,
                    storage: ""
                },
                {
                    id: '01965cb7-f530-72bd-8d22-1b40909e9806',
                    category: 'residential',
                    image: '/references/3.png',
                    power: 5.72,
                    title: 'PV-Anlage Steinfurt',
                    year: 2024,
                    description: '',
                    location: 'Steinfurt',
                    wallbox: false,
                    storage: ""
                },
                {
                    id: '01965cb8-16fc-73ec-96d5-f2abd4118e60',
                    category: 'residential',
                    image: '/references/4.png',
                    power: 9.57,
                    title: 'PV-Anlage Emsdetten',
                    year: 2024,
                    description: '',
                    location: 'Emsdetten',
                    wallbox: false,
                    storage: ""
                }
            ]

            setProjects(mockProjects)
            setLoading(false)
        }

        fetchProjects()
    }, [])

    return {projects, loading}
}
