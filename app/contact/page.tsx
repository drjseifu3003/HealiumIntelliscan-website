import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CTA from "@/components/cta"

export default function ContactPage() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-4">

          <h1 className="text-5xl font-bold bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text ">
            Request Demo
          </h1>

          <p className="text-[#999] text-[18px]">
            Provide us with your details and we will contact you to arrange a demo.
          </p>
          {/* FORM */}
          <section className="px-6 pb-20 text-left">
            <div className=" mx-auto space-y-6">
              {/* ROW 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-400">First name</label>
                  <input className="w-full mt-2 p-3 bg-[#0b0d10] rounded-md" />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Last name</label>
                  <input className="w-full mt-2 p-3 bg-[#0b0d10] rounded-md" />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-400">Email</label>
                  <input className="w-full mt-2 p-3 bg-[#0b0d10] rounded-md" />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Phone number</label>
                  <input className="w-full mt-2 p-3 bg-[#0b0d10] rounded-md" />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows={5}
                  className="w-full mt-2 p-3 bg-[#0b0d10] rounded-md"
                  placeholder = "Type your message.."
                />
              </div>

              {/* TERMS */}
              <div className="text-sm text-gray-400">
                <input type="checkbox" className="mr-2" />
                I accept the Terms and Conditions
              </div>

              {/* BUTTON */}
              <div className = "flex justify-center">
                <Button className="font-normal cursor-pointer w-[149.4px] h-[42px] text-[16px]">
                  Submit
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* Bottom*/}
      <CTA/>
      <Footer />
    </div>
  )
}