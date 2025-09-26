// app/about/page.tsx
import { Footer } from "@/components/footer";
import LeadershipTeam from "@/components/leadership-team";
import { SiteHeader } from "@/components/site-header";
import StoryTimeline from "@/components/timeline";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Healium Intelliscan",
    url: "https://healiumintelliscan.com",
    logo: "https://healiumintelliscan.com/logo/logo.png",
    description: "Healium Intelliscan's AI-PoCUS is a pioneering technology in clinical practice, as it non-invasively detects chronic kidney disease in its early stages.",
    sameAs: [
      "https://www.linkedin.com/company/healiumdigitalhealth",
    ],
    // address: {
    //   "@type": "PostalAddress",
    //   addressLocality: "Miami",
    //   addressRegion: "FL",
    //   addressCountry: "US",
    // },
    // contactPoint: [
    //   {
    //     "@type": "ContactPoint",
    //     telephone: "+1-555-555-5555",
    //     contactType: "customer service",
    //   },
    // ],
    // areaServed: [
    //   { "@type": "Place", name: "Miami" },
    //   { "@type": "Place", name: "Los Angeles" },
    //   { "@type": "Place", name: "New York" },
    //   { "@type": "Place", name: "Canada" },
    //   { "@type": "Place", name: "United Kingdom" },
    // ],
  };

  return (
    <>
    <SiteHeader />

      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-white py-10 px-6 md:px-12 lg:px-20 text-center space-y-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Shaping the Future of Health: Pioneering AI in the Fight Against CKD
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-80">
          Unveiling the potential of AI to transform kidney care, we're dedicated to advancing CKD detection and management for a healthier tomorrow.
        </p>
        <div className="mt-10 relative rounded-lg shadow-xl">
          <Image src='/about/about.png' alt="" width={800} height={200} className="rounded-lg"/>
        </div>
        <StoryTimeline/>
        <div>
          <h1 className="text-[#4981F8] text-2xl md:text-4xl font-bold mb-6">OUR VISION</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-80">At the core of our endeavors lies a commitment to integrating artificial intelligence with medical expertise, propelling the fight against chronic kidney disease into a new era. We strive to craft pioneering AI-ultrasound technologies that transcend conventional boundaries, offering breakthrough precision in CKD detection and management that enhances patient care and outcomes.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <div className="w-full max-w-[560px] aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dSPP_CSJFQo?si=JOAENGjOBo7ME5dK"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="w-full max-w-[560px] aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/ZR_puROj5qo?si=IvpCIlWSmheJb1wX"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <LeadershipTeam/>
      </section>

      <Footer/>
    </>
  );
}
