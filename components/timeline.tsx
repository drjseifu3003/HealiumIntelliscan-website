"use client"

import { ArrowUpRight, Award, Badge, BadgePlus, DollarSign, Lightbulb, ThumbsUp } from "lucide-react"

export default function StoryTimeline() {
  const timeline = [
    {
      year: "2020",
      title: "The Dawn of Innovation",
      description:
        "In the heart of 2020, our company was born from the shared vision of Dr. Biju Jacob and Neeraj Kumar. Their journeys merged at the prestigious Entrepreneur First (EF) program in Singapore, fueled by a mutual passion to revolutionize global access to medical diagnostics via pioneering AI solutions.",
      icon: <ArrowUpRight className="h-6 w-6 text-white" />,
    },
    {
      year: "2021",
      title: "Setting New Standards",
      description:
        "The year saw the unveiling of our groundbreaking AI prototype for precise CKD detection. This innovative launch set a new benchmark for early and accurate disease prediction.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
    },
    {
      year: "2022",
      title: "Seizing Success",
      description:
        "TA pivotal moment unfolded as we secured seed funding, strengthening our commitment to advancing CKD care solutions.",
      icon: <DollarSign className="h-6 w-6 text-white" />,
    },
    {
      year: "2023",
      title: "Pioneering Precision",
      description:
        "We took a giant leap forward in CKD detection and care with the introduction of our advanced AI-integrated Ultrasound Device.",
      icon: <ThumbsUp className="h-6 w-6 text-white" />,
    },
    {
      year: "2024",
      title: "Achieving Milestones & Commitment",
      description:
        "We reached a significant regulatory milestone by submitting our AI-enhanced Ultrasound Device for FDA 510(k) clearance, striving to comply with rigorous safety and effectiveness standards. This submission echoes our unwavering commitment to offering trusted, clinically validated tools for comprehensive CKD management and patient care.",
      icon: <Award className="h-6 w-6 text-white" />,
    },
  ]

  return (
    <section className="text-white py-16 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left heading */}
        <div className="text-left">
          <p className="text-blue-400 text-lg font-medium mb-2">Our story</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let&apos;s embark on the journey of{" "}
            <span className="block text-blue-500">How it all started...</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 pl-10">
          {timeline.map((item, index) => (
            <div key={index} className="relative mb-12">
              {/* Icon container */}
              <div className="absolute -left-12 flex items-center justify-center w-12 h-12 rounded-lg bg-gray-900 border border-gray-700">
                {item.icon}
              </div>

              {/* Content */}
              <div className="text-left ml-8">
                <span className="text-gray-400 font-medium">{item.year}</span>
                <h3 className="font-bold text-lg mt-1">{item.title}</h3>
                <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}