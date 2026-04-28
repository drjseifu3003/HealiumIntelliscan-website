"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-black border-b border-gray-800 fixed top-0 left-0 w-full z-[100]">

        <div className="flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <Image
            src="/healium-intelliscan-logo.png"
            width={140}
            height={40}
            alt="logo"
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm font-medium">

            <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
              Home
            </Link>

            <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
              About Us
            </Link>

            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
              Contact Us
            </Link>

            <Link href="/careers" className="text-gray-400 hover:text-white transition-colors duration-200">
              Careers
            </Link>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <Button className="hidden md:block bg-sky-400 hover:bg-[rgb(81,122,249)] text-white px-5 py-2 text-sm">
              Request Demo
            </Button>

            {/* HAMBURGER */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-gray-300 hover:text-white transition"
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </nav>

      {/* NAVBAR OFFSET */}
      <div className="h-[72px]" />

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-[#0a0a0a] z-[110]
        transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white transition"
          >
            <X size={28} />
          </button>
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-6 px-8 mt-6 text-lg font-medium">

          <Link href="/" onClick={()=>setOpen(false)} className="text-gray-400 hover:text-white transition">
            Home
          </Link>

          <Link href="/about" onClick={()=>setOpen(false)} className="text-gray-400 hover:text-white transition">
            About Us
          </Link>

          <Link href="/contact" onClick={()=>setOpen(false)} className="text-gray-400 hover:text-white transition">
            Contact Us
          </Link>

          <Link href="/careers" onClick={()=>setOpen(false)} className="text-gray-400 hover:text-white transition">
            Careers
          </Link>

          <Button className="mt-8 bg-sky-400 hover:bg-[rgb(81,122,249)] text-white w-full py-3 text-base">
            Request Demo
          </Button>

        </div>
      </div>
    </>
  )
}