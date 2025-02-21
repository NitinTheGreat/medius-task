import { Button } from "@/components/ui/button"
import { Clock, Star, ArrowRight, Percent, Ban, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#004D40] to-[#00796B] min-h-[90vh] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff_12px,transparent_0),linear-gradient(150deg,#ffffff_12px,transparent_0),linear-gradient(270deg,#ffffff_12px,transparent_0),linear-gradient(30deg,#ffffff_12px,transparent_0)] bg-size-[80px_80px]" />
        </div>

        <div className="container mx-auto px-4 pt-24 lg:pt-32 pb-16">
          <div className="flex flex-col items-center text-center relative">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 relative z-10 transition-all duration-300">
              Mortgages
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">made simple</span>
            </h1>

            {/* CTA and Timer */}
            <div className="flex flex-col items-center space-y-6 mb-12 relative z-10">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-white hover:bg-white/90 text-[#004D40] rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                asChild
              >
                <Link href="/start" className="flex items-center gap-2">
                  Start my approval
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">3 min | No credit impact</span>
              </div>
            </div>

            {/* Phone Image */}
            <div className="relative xl:absolute xl:top-[30%] xl:left-[30%] w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl transition-all duration-500 hover:transform hover:translate-y-[-10px]">
              <div className="absolute inset-0  opacity-20 rounded-3xl" />
              <Image
                src="/hero.webp"
                alt="Mobile app showing mortgage approval"
                width={600}
                height={800}
                className="mx-auto rounded-3xl shadow-2xl"
                priority
              />
            </div>

            {/* Google Reviews */}
            <div className="fixed bottom-4 right-4 bg-white rounded-2xl p-4 shadow-xl flex items-center space-x-3 transform transition-all duration-300 hover:scale-105 z-50 max-w-[90vw] sm:max-w-md">
              <Image
                src="https://www.google.com/favicon.ico"
                alt="Google"
                width={24}
                height={24}
                className="flex-shrink-0"
              />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  4.6 Stars | 3177 Google reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Why choose our platform?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've reimagined the mortgage process from the ground up.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <feature.icon className="h-10 w-10 text-[#004D40] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#004D40] to-[#00796B]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to start your journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Get pre-approved in as little as 3 minutes</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#004D40] hover:bg-white/90 rounded-full px-8 transform transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/start">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 rounded-full px-8"
              asChild
            >
              <Link href="/mortgage-calculator">Calculate Payments</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Lower Rates",
    description: "We leverage technology to reduce costs and pass the savings on to you.",
    icon: Percent,
  },
  {
    title: "Zero Fees",
    description: "No origination fees, no underwriting fees, no other lender fees.",
    icon: Ban,
  },
  {
    title: "Fast Closing",
    description: "Close on your schedule. We work at your pace and keep you informed.",
    icon: Rocket,
  },
]

