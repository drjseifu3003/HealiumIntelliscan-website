export function AboutSection() {
  return (
    <section id="about" className="p-4 flex items-center justify-center pt-8">
      <div className="container max-w-4xl flex flex-col gap-4 lg:flex-row items-center mx-auto">
        <div className="lg:w-3/4">
          <h2 className="text-2xl font-semibold text-white text-center mb-6 lg:text-left">About Healium Sono</h2>
          <p className=" leading-relaxed">
            Healium Intelliscan is a pioneering company in the field of remote ultrasound diagnostics. Our mission is
            to revolutionize healthcare by providing cutting-edge technology that connects sonographers with patients
            in remote locations. We are committed to improving healthcare accessibility and reducing costs while
            maintaining the highest standards of diagnostic accuracy.
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