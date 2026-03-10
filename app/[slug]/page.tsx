import type { Metadata } from "next"
import { notFound } from "next/navigation"
import LandingPage from "@/components/pages/LandingPage"
import { localLandingPages, localLandingPagesBySlug } from "@/constants/landing-pages"
import { buildLocalLandingMetadata } from "@/constants/seo"

type LocalLandingPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return localLandingPages.map((page) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: LocalLandingPageProps): Promise<Metadata> {
  const { slug } = await params
  const landingPage = localLandingPagesBySlug[slug]

  if (!landingPage) {
    return {}
  }

  return buildLocalLandingMetadata(landingPage)
}

export default async function LocalLandingPage({ params }: LocalLandingPageProps) {
  const { slug } = await params
  const landingPage = localLandingPagesBySlug[slug]

  if (!landingPage) {
    notFound()
  }

  return <LandingPage content={landingPage.content} pageKey={landingPage.slug} />
}
