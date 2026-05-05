import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link";


export default function CareersPage() {
  return (
    <div className="bg-black text-white">
  <Navbar />

  <main className="">

      {/* HERO */}
      <section className="text-center py-28 md:py-32 px-6 bg-gradient-to-b from-[#517af9] via-[#1e45d5cc] to-black">
        
        <h1 className="text-[56px] font-bold max-w-4xl mx-auto">
          Build the Future of Healthcare With Us
        </h1>

        <p className="mt-4 text-[#999] max-w-4xl mx-auto text-[18px] md:text-base">
          Join our mission to transform kidney disease detection through AI-powered ultrasound technology. We're looking for passionate innovators ready to make a real impact.
        </p>

        {/* STATS */}
        <div className="mt-10 flex justify-center gap-12 text-center">
          <div>
            <p className="text-[43.2px] font-bold">11-50</p>
            <p className="text-gray-400 text-sm">Team Members</p>
          </div>

          <div>
            <p className="text-[43.2px] font-bold">2020</p>
            <p className="text-gray-400 text-sm">Founded</p>
          </div>

          <div>
            <p className="text-[43.2px] font-bold">NYC</p>
            <p className="text-gray-400 text-sm">Headquarters</p>
          </div>
        </div>

      </section>
       {/* WHY JOIN */}
      <section className="py-20 px-6 bg-linear-to-b bg-gradient-to-b from-[#517af9] via-[#1e45d5cc] to-black text-center">
        
        <h2 className="text-[56px] font-bold mb-5">
          Why Join Healium IntelliScan?
        </h2>

        <p className="mt-2 text-[#999] text-[18px]">
          Be part of a team that's dedicated to saving lives through early detection technology
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className="border border-[#f2f3ff] p-6 rounded-lg text-left">
            <h3 className=" text-[22px] font-semibold">Meaningful Impact</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            Work on technology that directly impacts patient outcomes. Help detect chronic kidney disease before it becomes life-threatening.
            </p>
        </div>

        <div className="border border-[#f2f3ff] p-6 rounded-lg text-left">
            <h3 className="text-[22px] font-semibold">Cutting-Edge Technology</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            Work with AI, machine learning, and computer vision to develop next-generation point-of-care ultrasound diagnostics.
            </p>
        </div>

        <div className="border border-[#f2f3ff] p-6 rounded-lg text-left">
            <h3 className="text-[22px] font-semibold">Growth Opportunities</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            Join an early-stage startup where your contributions matter. Grow with us as we scale our technology globally.
            </p>
        </div>

        <div className="border border-[#f2f3ff] p-6 rounded-lg text-left">
            <h3 className="text-[22px] font-semibold">Collaborative Culture</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            Work alongside experts in healthcare, AI, and medical devices. We value diverse perspectives and open communication.
            </p>
        </div>

        <div className="border border-[#f2f3ff] p-6 rounded-lg text-left">
            <h3 className="text-[22px] font-semibold">Innovation First</h3>
            <p className="text-[16px] font-light text-gray-400 mt-2">
            We encourage experimentation and creative problem-solving. Your ideas can shape the future of diagnostic healthcare.
            </p>
        </div>

        <div className="border border-[#f2f3ff] p-6 rounded-lg text-left">
            <h3 className="text-[22px] font-semibold">Healthcare Benefits</h3>
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

        <div className="mt-12 space-y-6 max-w-4xl mx-auto">

      {/* CARD 1 */}
      <div className="border text-left border-gray-700 rounded-xl px-8 py-10 flex justify-between items-center hover:border-sky-400 transition">

        <div>
          <h3 className="text-[24px] mb-4 font-bold">
            Echocardiography Sonographer
          </h3>

          <p className="text-[#999] text-[16px] font-normal mt-1 flex gap-3 flex-wrap">
            <span>Bangalore, India</span>
            <span>Part-time</span>
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {["Cardiac Imaging", "Ultrasound", "DICOM"].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-[#0e2a3b] text-[#0f969c] text-[16px] px-[15px] py-[9px] rounded-full hover:bg-[#123a52] transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Button className="bg-[#3898ec] text-black px-5 py-2 rounded-md hover:bg-sky-500 hover:text-white transition">
          Apply Now
        </Button>
      </div>

      {/* CARD 2 */}
      <div className="border  text-left border-gray-700 rounded-xl px-8 py-6 flex justify-between items-center hover:border-sky-400 transition">

        <div>
          <h3 className="text-[24px] font-bold">
            Senior Machine Learning Engineer
          </h3>

          <p className="text-[#999] text-[16px] font-normal mt-1 flex gap-3 flex-wrap">
          <span>New York, NY (Hybrid)</span>
          <span>Full-time</span>
        </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {["AI/ML", "Computer Vision", "Python"].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-[#0e2a3b] text-[#0f969c] text-[16px] px-[15px] py-[9px] rounded-full hover:bg-[#123a52] transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Button className="bg-[#3898ec] text-black px-5 py-2 rounded-md hover:bg-sky-500 hover:text-white transition">
          Apply Now
        </Button>
      </div>

      {/* CARD 3 */}
      <div className="border  text-left border-gray-700 rounded-xl px-8 py-6 flex justify-between items-center hover:border-sky-400 transition">

        <div>
          <h3 className="text-[24px] font-bold mb-4">
            Project Manager & Product Owner Intern
          </h3>

          <p className="text-[#999] text-[16px] font-normal mt-1 flex gap-3 flex-wrap">
            <span>India (Remote)</span>
            <span>Internship</span>
            <span>3–6 months</span>
          </p>

         <div className="flex gap-2 mt-3 flex-wrap">
          {["Product Management", "Agile", "Healthcare"].map((tag) => (
            <Link
              key={tag}
              href="#"
              className="bg-[#0e2a3b] text-[#0f969c] text-[16px] px-[15px] py-[9px] rounded-full hover:bg-[#123a52] transition"
            >
              {tag}
            </Link>
          ))}
        </div>
        </div>

        <Button className="bg-[#3898ec] text-black px-5 py-2 rounded-md hover:bg-sky-500 hover:text-white transition">
          Apply Now
        </Button>
      </div>

      
      <div className="border  text-left border-gray-700 rounded-xl px-8 py-6 flex justify-between items-center hover:border-sky-400 transition">

        <div>
          <h3 className="text-[24px] font-bold">
            Clinical Research Associate
          </h3>

          <p className="text-[#999] text-[16px] font-normal mt-1 flex gap-3 flex-wrap">
            <span>New York, NY</span>
            <span>Full-time</span>
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {["AI/ML", "Computer Vision", "Python"].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-[#0e2a3b] text-[#0f969c] text-[16px] px-[15px] py-[9px] rounded-full hover:bg-[#123a52] transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Button className="bg-[#3898ec] text-black px-5 py-2 rounded-md hover:bg-sky-500 hover:text-white transition">
          Apply Now
        </Button>
      </div>

      {/* CARD 5 */}
      <div className="border text-left border-gray-700 rounded-xl px-8 py-6 flex justify-between items-center hover:border-sky-400 transition">

        <div>
          <h3 className="text-[24px] font-bold mb-4">
            Full Stack Developer
          </h3>

          <p className="text-[#999] text-[16px] font-normal mt-1 flex gap-3 flex-wrap">
            <span>Remote (US)</span>
            <span>Full-time</span>
          </p>

          <div className="flex gap-2 mt-3 flex-wrap">
            {["React", "Node.js", "Cloud"].map((tag) => (
              <Link
                key={tag}
                href="#"
                className="bg-[#0e2a3b] text-[#0f969c] text-[16px] px-[15px] py-[9px] rounded-full hover:bg-[#123a52] transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Button className="bg-[#3898ec] text-black px-5 py-2 rounded-md hover:bg-sky-500 hover:text-white transition">
          Apply Now
        </Button>
      </div>

    </div>

    </section>
            {/* FINAL CTA */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-5xl font-bold mb-5">
          Don't See the Right Role?
        </h2>

        <p className="text-gray-400 mt-2 text-sm max-w-xl mx-auto">
          We're always looking for talented people who share our passion. Send us your resume and we'll reach out when a matching opportunity arises.
        </p>

        <Button className="mt-6 bg-sky-400 text-black hover:text-white cursor-pointer px-3 py-4">
          Send Your Resume
        </Button>

      </section>
        </main>
    <Footer />
    </div>
  )
}