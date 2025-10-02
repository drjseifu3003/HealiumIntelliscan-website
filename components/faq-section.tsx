import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faqs" className="p-4 container mx-auto max-w-3xl space-y-8">
        <h2 className="text-2xl font-semibold text-center text-white pt-4">Frequently asked questions</h2>

        <Accordion type="single" collapsible className="space-y-4 pb-2">
          <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left">
              How does this revolutionary marketplace actually work?
            </AccordionTrigger>
            <AccordionContent>
              Our platform connects healthcare facilities with certified sonographers and radiologists through secure,
              real-time technology.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left">How fast can I actually get results?</AccordionTrigger>
            <AccordionContent>
              Most diagnostic reports are delivered within 30 minutes of scan completion.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left">Which hospitals see the biggest transformation?</AccordionTrigger>
            <AccordionContent>
              Rural and community hospitals typically see the most significant improvements in diagnostic capabilities
              and cost savings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left">How does your pricing work?</AccordionTrigger>
            <AccordionContent>
              We offer flexible pricing models based on volume and service level requirements.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left">What types of studies can you handle?</AccordionTrigger>
            <AccordionContent>
              We support all major ultrasound studies including abdominal, cardiac, vascular, and obstetric imaging.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left">Is my platform ultra-secure?</AccordionTrigger>
            <AccordionContent>
              Yes, our platform is HIPAA compliant with end-to-end encryption and meets all healthcare security
              standards.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6 mb-2">
            <AccordionTrigger className="text-left">How do you guarantee quality?</AccordionTrigger>
            <AccordionContent>
              All interpretations are performed by board-certified radiologists with specialized ultrasound training.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    </section>
  )
}