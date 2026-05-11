"use client";
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useState } from "react";



export default function CareersPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black text-white">
  <Navbar />

  <main className="">

      {/* HERO */}
      <section className="text-center py-11 md:py-11 px-6 bg-gradient-to-b from-[#1e45d5cc] to-[#010304] ">
        
        <h1 className="text-[56px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  font-bold max-w-5xl mx-auto">
          Build the Future of Healthcare With Us
        </h1>

        <p className="mt-4 text-[#999] max-w-5xl mx-auto text-[18px] md:text-base font-stretch-100%">
          Join our mission to transform kidney disease detection through AI-powered ultrasound technology. We're looking for passionate innovators ready to make a real impact.
        </p>

        {/* STATS */}
        <div className="mt-10 flex justify-center gap-35 text-center">
          <div>
            <p className="text-[43.2px] font-bold bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text ">11-50</p>
            <p className="text-gray-400 text-sm">Team Members</p>
          </div>

          <div>
            <p className="text-[43.2px] font-bold bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text ">2020</p>
            <p className="text-gray-400 text-sm">Founded</p>
          </div>

          <div>
            <p className="text-[43.2px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  font-bold">NYC</p>
            <p className="text-gray-400 text-sm">Headquarters</p>
          </div>
        </div>

      </section>
       {/* WHY JOIN */}
      <section className="py-11 px-6 bg-linear-to-b bg-gradient-to-b from-[#1e45d5cc] to-[#010304] text-center">
        
        <h2 className="text-[56px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  font-bold mb-5">
          Why Join Healium IntelliScan?
        </h2>

        <p className="mt-2 text-[#999] text-[18px]">
          Be part of a team that's dedicated to saving lives through early detection technology
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className="border border-[#f2f3ff] px-[20px] py-[20px] rounded-lg text-left">
            <h3 className=" text-[22px] font-semibold bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  ">Meaningful Impact</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            Work on technology that directly impacts patient outcomes. Help detect chronic kidney disease before it becomes life-threatening.
            </p>
        </div>

        <div className="border border-[#f2f3ff] px-[20px] py-[20px] rounded-lg text-left">
            <h3 className="text-[22px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text font-semibold">Cutting-Edge Technology</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            Work with AI, machine learning, and computer vision to develop next-generation point-of-care ultrasound diagnostics.
            </p>
        </div>

        <div className="border border-[#f2f3ff] px-[20px] py-[20px] w-[] rounded-lg text-left">
            <h3 className="text-[22px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  font-semibold">Growth Opportunities</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            Join an early-stage startup where your contributions matter. Grow with us as we scale our technology globally.
            </p>
        </div>

        <div className="border border-[#f2f3ff] px-[20px] py-[20px] rounded-lg text-left">
            <h3 className="text-[22px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  font-semibold">Collaborative Culture</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            Work alongside experts in healthcare, AI, and medical devices. We value diverse perspectives and open communication.
            </p>
        </div>

        <div className="border border-[#f2f3ff] px-[20px] py-[20px] rounded-lg text-left">
            <h3 className="text-[22px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  font-semibold">Innovation First</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            We encourage experimentation and creative problem-solving. Your ideas can shape the future of diagnostic healthcare.
            </p>
        </div>

        <div className="border border-[#f2f3ff] px-[20px] py-[20px] rounded-lg text-left">
            <h3 className="text-[22px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  font-semibold">Healthcare Benefits</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            Comprehensive health coverage, flexible work arrangements, and competitive compensation packages.
            </p>
        </div>

        </div>
        </section>
            {/* OPEN POSITIONS */}
      <section className="py-20 px-6 text-center">

    <h2 className="text-[56px] font-bold mb-5">Open Positions</h2>
    <p className="text-[#999] text-[16px] mt-2">
        Find your next opportunity to make a difference
    </p>

        <div className="mt-12 space-y-6 max-w-[940px] mx-auto">

      {/* CARD 1 */}
      <div className="border text-left border-[#908b8b] rounded-xl px-10 py-10 flex justify-between items-center hover:border-sky-400 transition">

        <div>
          <h3 className="text-[24px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text mb-4 font-bold">
            Echocardiography Sonographer
          </h3>

          <p className="text-[#999] text-[16px] font-normal mt-1 mb-4  flex gap-8 flex-wrap">
            <span>Bangalore, India</span>
            <span>Part-time</span>
          </p>

          {/* TAGS */}
          <div className="flex gap-5 mt-3 flex-wrap">
            {["Cardiac Imaging", "Ultrasound", "DICOM"].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-[#183548] text-[#0f969c] text-[16px] px-[15px] py-[9px] rounded-full hover:bg-[#123a52] transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="bg-[#3898ec] font-semibold cursor-pointer  text-[19.2px] text-[#0d1b2a] px-6 py-3 w-[147px] h-[52.78px] rounded-md hover:bg-sky-500 hover:text-white transition">
          Apply Now
        </Button>
      </div>

      {/* CARD 2 */}
      <div className="border  text-left border-[#908b8b] rounded-xl px-10 py-10 flex justify-between items-center hover:border-sky-400 transition">

        <div>
          <h3 className="text-[24px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  mb-4 font-bold">
            Senior Machine Learning Engineer
          </h3>

          <p className="text-[#999] text-[16px] font-normal mt-1 mb-4  flex gap-8 flex-wrap">
          <span>New York, NY (Hybrid)</span>
          <span>Full-time</span>
        </p>

          <div className="flex gap-5 mt-3 flex-wrap">
            {["AI/ML", "Computer Vision", "Python"].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-[#183548] text-[#0f969c] text-[16px] px-[15px] py-[9px] rounded-full hover:bg-[#123a52] transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Button 
        onClick={() => setOpen(true)}
        className="bg-[#3898ec] font-semibold cursor-pointer  text-[#0d1b2a] text-[19.2px] px-6 py-3 w-[147px] h-[52.78px] rounded-md hover:bg-sky-500 hover:text-white transition">
          Apply Now
        </Button>
      </div>

      {/* CARD 3 */}
      <div className="border bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text   text-left border-[#908b8b] rounded-xl px-10 py-10 flex justify-between items-center hover:border-sky-400 transition">

        <div>
          <h3 className="text-[24px] font-bold mb-4">
            Project Manager & Product Owner Intern
          </h3>

          <p className="text-[#999] text-[16px] font-normal mt-1 mb-4  flex gap-8 flex-wrap">
            <span>India (Remote)</span>
            <span>Internship</span>
            <span>3–6 months</span>
          </p>

         <div className="flex gap-5 mt-3 flex-wrap">
          {["Product Management", "Agile", "Healthcare"].map((tag) => (
            <Link
              key={tag}
              href="#"
              className="bg-[#183548] text-[#0f969c]  text-[16px] px-[15px] py-[9px] rounded-full hover:bg-[#123a52] transition"
            >
              {tag}
            </Link>
          ))}
        </div>
        </div>

        <Button 
        onClick={() => setOpen(true)}
        className="bg-[#3898ec] font-semibold  text-[19.2px] text-[#0d1b2a] cursor-pointer  px-6 py-3 w-[147px] h-[52.78px] rounded-md hover:bg-sky-500 hover:text-white transition">
          Apply Now
        </Button>
      </div>

      
      <div className="border  text-left border-[#908b8b] rounded-xl px-10 py-10 flex justify-between items-center hover:border-sky-400 transition">

        <div>
          <h3 className="text-[24px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  mb-4 font-bold">
            Clinical Research Associate
          </h3>

          <p className="text-[#999] text-[16px] font-normal mt-1 mb-4 flex gap-8 flex-wrap">
            <span>New York, NY</span>
            <span>Full-time</span>
          </p>

          <div className="flex gap-5 mt-3 flex-wrap">
            {["AI/ML", "Computer Vision", "Python"].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-[#183548] text-[#0f969c] text-[16px] px-[15px] py-[9px] rounded-full hover:bg-[#123a52] transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Button 
        onClick={() => setOpen(true)}
        className="bg-[#3898ec] text-[19.2px] font-semibold text-[#0d1b2a] px-6 py-3 w-[147px] h-[52.78px] cursor-pointer  rounded-md hover:bg-sky-500 hover:text-white transition">
          Apply Now
        </Button>
      </div>

      {/* CARD 5 */}
      <div className="border text-left bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  border-[#908b8b] rounded-xl px-10 py-10 flex justify-between items-center hover:border-sky-400 transition">

        <div>
          <h3 className="text-[24px] font-bold mb-4">
            Full Stack Developer
          </h3>

          <p className="text-[#999] text-[16px] mb-4 font-normal mt-1 flex gap-8 flex-wrap">
            <span>Remote (US)</span>
            <span>Full-time</span>
          </p>

          <div className="flex gap-5 mt-3 flex-wrap">
            {["React", "Node.js", "Cloud"].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-[#183548] text-[#0f969c] text-[16px] px-[15px] py-[9px] rounded-full hover:bg-[#123a52] transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Button
        onClick={() => setOpen(true)}
        className="bg-[#3898ec] text-[19.2px] font-semibold text-[#0d1b2a] px-6 py-3 w-[147px] h-[52.78px] cursor-pointer rounded-md hover:bg-sky-500 hover:text-white transition">
          Apply Now
        </Button>
      </div>
            {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

          {/* MODAL */}
          <div className="relative bg-white w-[560px] min-h-[531.1px] rounded-[2px]">

            {/* INNER CONTENT */}
            <div className="px-[18px] pt-[14px]">

              {/* CLOSE */}
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute
                  right-[16px]
                  top-[-2px]
                  text-[56px]
                  leading-none
                  font-light
                  text-black
                  cursor-pointer
                "
              >
                ×
              </button>

              {/* TITLE */}
              <h2 className="text-[33.6px] text-left font-bold leading-[1.1] text-[#0d1b2a] mb-[18px]">
                Application Form
              </h2>

              {/* FORM */}
              <form className="w-full">

                {/* NAME */}
                <div className="mb-[10px]">
                  <label className="block text-left text-[16px] text-[#999] mb-[4px] font-semibold">
                    Name
                  </label>

                  <input
                    type="text"
                    className="
                      w-full
                      h-[38px]
                      border
                      border-[#d9d9d9]
                      px-[10px]
                      text-[14px]
                      text-[#333]
                      outline-none
                      font-normal
                    "
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-[10px]">
                  <label className="block text-left text-[16px] text-[#999] mb-[4px] font-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="
                      w-full
                      h-[38px]
                      border
                      border-[#d9d9d9]
                      px-[10px]
                      text-[14px]
                      text-[#333] font-normal
                      outline-none
                    "
                  />
                </div>

                {/* TEXTAREA */}
                <div>
                  <label className="mb-[16px]"></label>
                  <textarea
                  placeholder="Write your cover letter here..."
                  rows={5}
                  className="
                    w-full
                    min-h-[191px]
                    mb-[10px]
                    border font-normal
                    border-[#d9d9d9]
                    px-3 py-2
                    text-[14px]
                    text-[#333] 
                    outline-none
                    resize-both
                    overflow-auto
                    block
                  "
                />

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                    
                    bg-[#3898ec] 
                    h-[42px]
                    px-[22px] mt-5
                    text-[14px]
                    font-medium
                    text-black
                    rounded-[2px]
                    hover:bg-sky-500
                    transition
                    cursor-pointer
                  "
                >
                  Submit
                </button>

              </form>
            </div>
          </div>
        </div>
      )}

    </div>

    </section>
            {/* FINAL CTA */}
      <section className="py-8 px-4 text-center">

        <h2 className="text-[56px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text  font-bold mb-5 font-stretch-100%">
          Don't See the Right Role?
        </h2>

        <p className="text-[#999] mb-4 text-[16px] max-w-4xl mx-auto">
          We're always looking for talented people who share our passion. Send us your resume and we'll reach out when a matching opportunity arises.
        </p>

        <Button className="mt-5 mb-4 bg-[#3898ec] text-[19.2px] w-[216.5px] h-[52.8px] font-semibold text-[#0d1b2a] hover:text-white cursor-pointer px-6 py-3">
          Send Your Resume
        </Button>

      </section>
        </main>
    <Footer />
    </div>
  )
}