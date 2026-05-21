import Image from "next/image"
import { Button } from "@/components/ui/button"
import CTA from "@/components/cta";
import Footer from "@/components/layout/footer"


export default function Details() {
  return (
    <section className="bg-black text-white py-20 md:py-28 px-6">
      
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center space-y-10">

        
        <h2 className="text-[40px] font-bold  mx-auto leading-snug mb-10">
          State-of-the-art algorithms and{" "}
          <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-[56px] font-bold">
            clinically validated digital biomarkers
          </span>
        </h2>

        
        <div className="flex flex-col md:flex-row  justify-between gap-12">
          <span className="bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff]  width=200px py-10 px-8 font-medium rounded-xl text-[16px]">
            AI Powered CKD Biomarkers
          </span>
          <span className="bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff]  width=200px py-10 px-8 font-medium rounded-xl text-[16px]">
            Personalized Perfusion Modelling
          </span>
          <span className="bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff]  width=200px font-medium py-10 px-8 rounded-xl text-[16px]">
            Causality Prediction
          </span>
          <span className="bg-gradient-to-b from-[rgb(55,136,185)] to-[#0c51ff]  width=200px py-10 px-8 font-medium rounded-xl text-[16px]">
            FDA 510(k) Pending
          </span>
        </div>

        
        <div className="bg-[#13131300] mx-auto w-56 md:w-72 mt-10">
          <Image
            src="/device.png"
            alt="device"
            width={382}
            height={514}
            
          />
        </div>

        {/* DEVICE  */}
        <h3 className=" font-bold text-[19.2px]">
          Healium Ultrasound Device for CKD Detection and Management
        </h3>

        <p className="text-[#999] text-[16px] font-normal mx-auto">
          Optimize CKD detection and management with the Healium Ultrasound Device, merging superior AI technology with clinical precision
        </p>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">


          <div>
            <Image src="/icon1.png" alt="" width={165} height={125} className="mx-auto w-auto h-auto mb-4" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Enhanced Visualization</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              Leveraging AI to create detailed ultrasound images that reveal intricate kidney structures, facilitating the early detection of CKD.
            </p>
          </div>

         
          <div>
            <Image src="/icon2.png" alt="" width={165} height={125} className="mx-auto w-auto h-auto mb-4" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Dynamic Scans Analysis</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              Utilizing AI for real-time processing of ultrasound videos, allowing nephrologists to observe kidney function and flow dynamics in action for precise CKD monitoring.
            </p>
          </div>

          
          <div>
            <Image src="/icon3.png" alt="" width={165} height={125} className="mx-auto w-auto h-auto mb-4" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Predictive Analytics</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              Deep learning algorithms analyze ultrasound data to predict CKD progression, enabling proactive treatment adjustments and better patient outcomes.
            </p>
          </div>

         
          <div>
            <Image src="/icon4.png" alt="" width={165} height={125} className="mx-auto  w-auto h-auto mb-4" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Scalable Screening</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              Our technology scales to meet the needs of growing patient populations, ensuring that high-risk individuals receive timely CKD screening with AI-augmented ultrasound.
            </p>
          </div>

          
          <div>
            <Image src="/icon5.png" alt="" width={165} height={125} className="mx-auto w-auto h-auto mb-4" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Secure Data Handling</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              State-of-the-art encryption and privacy measures protect sensitive patient data generated from ultrasound scans, maintaining confidentiality in CKD diagnosis and treatment.
            </p>
          </div>

          
          <div>
            <Image src="/icon6.png" alt="" width={165} height={125} className="mx-auto w-auto h-auto mb-4" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Knowledge Empowerment</h4>
            <p className="text-[16px] font-ubuntu font-normal text-[#999]">
              Crafting specialized educational materials that elucidate the predictive capabilities of AI-powered ultrasounds in CKD, empowering patients with knowledge for proactive disease management.
            </p>
          </div>

          
          <div>
            <Image src="/icon7.png" alt="" width={165} height={125} className="mx-auto w-auto h-auto mb-4" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Continuous Care</h4>
            <p className="text-[16px] font-ubuntu font-normal text-gray-400">
              Utilizing AI to monitor CKD markers in ultrasound data, triggering timely alerts for critical changes, ensuring prompt intervention and individualized patient care plans.
            </p>
          </div>

          
          <div>
            <Image src="/icon8.png" alt="" width={165} height={125} className="mx-auto w-auto h-auto mb-4" />
            <h4 className="font-bold text-[19.2px] bg-linear-180 from-white to-[#a2a2a2] text-transparent bg-clip-text font-sans ">Intelligent Insights</h4>
            <p className="text-[16px] font-ubuntu font-normal text-gray-400">
              Advanced AI algorithms process and analyze ultrasound imaging data to uncover hidden patterns and trends, providing deep insights into CKD detection and progression risk factors.
            </p>
          </div>

        </div>

        {/* INVESTORS */}
        <div className="mt-20">
          <h3 className="text-[40px] font-bold mb-10">
            Backed by <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-5xl font-bold mb-4">Global Investors</span>
          </h3>

          <div className= "flex flex-wrap justify-center gap-10 opacity-80 hover:opacity-100 h-auto w-auto">
            <Image src="/investor1.png" alt="" width={140} height={120.69} />
            <Image src="/investor2.png" alt="" width={140} height={120.69} />
            <Image src="/investor3.png" alt="" width={140} height={120.69} />
            <Image src="/investor4.png" alt="" width={140} height={120.69} />
            <Image src="/investor5.png" alt="" width={140} height={120.69} />
            <Image src="/investor6.png" alt="" width={140} height={120.69} />
            <Image src="/investor7.png" alt="" width={140} height={120.69} />
          </div>
        </div>

        {/* <section
        className="text-white w-full py-24 md:py-32 text-center"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              #000000 0%,
              #0b1a3a 40%,
              #1e3a8a 70%,
              #000000 100%
            ),
            url('/hexagon.png')
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "75px",
          backgroundBlendMode: "soft-light",
        }}
      >

        <div className="max-w-5xl mx-auto px-6">

          <h3 className="text-4xl font-bold mb-8">
            Learn more about{" "}
            <span className="bg-gradient-to-r from-[rgb(81,122,249)] to-sky-400 text-transparent bg-clip-text text-5xl">
              Our Solution
            </span>
          </h3>

          <Image
            src="/body.png"
            alt="body"
            width={300}
            height={300}
            className="mx-auto mt-10 mb-6"
          />

          <Button className="mt-4 px-6 py-4 bg-sky-400 hover:bg-[rgb(81,122,249)]">
            Request Demo
          </Button>

        </div>

      </section> */}

   
      
    
      </div>
      
      <CTA/>
    </section>
    

   

  )
}