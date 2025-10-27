import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Text + CTA */}
        <div className="flex flex-col items-center justify-center py-8 sm:py-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Remote Ultrasound for <br /> <span className="text-blue-600">Cardiology</span> & <span className="text-pink-500">OB/GYN</span>
            </h1>
            <p className="2xl:text-lg text-center opacity-75 max-w-4xl">
              Healium Intelliscan enables hospitals to perform high-quality remote diagnostics, 
              improving patient care and operational efficiency.
            </p>
            <Link href={"/demo-book"} className="mt-6">
              <Button className="bg-[#4981F8] rounded text-white hover:bg-[#4981F8] cursor-pointer">
                Request Demo
              </Button>
            </Link>
          </div>
        

          {/* Two Side-by-Side Images */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/about/image-1.jpeg"
                alt="Bed Scanner"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/about/image-2.jpeg"
                alt="Doctor"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
