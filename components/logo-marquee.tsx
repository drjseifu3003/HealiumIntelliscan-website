"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  // Logo data with colors and content
  const logos = [
    { name: "Artesian", content: "image", image: "/investor/investor1.png" },
    { name: "Power House Ventures", content: "image", image: "/investor/investor2.png" },
    { name: "Brinc", content: "image", image: "/investor/investor3.png" },
    { name: "Entrepreneur First", content: "image", image: "/investor/investor4.png" },
    { name: "GSF", content: "image", image: "/investor/investor5.png" },
    { name: "Java Capital", content: "image", image: "/investor/investor6.png" }
  ]


  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={logo.image || "/placeholder.svg"}
            alt={logo.name}
            fill
            className="object-contain opacity-90"
            // sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
          />
        </div>
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Backed by <span className="text-[#4189F7]">Global Investors</span>
          </h2>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6">
            <div
              className={`flex animate-scroll-right whitespace-nowrap ${pausedRow === "first" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {/* Triple the logos for seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
