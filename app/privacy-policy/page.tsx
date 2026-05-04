import PageHeader from "@/components/pageheader";
import CTA from "@/components/cta";
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar/>
      {/* HERO HEADER */}
      <PageHeader
        title="Privacy Policy"
        subtitle="Please read these privacy policies carefully before using our services."
      />

      {/* MAIN CONTENT */}
      <section className="bg-black px-6 py-20 text-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <div>
            <h2 className="text-[48px] font-medium  ">Privacy Policy</h2>
            <p className="mt-4 text-[#999] text-medium leading-relaxed">
              Healium Intelliscan ("we," "our," or "us") is committed to protecting the privacy and security of health information. This Privacy Policy outlines our practices concerning the collection, use, disclosure, and safeguarding of information when healthcare providers (e.g., hospitals, clinics, medical professionals) utilize our AI-powered ultrasound technology and related services (collectively, "Services"). We understand the critical importance of protecting Protected Health Information (PHI) and other sensitive data in the healthcare sector.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-mono font-medium">Our Role and Responsibilities</h2>
            <p className="mt-3 text-[#999] text-medium leading-relaxed">
              Healium Intelliscan acts primarily as a Business Associate to covered entities (our healthcare provider clients) under the Health Insurance Portability and Accountability Act (HIPAA) and its implementing regulations. We process health information on behalf of, and at the direction of, our clients. Our obligations are governed by this Privacy Policy, our Terms and Conditions, and specific Business Associate Agreements (BAAs) executed with each client, which detail the permissible uses and disclosures of PHI.
            </p>
          </div>

          <div>
            <h2 className="text-[32px]  mb-4 font-bold">Information We Process</h2>
            <p className=" text-[#999] text-medium leading-relaxed">
              Through our Services, we may process various types of information, including:
            </p>
            </div>

            <div>
            <h3 className="  mb-4 font-[20px] font-bold">Protected Health Information (PHI)</h3>
            <p className=" text-[#999] text-medium leading-relaxed">
              This includes individually identifiable health information created or received by a healthcare provider and transmitted or maintained by us in any form or medium. Examples include patient names, dates of birth, medical record numbers, diagnostic images (ultrasounds), clinical findings, treatment plans, and other data related to a patient's past, present, or future physical or mental health condition or the provision of healthcare.
            </p>
            </div>

            <div>
            <h3 className=" font-[20px] font-bold mb-4">Technical and Usage Data</h3>
            <p className=" text-[#999] text-medium leading-relaxed">
              Information automatically collected when our Services are accessed and used, such as device information, IP addresses, operating system details, application usage data, and performance metrics. This data is primarily used for service delivery, maintenance, security, and improvement, and is generally de-identified or aggregated where possible.
            </p>
          </div>
          

          <div>
            <h2 className="text-[28px] font-mono font-medium mb-4">How We Use Information</h2>
             <p className="mb-[16px] text-[#999] text-medium leading-relaxed">
              We use the information we process solely for the purposes specified in our agreements with healthcare providers, including:
            </p>
             <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold ">
                Providing and Maintaining Services:
              </strong>{" "}
              To deliver our AI-powered ultrasound diagnostic services, process ultrasound data, generate reports, and ensure the proper functioning of our technology.
            </p>

            <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                Service Improvement:
              </strong>{" "}
              To analyze usage patterns, troubleshoot issues, and enhance the accuracy, efficiency, and features of our AI algorithms and diagnostic tools. This often involves the use of de-identified or aggregated data.
            </p>

            <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                Support and Maintenance:
              </strong>{" "}
              To provide technical support, respond to inquiries, and perform necessary maintenance on our systems.
            </p>

            <p className="text-[#999] text-medium leading-relaxed  mb-4">
              <strong className="text-[#999] font-semibold">
                Security and Compliance:
              </strong>{" "}
              To ensure the security and integrity of our systems and data, and to comply with applicable laws and regulations, including HIPAA.
            </p>

            <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                Research and Development:
              </strong>{" "}
              With appropriate de-identification and/or patient consent obtained by the covered entity, we may use data for research and development to advance medical knowledge and improve our AI models.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] font-mono font-medium mb-4">Disclosure of Information</h2>
             <p className="mt-2 text-[#999] text-medium leading-relaxed mb-4">
              We do not sell or rent PHI. We disclose information only as permitted or required by our agreements with healthcare providers and applicable law, including:
            </p>
             <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                To Covered Entities:
              </strong>{" "}
              We disclose PHI back to the healthcare providers who provided it to us, as necessary for their treatment, payment, and healthcare operations.
            </p>

            <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                To Subcontractors:
              </strong>{" "}
              We may engage third-party subcontractors to assist us in providing our Services. These subcontractors are also bound by confidentiality obligations and Business Associate Agreements to protect PHI.
            </p>

            <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                As Required by Law:
              </strong>{" "}
              We may disclose information when legally compelled to do so, such as in response to a court order, subpoena, or other legal process, or to comply with regulatory requirements.
            </p>

            <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                For Public Health Activities:
              </strong>{" "}
              As permitted by HIPAA, we may disclose PHI for public health activities, such as preventing or controlling disease.
            </p>

            <div>
            <h2 className="text-[28px] mb-4 font-mono font-medium">Data Security</h2>
             <p className=" mb-4 text-[#999] text-medium leading-relaxed">
              Healium Intelliscan implements robust administrative, physical, and technical safeguards to protect the confidentiality, integrity, and availability of the information we process, particularly PHI. These measures include:
            </p>
             <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                Encryption: 
              </strong>{" "}
              Data is encrypted both in transit and at rest.
            </p>

            <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                Access Controls:
              </strong>{" "}
              Strict access controls are in place to limit access to PHI to authorized personnel only, based on the principle of least privilege.
            </p>

            <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                Auditing and Monitoring:
              </strong>{" "}
              Our systems are regularly monitored and audited to detect and prevent unauthorized access or data breaches.
            </p>

            <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                Employee Training: 
              </strong>{" "}
              Our staff receive regular training on privacy, security, and HIPAA compliance.
            </p>

            <p className="text-[#999] text-medium leading-relaxed mb-4">
              <strong className="text-[#999] font-semibold">
                Physical Security:
              </strong>{" "}
              Our data centers and infrastructure are protected by physical security measures.
            </p>
          </div>

          <div>
            <h2 className="text-[32px] mt-1 font-bold mb-4">Data Retention</h2>
            <p className=" text-[#999]  mb-4 text-medium leading-relaxed">
              We retain information, including PHI, for as long as necessary to provide our Services to our clients, fulfill our contractual obligations, and comply with legal, regulatory, and audit requirements. Retention periods are often dictated by our Business Associate Agreements and applicable healthcare regulations.
            </p>
            </div>

          <div>
            <h2 className="text-[32px] mt-1 font-bold mb-4">Your Rights</h2>
            <p className="mt-3 text-[#999] text-medium leading-relaxed">
              As a healthcare provider, you maintain control over the PHI you provide to us. Your rights, and the rights of your patients, regarding PHI are primarily exercised through your organization as the covered entity. We will cooperate with our clients to fulfill patient rights requests (e.g., access, amendment, accounting of disclosures) as required by HIPAA and our BAAs.
            </p>
          </div>

        </div>
        </div>
        
      </section>
      

      {/* CTA */}
      <CTA />
      
      <Footer/> 
      
    </>
    
  );
}