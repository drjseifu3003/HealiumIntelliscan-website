import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (

      <section
        className="text-white py-20 md:py-28 px-6"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              #000000 0%,
              #0b1a3a 40%,
              #1e3a8a 70%,
              #000000 100%
            ),
            url('/hexagon.png')
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "75px",
          backgroundBlendMode: "overlay",
        }}
      >
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        
        {/* HEADING */}
        <h1 className="text-6xl md:text6xl font-bold leading-[1.2] max-w-5xl mx-auto">
          Revolutionizing Early{" "}
          <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-6xl font-bold">
            Detection of Chronic Kidney Disease
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 mb-[10px] text-gray-400 mx-auto text-base text-lg">
          Healium Digital Healthcare's AI-PoCUS is a pioneering technology in clinical practice, as it non-invasively detects chronic kidney disease in its early stages and provides predictive insights into its causality.
        </p>

        {/* BUTTON */}
        <Link href="/contact">
        <div className="mt-6 ">
          <Button className="bg-sky-400 hover:bg-[rgb(81,122,249)] text-white px-8 py-6 cursor-pointer">
            Request Demo
          </Button>
        </div>
        </Link>

        {/* IMAGE */}
        <div className="mt-12 flex justify-center w-full h-auto">
          <Image 
            src="/hero.gif"
            alt="hero-header-image"
            width = {1000}
            height={563.328}
            className="w-full max-w-full"
          />
        </div>

      </div>
    </section>
  )
}