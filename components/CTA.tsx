"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export function CTA() {

  return (
    <section id="features" className="container flex flex-col items-center justify-center mx-auto px-4 py-16 sm:py-10 sm:px-10">
      <h2 className="mx-auto mb-8 text-center text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl max-w-4xl">
        Learn more about <span className="text-[#4981F8]">Our Solution</span>
      </h2>
      <div className="relative flex items-center justify-center">
        <Image src='/cta/cta.png' alt="" width={500} height={200}/>
      </div>
      <Link href={'/Contact'} className="mt-8">
        <Button className="text-md 2xl:text-2xl bg-[#4981F8] rounded px-10 py-6 text-white hover:bg-[#4981F8] cursor-pointer">
          Request Demo
        </Button>
      </Link>
    </section>
  )
}