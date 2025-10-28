import { Card } from "./ui/card"

export function FeaturesSection() {
  const features = [
    {
      title: "Lightning Fast",
      desc: "From scan to report in minutes, not hours",
      icon: "/features/lighting.svg",
    },
    {
      title: "Massive Savings",
      desc: "Cut diagnostic costs by up to 70%",
      icon: "/features/saving.svg",
    },
    {
      title: "Future-Ready",
      desc: "Advanced AI-powered cloud technology",
      icon: "/features/future.svg",
    },
    {
      title: "Always Available",
      desc: "24/7/365 expert coverage",
      icon: "/features/always.svg",
    },
    {
      title: "Unmatched Quality",
      desc: "Board-certified radiologist network",
      icon: "/features/unmatched.svg",
    },
  ]

  return (
    <section id="features" 
    className="p-4"
    >
      <div className="container mx-auto space-y-10">
        {/* Intro text */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg leading-relaxed tracking-wide">
            Healium Sono delivers advanced remote ultrasound diagnostics across key specialties
            including Cardiology and OB/GYN. Our platform helps hospitals improve efficiency, reduce
            operational costs, and elevate patient outcomes. By connecting certified sonographers and
            radiologists to patients in real time. We ensure every scan receives an expert, accurate,
            and timely interpretation.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto lg:gap-16">
          {features.map((f, i) => (
            <Card
              key={i}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(30.333%-1rem)] text-center text-white rounded-xl shadow-md space-y-0 flex flex-col gap-2 items-center"
            >
              <img src={f.icon} alt={f.title} className="w-12 h-12 mx-auto" />
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}