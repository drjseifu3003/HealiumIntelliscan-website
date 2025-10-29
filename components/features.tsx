"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export function Features() {
  return (
    <section
      id="features"
      className="container mx-auto px-4"
    >
      <h2 className="mx-auto mb-8 max-w-4xl text-center text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
        Developing Solutions for{" "}
        <span className="text-[#4981F8]">Global CKD Epidemic</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div>
          <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden p-0">
            <Image
              src="/features/image1.png"
              alt=""
              width={400}
              height={250}
              className="w-full h-auto object-cover block"
              priority={false}
            />
          </Card>
          <div className="text-center text-white mt-4">
            <p className="text-xl font-bold text-[#4981F8]">
              Innovative AI-Driven Ultrasound
            </p>
            <p>
              AI-powered Ultrasound offers real-time support and quality
              evaluation, enabling healthcare professionals of all skill levels
              to perform high-quality renal ultrasounds.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div>
          <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden p-0">
            <Image
              src="/features/image2.png"
              alt=""
              width={400}
              height={250}
              className="w-full h-auto object-cover block"
            />
          </Card>
          <div className="text-center text-white mt-4">
            <p className="text-xl font-bold text-[#4981F8]">
              Revolutionizing Early CKD Detection
            </p>
            <p>
              Detects Chronic Kidney Disease from its earliest stage but also
              identifies the root cause by leveraging digital biomarkers.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div>
          <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden p-0">
            <Image
              src="/features/image3.png"
              alt=""
              width={400}
              height={250}
              className="w-full h-auto object-cover block"
            />
          </Card>
          <div className="text-center text-white mt-4">
            <p className="text-xl font-bold text-[#4981F8]">
              Advanced Renal Health Diagnostics
            </p>
            <p>
              Generates patient-specific perfusion models and constructs
              three-dimensional representations of the kidney, enhancing
              precision and clarity in diagnosis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}