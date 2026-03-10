import LandingPage from "@/components/pages/LandingPage"
import { defaultLandingPageContent } from "@/constants/landing-pages"

export default function HomePage() {
  return <LandingPage content={defaultLandingPageContent} pageKey="home" />
}
