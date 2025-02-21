import Image from "next/image"

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our mission is to make homeownership better</h1>
            <p className="text-xl text-gray-600">
              We're using technology to make getting a mortgage faster, simpler, and more accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image src="/placeholder.svg" alt="Our story" fill className="object-cover rounded-lg" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-600">
                Founded with a vision to transform the mortgage industry, we've built a platform that puts customers
                first. By leveraging technology and removing unnecessary fees, we're making homeownership more
                accessible for everyone.
              </p>
              <p className="text-gray-600">
                Our team of experts combines decades of industry experience with cutting-edge technology to deliver a
                better mortgage experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image src="/placeholder.svg" alt={member.name} fill className="object-cover rounded-full" />
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    title: "Transparency",
    description: "We believe in being completely open about our process and pricing.",
  },
  {
    title: "Innovation",
    description: "We're constantly improving our technology to make mortgages simpler.",
  },
  {
    title: "Customer First",
    description: "Every decision we make starts with what's best for our customers.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO",
  },
  {
    name: "Michael Chen",
    role: "CTO",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
  },
  {
    name: "David Kim",
    role: "Head of Product",
  },
]

