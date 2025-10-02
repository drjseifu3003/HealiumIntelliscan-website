import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative isolate overflow-hiddenc:\Users\derej\projects\radiology-cloud-dashboard\components\landing\about-section.tsx">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-8 sm:py-6">
          {/* Text + Button */}
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className=" text-center text-4xl font-extrabold md:text-5xl leading-tight">
              <span className="block">Remote Ultrasound Diagnostics</span>
            </h1>
            <p className="2xl:text-lg text-center opacity-75 max-w-4xl">
              Healium Intelliscan provides remote ultrasound diagnostic services
              to hospitals, enhancing efficiency and patient care.
            </p>
            <Link href={"/demo-book"} className="mt-6">
              <Button className="2xl:text-2xl bg-[#4981F8] rounded text-white hover:bg-[#4981F8] cursor-pointer">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Two Side-by-Side Images */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/about/bed-scanner.png"
                alt="Bed Scanner"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative rounded-lg shadow-xl">
              <Image
                src="/about/doctor.png"
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
