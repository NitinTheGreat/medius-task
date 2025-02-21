import { Button } from "@/components/ui/button"
import { Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#004D40] min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary">
                Mortgages
                <br />
                made simple
              </h1>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <Link href="/start">Start my approval</Link>
                </Button>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-primary">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">3 min | No credit impact</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/hero.webp"
                alt="Mobile app showing mortgage approval"
                width={600}
                height={800}
                className="mx-auto"
                priority
              />
              <div className="absolute bottom-0 right-0 bg-white rounded-lg p-3 shadow-lg flex items-center space-x-2">
                <span className="text-sm font-medium">4.6 Stars</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">3177 Google reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why choose our platform?</h2>
            <p className="text-xl text-gray-600">We've reimagined the mortgage process from the ground up.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Get pre-approved in as little as 3 minutes</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/start">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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
  },
  {
    title: "Zero Fees",
    description: "No origination fees, no underwriting fees, no other lender fees.",
  },
  {
    title: "Fast Closing",
    description: "Close on your schedule. We work at your pace and keep you informed.",
  },
]

