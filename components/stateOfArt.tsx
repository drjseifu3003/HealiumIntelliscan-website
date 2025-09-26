"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "./ui/button"

interface FeaturesContent {
  title: string
}


export function StateOfArt() {

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-10 sm:px-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        State-of-the-art algorithms and clinically validated digital biomarkers
      </h2>

      <div className="grid gap-4 md:grid-cols-4">
        {/* Adaptability Card - Hidden on mobile */}
        <div className="bg-[#4981F8] rounded flex items-center justify-center p-4">
          <p className="text-xl text-center font-medium">
            AI-Powered CKD Biomarkers
          </p>
        </div>
        <div className="bg-[#4981F8] rounded flex items-center justify-center p-4">
          <p className="text-xl text-center font-medium">
            Personalised Perfusion Modelling
          </p>
        </div>
        <div className="bg-[#4981F8] rounded flex items-center justify-center p-4">
          <p className="text-xl text-center font-medium">
            Causality Prediction
          </p>
        </div>
        <div className="bg-[#4981F8] rounded flex items-center justify-center p-4">
          <p className="text-xl text-center font-medium">
            FDA 510(k) Pending
          </p>
        </div>

      </div>
    </section>
  )
}