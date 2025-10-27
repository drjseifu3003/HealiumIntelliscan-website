export function AboutSection() {
  return (
    <section id="about" className="p-4 flex items-center justify-center pt-8">
      <div className="container max-w-4xl flex flex-col gap-4 lg:flex-row items-center mx-auto">
        <div className="lg:w-3/4">
          <h2 className="text-2xl font-semibold text-white text-center mb-6 lg:text-left">About Healium Sono</h2>
          <p className=" leading-relaxed">
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
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}