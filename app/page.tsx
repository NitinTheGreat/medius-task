import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">A smarter way to get a mortgage</h1>
              <p className="text-xl text-gray-600">
                Experience a faster, more transparent way to get a mortgage with better rates and zero fees.
              </p>
              <Button size="lg" asChild>
                <Link href="/start">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image src="/placeholder.svg" alt="Happy homeowners" fill className="object-cover rounded-lg" priority />
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

