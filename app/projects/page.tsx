import ProjectsPage from "@/components/pages/ProjectsPage"
import { buildPageMetadata } from "@/constants/seo"

export const metadata = buildPageMetadata({
  title: "Referenzen | Photovoltaik Projekte von Ems Suntec",
  description:
    "Entdecken Sie realisierte Photovoltaik-Projekte von Ems Suntec. Referenzen fuer PV-Anlagen im Kreis Steinfurt, in Emsdetten, Rheine, Greven, Muenster und Umgebung.",
  path: "/projects",
  keywords: [
    "Photovoltaik Referenzen",
    "PV Projekte Kreis Steinfurt",
    "Solaranlage Beispiele",
    "Photovoltaik Referenzen Muensterland",
    "PV Anlage Referenzen Emsdetten",
    "Solarprojekte Rheine Greven Muenster",
  ],
})

type ProjectsRouteProps = {
  searchParams: Promise<{
    location?: string
  }>
}

export default async function ProjectsRoute({ searchParams }: ProjectsRouteProps) {
  const { location } = await searchParams

  return <ProjectsPage initialLocationFilter={location} />
}
