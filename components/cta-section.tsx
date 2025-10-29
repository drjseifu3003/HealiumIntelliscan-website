'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
// import { BookDemoDialog } from "./book-demo"

export function CTASection() {
  
  const [openBookDemo, setOpenBookDemo] = useState<boolean>(false)
  
  return (

    <section className="px-4 my-12 container mx-auto">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#687FE5] mb-4">Ready to Experience the Diagnostic Revolution?</h2>
                <p className="text-white font-normal mb-6">
                  Join the elite circle of 500+ hospitals nationwide that have taken the leap over the past year. Your
                  first free Sonographer Consultation.
                </p>
                <Link href='/demo-book'>
                  <Button 
                  size="lg"
                  className="bg-[#687FE5] hover:bg-primary/90 text-white"
                  >
                    Request Demo
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src="/cta/cta.svg"
                  alt="Healthcare professional with diagnostic results"
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* {
        openBookDemo && (
          <BookDemoDialog
          open={openBookDemo}
          setOpen={() => setOpenBookDemo(false)}
          />
        )
      } */}
    </section>
  )
}