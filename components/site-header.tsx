"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Briefcase, Tag, HelpCircle, FileText, Info } from "lucide-react"

export function SiteHeader() {
  const links = [
    { href: "/", label: "Home", icon: Briefcase },
    { href: "#features", label: "Features", icon: Info },
    { href: "#howitworks", label: "How it works", icon: Info },
    { href: "#faqs", label: "FAQs", icon: Info },
    { href: "#contact", label: "Contact Us", icon: HelpCircle },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          {/* <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/logo/logo.png"
              alt="Healium Intelliscan logo"
              width={120}
              height={20}
            />
          </Link> */}
          <div className="flex items-center space-x-2">
            <Link href='/'>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/logo/logo.svg" className="w-8 h-8" />
              </div>
            </Link>
            <div className="flex flex-col items-start">
              <Link href='/'><span className="font-semibold text-lg text-[#687FE5]">Healium Sono</span></Link>
              <Link href='https://www.healiumintelliscan.com' target="_blank" className="text-[#687FE5]">
                <span className="text-sm">by Healium Intelliscan</span>
              </Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-purple-300 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-[#4981F8] text-white font-medium rounded-lg px-6 py-2.5
                         hover:bg-[#4981F8] hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              <Link href="https://healiumsono.com/login">Login</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="liquid-glass border-gray-800 p-0 w-64 flex flex-col"
              >
                {/* Brand Header */}
                {/* <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <Image
                    src="/logo/logo.svg"
                    alt="Healium logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="font-semibold tracking-wide text-white text-lg">Healium Intelliscan</span>
                </div> */}

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                  <Button
                    asChild
                    className="mx-4 bg-[#4981F8] text-white font-medium rounded-lg hover:bg-[#4981F8]"
                  >
                    <Link href="https://healiumsono.com/login">Login</Link>
                  </Button>
                  
                <div className="mt-auto border-t border-gray-800 p-4">
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}