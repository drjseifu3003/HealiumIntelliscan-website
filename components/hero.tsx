import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Text + CTA */}
        <div className="flex flex-col items-center justify-center pt-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center md:text-left">
              Remote Ultrasound for <br /> <span className="text-blue-600">Cardiology</span> & <span className="text-pink-500">OB/GYN</span>
            </h1>
            <p className="2xl:text-lg text-center opacity-75 max-w-4xl">
              Healium Intelliscan enables hospitals to perform high-quality remote diagnostics, 
              improving patient care and operational efficiency.
            </p>
            <Button
              asChild
              className="bg-[#4981F8] text-white font-medium rounded px-6 py-2.5
                         hover:bg-[#4981F8] hover:shadow-md hover:scale-[1.02]
                         transition-all w-64 mt-4"
            >
              <Link href="/demo-book">Request Demo</Link>
            </Button>
          </div>

          {/* Two Side-by-Side Images */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/hero/cardiac.png"
                alt="Cardiac"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/hero/OBGYN.png"
                alt="OBGYN"
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