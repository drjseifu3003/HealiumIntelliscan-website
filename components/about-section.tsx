export function AboutSection() {
  return (
    <section id="about" className="px-4 py-12 flex items-center justify-center liquid-glass">
      <div className="container max-w-5xl flex flex-col gap-4 lg:flex-row items-center mx-auto">
        <div className="lg:w-3/4">
          <h2 className="text-3xl font-semibold text-white mb-6">About Healium Sono</h2>
          <p className="text-lg leading-relaxed">
            Healium Sono is redefining how ultrasound diagnostics are delivered. Through our
            advanced remote imaging platform, we empower hospitals and clinics to access expert
            Cardiology and OB/GYN interpretations in real time. Our mission is to expand access to
            high-quality diagnostics, improve patient outcomes, and reduce operational costs
            without compromising clinical precision or care standards.
          </p>
        </div>
        <div className="relative lg:w-1/4">
          <img
            src="/background/about.svg"
            alt="Medical professional using ultrasound device"
            className="w-full rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  )
}