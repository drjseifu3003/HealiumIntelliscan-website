// app/about/page.tsx
import RequestDemoForm from "@/components/book-form";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import React from "react";

export default function DemoBookPage() {

  return (
    <>
      {/* Hero Section */}
      
      <SiteHeader />
      <section className="relative flex flex-col items-center justify-center text-white py-10 px-6 md:px-12 lg:px-20 text-center space-y-8">
        <RequestDemoForm/>
      </section>

      <Footer/>
    </>
  );
}
