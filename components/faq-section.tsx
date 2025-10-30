import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faqs" className="px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-semibold text-center text-white">
          Frequently Asked Questions
        </h2>

        <div className="pb-2">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="outline outline-1 outline-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left">How does your remote ultrasound service work?</AccordionTrigger>
              <AccordionContent>
                Healium Sono connects hospitals and clinics with qualified sonographers and radiologists through a
                secure cloud system. Scans are done by your team on-site, and our specialists review them remotely in
                real time. We support all major types of ultrasound, including cardiac and OB/GYN imaging.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="outline outline-1 outline-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left">How fast will we receive the reports?</AccordionTrigger>
              <AccordionContent>
                Most results are ready within 30 minutes after the scan is uploaded. Urgent cardiac and obstetric cases
                are reviewed immediately by our radiology team.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="outline outline-1 outline-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left">Which hospitals benefit most from this service?</AccordionTrigger>
              <AccordionContent>
                Hospitals and clinics in areas with limited access to radiologists see the biggest change. Community
                hospitals, maternity centers, and regional facilities use our platform to bring expert cardiac and
                OB/GYN diagnostics directly to their patients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="outline outline-1 outline-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What types of ultrasound studies can you handle?
              </AccordionTrigger>
              <AccordionContent>
                We read a wide range of studies including cardiac, obstetric, gynecologic, abdominal, vascular, and
                musculoskeletal exams. Our team also supports advanced fetal and maternal health assessments.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="outline outline-1 outline-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left">Is patient data secure?</AccordionTrigger>
              <AccordionContent>
                Yes. Our platform follows strict healthcare privacy standards and uses full encryption for every file
                and report. All data is stored and transmitted safely in compliance with HIPAA requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="outline outline-1 outline-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left">How do you make sure the reports are accurate?</AccordionTrigger>
              <AccordionContent>
                All reports are prepared by board-certified radiologists with experience in ultrasound diagnostics.
                Every case goes through a second quality review to maintain consistent accuracy and reliability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="outline outline-1 outline-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left">How is your pricing structured?</AccordionTrigger>
              <AccordionContent>
                We offer flexible pricing models based on volume and service level requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}