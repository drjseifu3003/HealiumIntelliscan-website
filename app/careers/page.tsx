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
          <section className="relative overflow-hidden text-center text-white">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1e45d5cc_0%,#2848a3_18%,#152b58_32%,#0a1732_44%,#040d1d_54%,#02070f_62%,#010304_68%,#010304_100%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(125%_88%_at_50%_0%,rgba(182,206,255,0.28)_0%,rgba(96,131,238,0.14)_34%,rgba(0,0,0,0)_72%)]"></div>
              <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:120px] opacity-24 mix-blend-soft-light"></div>
              <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:58px] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 px-6 pt-12 md:pt-14 pb-10 md:pb-12">
              <h1 className="text-[34px] md:text-[62px] leading-[1.1] bg-linear-to-r from-[white] to-[#bfc3ca] text-transparent bg-clip-text font-bold max-w-7xl mx-auto">
                Build the Future of Healthcare With
                <br className="hidden md:block" />
                Us
              </h1>

              <p className="mt-5 text-[#9ea6b4] max-w-4xl mx-auto text-[15px] md:text-[16px] leading-[1.55] font-medium">
                Join our mission to transform kidney disease detection through AI-powered ultrasound technology. We're looking for passionate innovators ready to make a real impact.
              </p>
            </div>

            {/* STATS */}
            <div className="relative z-10 py-10 md:py-14 px-6">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-center">
                <div>
                  <p className="text-[44px] md:text-[58px] leading-none font-bold bg-linear-to-r from-[white] to-[#bfc3ca] text-transparent bg-clip-text">11-50</p>
                  <p className="text-[#9aa0ac] text-[15px] md:text-[16px]">Team Members</p>
                </div>

                <div>
                  <p className="text-[44px] md:text-[58px] leading-none font-bold bg-linear-to-r from-[white] to-[#bfc3ca] text-transparent bg-clip-text">2020</p>
                  <p className="text-[#9aa0ac] text-[15px] md:text-[16px]">Founded</p>
                </div>

                <div>
                  <p className="text-[44px] md:text-[58px] leading-none font-bold bg-linear-to-r from-[white] to-[#bfc3ca] text-transparent bg-clip-text">NYC</p>
                  <p className="text-[#9aa0ac] text-[15px] md:text-[16px]">Headquarters</p>
                </div>
              </div>
            </div>

          </section>

          {/* WHY JOIN */}
          <section className="relative overflow-hidden py-16 md:py-20 px-6 text-center text-white">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#1e45d5cc_0%,#2a4caf_30%,#19326f_56%,#0e1d43_74%,#050f24_88%,#010304_100%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(125%_90%_at_50%_0%,rgba(180,205,255,0.3)_0%,rgba(95,130,236,0.14)_35%,rgba(0,0,0,0)_72%)]"></div>
              <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:120px] opacity-22 mix-blend-soft-light"></div>
              <div className="absolute inset-0 bg-[url('/noise.jpg')] bg-[length:58px] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
              <h2 className="text-[34px] md:text-[56px] leading-[1.1] bg-linear-to-r from-[white] to-[#bfc3ca] text-transparent bg-clip-text font-bold mb-4">
                Why Join Healium IntelliScan?
              </h2>

              <p className="text-[#98a2b5] text-[15px] md:text-[16px] max-w-3xl mx-auto">
                Be part of a team that's dedicated to saving lives through early detection technology
              </p>

              <div className="mt-10 grid md:grid-cols-3 gap-5 max-w-6xl mx-auto text-left">

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] font-semibold bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text">Meaningful Impact</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                    Work on technology that directly impacts patient outcomes. Help detect chronic kidney disease before it becomes life-threatening.
                    </p>
                </div>

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text font-semibold">Cutting-Edge Technology</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                    Work with AI, machine learning, and computer vision to develop next-generation point-of-care ultrasound diagnostics.
                    </p>
                </div>

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text font-semibold">Growth Opportunities</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                    Join an early-stage startup where your contributions matter. Grow with us as we scale our technology globally.
                    </p>
                </div>

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text font-semibold">Collaborative Culture</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                    Work alongside experts in healthcare, AI, and medical devices. We value diverse perspectives and open communication.
                    </p>
                </div>

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text font-semibold">Innovation First</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                    We encourage experimentation and creative problem-solving. Your ideas can shape the future of diagnostic healthcare.
                    </p>
                </div>

              <div className="rounded-3xl border border-white/70 bg-[#213878]/35 px-6 py-8 backdrop-blur-[1px]">
                <h3 className="text-[19px] bg-linear-to-r from-[white] to-[#cfd3db] text-transparent bg-clip-text font-semibold">Healthcare Benefits</h3>
                <p className="text-[14px] md:text-[15px] font-light text-[#c8cfdb] mt-3 leading-[1.45]">
                    Comprehensive health coverage, flexible work arrangements, and competitive compensation packages.
                    </p>
                </div>
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
              <div className="border text-left border-[#908b8b] rounded-xl px-5 md:px-10 py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-sky-400 transition">

                <div className="w-full min-w-0">
                  <h3 className="text-[20px] md:text-[24px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text mb-4 font-bold">
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
                  className="font-semibold cursor-pointer text-[16px] md:text-[19.2px] px-6 py-3 w-full md:w-[147px] h-[48px] md:h-[52.78px] rounded-md">
                  Apply Now
                </Button>
              </div>

              {/* CARD 2 */}
              <div className="border text-left border-[#908b8b] rounded-xl px-5 md:px-10 py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-sky-400 transition">

                <div className="w-full min-w-0">
                  <h3 className="text-[20px] md:text-[24px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text mb-4 font-bold">
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
                className="font-semibold cursor-pointer text-[16px] md:text-[19.2px] px-6 py-3 w-full md:w-[147px] h-[48px] md:h-[52.78px] rounded-md">
                  Apply Now
                </Button>
              </div>

              {/* CARD 3 */}
              <div className="border bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text text-left border-[#908b8b] rounded-xl px-5 md:px-10 py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-sky-400 transition">

                <div className="w-full min-w-0">
                  <h3 className="text-[20px] md:text-[24px] font-bold mb-4">
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
                className="font-semibold text-[16px] md:text-[19.2px] cursor-pointer px-6 py-3 w-full md:w-[147px] h-[48px] md:h-[52.78px] rounded-md">
                  Apply Now
                </Button>
              </div>

              
              <div className="border text-left border-[#908b8b] rounded-xl px-5 md:px-10 py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-sky-400 transition">

                <div className="w-full min-w-0">
                  <h3 className="text-[20px] md:text-[24px] bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text mb-4 font-bold">
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
                className="text-[16px] md:text-[19.2px] font-semibold px-6 py-3 w-full md:w-[147px] h-[48px] md:h-[52.78px] cursor-pointer rounded-md">
                  Apply Now
                </Button>
              </div>

              {/* CARD 5 */}
              <div className="border text-left bg-linear-to-r from-[white] to-[#a2a2a2] text-transparent bg-clip-text border-[#908b8b] rounded-xl px-5 md:px-10 py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-sky-400 transition">

                <div className="w-full min-w-0">
                  <h3 className="text-[20px] md:text-[24px] font-bold mb-4">
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
                className="text-[16px] md:text-[19.2px] font-semibold px-6 py-3 w-full md:w-[147px] h-[48px] md:h-[52.78px] cursor-pointer rounded-md">
                  Apply Now
                </Button>
              </div>
              {open && (
                <div
                  className="fixed inset-0 z-[300] flex items-center justify-center bg-black/65 backdrop-blur-[2px] px-4"
                  onClick={() => setOpen(false)}
                >
                  {/* MODAL */}
                  <div
                    className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl border border-[#d6deef] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="px-6 sm:px-8 pt-6 pb-7">
                      {/* CLOSE */}
                      <button
                        onClick={() => setOpen(false)}
                        className="absolute right-4 top-3 text-4xl leading-none font-light text-[#6d7686] hover:text-[#111827] transition cursor-pointer"
                        aria-label="Close application form"
                      >
                        ×
                      </button>

                      {/* TITLE */}
                      <h2 className="text-[30px] sm:text-[36px] text-left font-bold leading-[1.1] text-[#0d1b2a]">
                        Application Form
                      </h2>
                      <p className="text-left text-[14px] sm:text-[15px] text-[#6b7280] mt-2 mb-6">
                        Tell us about yourself and why you are a good fit for this role.
                      </p>

                      {/* FORM */}
                      <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                              Full Name
                            </label>
                            <input
                              type="text"
                              placeholder="John Doe"
                              className="w-full h-11 rounded-lg border border-[#d8dee9] px-3 text-[14px] text-[#1f2937] outline-none focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                            />
                          </div>

                          <div>
                            <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                              Email Address
                            </label>
                            <input
                              type="email"
                              placeholder="you@example.com"
                              className="w-full h-11 rounded-lg border border-[#d8dee9] px-3 text-[14px] text-[#1f2937] outline-none focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            className="w-full h-11 rounded-lg border border-[#d8dee9] px-3 text-[14px] text-[#1f2937] outline-none focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                          />
                        </div>

                        <div>
                          <label className="block text-left text-[14px] text-[#4b5563] mb-1.5 font-semibold">
                            Cover Letter
                          </label>
                          <textarea
                            placeholder="Write your cover letter here..."
                            rows={6}
                            className="w-full min-h-[170px] rounded-lg border border-[#d8dee9] px-3 py-2.5 text-[14px] text-[#1f2937] outline-none resize-y focus:border-[#3898ec] focus:ring-2 focus:ring-[#3898ec]/20"
                          />
                        </div>

                        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3 pt-1">
                          <Button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="h-11 px-5 rounded-lg text-[14px] font-medium cursor-pointer"
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            className="h-11 px-6 text-[14px] font-semibold rounded-lg cursor-pointer"
                          >
                            Submit Application
                          </Button>
                        </div>
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

            <Button
              onClick={() => setOpen(true)}
              className="
                mt-5
                mb-4
                text-[19.2px]
                w-[216.5px]
                h-[52.8px]
                font-semibold
                cursor-pointer
                px-6
                py-3
              "
            >
              Send Your Resume
            </Button>

          </section>
      </main>

      <Footer/>
    </div>
  )
}