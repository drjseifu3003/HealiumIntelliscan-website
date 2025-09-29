"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"


export function Features() {

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-10 sm:px-28">
      <h2 className="mx-auto mb-8 text-center text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl max-w-4xl">
        Developing Solutions for <span className="text-[#4981F8] ">Global CKD Epidemic</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Adaptability Card - Hidden on mobile */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl p-0">
          <CardContent className="space-y-2">
            <div className="">
              <Image
                src="/features/image1.png"
                alt=""
                width={280}
                height={160}
                className="h-full w-full rounded-xl border border-white/10 object-cover"
                priority={false}
              />
            </div>
            <div className="flex flex-col iteme-center justify-center gap-2 text-center text-white">
              <p className="text-xl font-bold text-[#4981F8]">Innovative Al-Driven Ultrasound</p>
              <p>Al-powered Ultrasound offers real-time support and quality evaluation, enabling healthcare professionals of all skill levels to perform high-quality renal ultrasounds.</p>
            </div>
          </CardContent>
        </Card>

        {/* Client Love Card - Always visible */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="space-y-2">
            <div className="">
              <Image
                src={"/features/image2.png"}
                width={280}
                height={160}
                alt=""
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
            <div className="flex flex-col iteme-center justify-center gap-2 text-center text-white">
              <p className="text-xl font-bold text-[#4981F8]">Revolutionizing Early CKD Detection</p>
              <p>Detects Chronic Kidney Disease from its earliest stage but also identifies the root cause. By leveraging digital biomarkers.</p>
            </div>
          </CardContent>
        </Card>
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="space-y-2">
            <div className="">
              <Image
                src={"/features/image3.png"}
                width={280}
                height={160}
                alt=""
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
            <div className="flex flex-col iteme-center justify-center gap-2 text-center text-white">
              <p className="text-xl font-bold text-[#4981F8]">Advanced Renal Health Diagnostics</p>
              <p>Generates patient-specific perfusion models and constructs three-dimensional representations of the kidney, enhancing precision and clarity in diagnosis.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}