import { Card, CardContent } from "@/components/ui/card"

const DeviceCompatibilitySection = () => {
  return (
    <section 
    className="p-4 container mx-auto"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold text-center text-white mb-8 pt-4">Device compatibility</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 text-center">
            <CardContent className="p-0 space-y-4">
              <h3 className="font-medium text-lg text-white mb-2">For the bedside scanner</h3>
              <div className=" rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <img src='/compatability/device-1.svg' className="w-40 h-40"/>
                  <p className="text-white">LU700C CONVEX</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <img src='/compatability/device-2.svg' className="w-40 h-40"/>
                  <p className="text-white">LU700L LINEAR</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 text-center">
            <CardContent className="space-y-6">
              <h3 className="font-medium text-lg text-white">For the trained practitioner</h3>
              <div className="rounded-lg mx-auto flex items-center justify-center gap-8">
                <div className="flex flex-col items-center">
                  <img src='/compatability/chrome.svg' className="w-24 h-24"/>
                </div>
                <div className="flex flex-col items-center">
                  <img src='/compatability/safari.svg' className="w-24 h-24"/>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-white">Latest version of</p>
                <p className="text-[#687FE5]">Chrome and Safari on a computer.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default DeviceCompatibilitySection