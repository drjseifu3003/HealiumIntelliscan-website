import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import Script from "next/script"
import { Footer } from "@/components/footer"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import VideoPlayer from "@/components/VideoPlayer"
import DeviceCompatibilitySection from "@/components/device-compatability-section"
import { CertificationsSection } from "@/components/certifications-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { ContactUs } from "@/components/contact-us"

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
        <FeaturesSection/>
        <AboutSection/>
        <div id="howitworks" className="container mx-auto px-4 flex flex-col items-center justify-center gap-8 p-4 pt-8 lg:pt-10">
          <h2 className="text-2xl font-semibold text-center text-white">How it works</h2>
          <VideoPlayer
            desktopSrc="/videos/howitworks.mp4"
            mobileSrc="/videos/howitworks_mobile.mp4"
            className="bg-black container max-w-4xl rounded-md"
          />
        </div>
        <DeviceCompatibilitySection/>
        <CertificationsSection/>
        <FAQSection/>
        <CTASection/>
        <ContactUs/>
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