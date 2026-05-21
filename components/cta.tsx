import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      className="relative w-full text-white text-center py-28 md:py-36 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            #000000 0%,
            #000000 15%,
            #0a1628 35%,
            #1e3a8a 60%,
            #3b5edb 80%,
            #1e3a8a 90%,
            #000000 100%
          ),
          url('/hexagon.png')
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "75px",   
        backgroundBlendMode: "soft-light",
      }}
    >

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* TEXT */}
        <h3 className="text-[40px] font-bold mb-10">
            Learn more about <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-[56px] font-bold mb-4">Our Solution</span>
          </h3>

        {/* IMAGE */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/body.png"
            alt="body"
            width={420}
            height={420}
            className="w-64 md:w-[380px] opacity-90"
          />
        </div>

        {/* BUTTON */}
        <div className="mt-8">
          <Link href="/contact">
            <button className="bg-sky-400 px-6 py-3 rounded-md text-white font-medium hover:bg-[rgb(81,122,249)] transition">
              Request Demo
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}