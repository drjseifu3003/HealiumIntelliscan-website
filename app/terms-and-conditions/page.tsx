import PageHeader from "@/components/pageheader";
import CTA from "@/components/cta";
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export default function Terms() {
  return (
    <>
    <Navbar/>
      {/* HEADER */}
      <PageHeader
        title="Terms and Conditions"
        subtitle="Please read these terms and conditions carefully before using our services."
      />

      {/* MAIN CONTENT */}
      <section className="bg-black px-6 py-20 text-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="text-5xl font-medium  ">Terms and Conditions</h2>
            <p className="mt-4 text-[#999] text-medium leading-relaxed">
              Welcome to Healium Intelliscan. These Terms and Conditions ("Terms") govern your access to and use of the Healium Intelliscan website, products, and services (collectively, "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-medium font-mono">Acceptance of Terms</h2>
            <p className="mt-3 text-[#999] text-medium leading-relaxed">
              By using the Services, you affirm that you are of legal age to enter into these Terms, or, if you are not, that you have obtained parental or guardian consent to enter into these Terms. Healium Intelliscan reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-[36px] font-semibold font-mono">Description of Services</h2>
            <p className="mt-2 text-[#999] text-medium leading-relaxed">
              Healium Intelliscan provides AI-powered ultrasound technology for the early detection and management of Chronic Kidney Disease (CKD). Our Services include, but are not limited to, AI-driven ultrasound devices, advanced renal health diagnostics, personalized perfusion modeling, and predictive analytics for CKD progression. Our technology aims to enhance precision and clarity in diagnosis, facilitate early detection, and support proactive treatment adjustments.
            </p>

            <h3 className="mt-4 font-medium text-[28px] font-mono">User Responsibilities</h3>
            <p className="mt-2 text-[#999] text-medium leading-relaxed">
              Our Services may contain links to third-party websites or services that are not owned or controlled by Healium Intelliscan. Healium Intelliscan has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Healium Intelliscan shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>

            <h3 className="mt-4 text-[28px] font-medium font-mono">Indemnification</h3>
            <p className="mt-2 text-[#999] text-medium leading-relaxed">
              You agree to defend, indemnify, and hold harmless Healium Intelliscan and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of (a) your use and access of the Service, by you or any person using your account and password; (b) a breach of these Terms, or (c) content posted on the Service.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-bold">Modifications to Terms and Conditions of Use</h2>
             <p className="mt-2 text-[#999] text-medium leading-relaxed">
              Healium Intelliscan reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            </div>

          <div>
            <h2 className="text-[28px] font-bold">Governing Law and Jurisdiction</h2>
             <p className="mt-2 text-[#999] text-medium leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
            </p>  
          </div>

        </div>
        
      
      </section>
      

      {/* CTA */}
      <CTA />
      
      <Footer/> 
      
    </>
    
  );
}