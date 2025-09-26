// app/about/page.tsx
import RequestDemoForm from "@/components/book-form";
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
      <section className="relative flex flex-col items-center justify-center text-white py-10 px-6 md:px-12 lg:px-20 text-center space-y-8">
        <RequestDemoForm/>
      </section>

      <Footer/>
    </>
  );
}
