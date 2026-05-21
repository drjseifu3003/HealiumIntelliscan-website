import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#010304] pt-10 pb-16">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#010304] from-[23%] to-[#1e45d5cc]"></div>
        <div className="absolute bottom-0 w-full h-full bg-[url('/hexagon.png')] bg-[length:69px] opacity-85"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[2rem] bg-[#0ebaf0] blur-[50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <h1 className="text-[40px] md:text-[56px] font-bold bg-gradient-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text mb-4  leading-[1.1]">
          Revolutionizing Early <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-[#517af9] to-[#0ebaf0] text-transparent bg-clip-text">
            Detection of Chronic Kidney Disease
          </span>
        </h1>
        
        <p className="text-[#999] text-lg max-w-[1000px] font-normal mb-8 leading-relaxed">
          Healium Digital Healthcare's AI-PoCUS is a pioneering technology in clinical practice, as it non-invasively detects chronic kidney disease in its early stages and provides predictive insights into its causality.
        </p>
        
        <Link href="/contact">
          <Button className="bg-[#0ebaf0] h-[50px] w-[157.406px] hover:bg-[#517af9] cursor-pointer text-white px-6 py-3 rounded-lg text-[16px] font-normal  border-none transition-colors">
            Request Demo
          </Button>
        </Link>
        
        <div className=" w-full h-auto rounded-md overflow-hidden  shadow-2xl mt-5 relative">
          <Image 
            src="/hero.gif" 
            alt="AI-PoCUS Interface" 
            width={1000} 
            height={563.3} 
            className="w-full h-full  object-cover relative z-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
