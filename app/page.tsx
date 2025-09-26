import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import Script from "next/script"
import { StateOfArt } from "@/components/stateOfArt"
import { ProductFeatures } from "@/components/ProductFeatures"
import { Footer } from "@/components/footer"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://healiumintelliscan.com/",
    name: "Healium Intelliscan stands at the forefront of innovation with our cutting-edge AI-enhanced Point-of-Care Ultrasound (PoCUS) technology.",
    description: "Healium Intelliscan's AI-PoCUS is a pioneering technology in clinical practice, as it non-invasively detects chronic kidney disease in its early stages.",
    url: "https://healiumintelliscan.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Healium Intelliscan",
      url: "https://healiumintelliscan.com",
      sameAs: [
        "https://www.linkedin.com/company/healiumdigitalhealth"
      ],
    }
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <StateOfArt/>
        <ProductFeatures/>
        <LogoMarquee />
        <Footer/>
      </main>

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}