import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden md:mt-2 md:mb-4">
      <div className="container mx-auto px-8 my-8 md:space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center">
            Remote Ultrasound for <br />
            <span className="text-blue-600">Cardiology</span> & <span className="text-pink-500">OB/GYN</span>
          </h1>
          <div className="text-white text-base leading-relaxed">
            Healium Intelliscan enables hospitals to perform high-quality remote diagnostics, improving patient care and
            operational efficiency.
          </div>
          <Button
            asChild
            className="w-64 mt-4 bg-[#4981F8] text-white font-medium rounded px-6 py-2.5
                         hover:bg-[#4981F8] hover:shadow-md hover:scale-[1.02]
                         transition-all"
          >
            <Link href="/demo-book">Request Demo</Link>
          </Button>
        </div>

        <div className="hidden md:grid grid-cols-2 rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto">
            <div className="relative h-[500px] w-full">
              <Image src="/hero/cardiac.png" alt="Cardiac Ultrasound" fill className="object-contain" />
            </div>
            <div className="relative h-[500px] w-full">
              <Image src="/hero/OBGYN.png" alt="OBGYN Ultrasound" fill className="object-contain" />
            </div>
          </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto md:hidden">
          <div className="relative rounded-lg shadow-xl">
            <Image src="/hero/cardiac.png" alt="Cardiac" width={500} height={400} className="rounded-lg object-cover" />
          </div>
          <div className="relative rounded-lg shadow-xl">
            <Image src="/hero/OBGYN.png" alt="OBGYN" width={500} height={400} className="rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
