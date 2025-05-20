import { Code, Layout, Database, Palette, Server } from "lucide-react"

const services = [
  {
    title: "Web Applications",
    description: "Custom web applications built with modern frameworks like React, Next.js, and Vue.",
    icon: <Code className="w-10 h-10 text-[#7FFFD4]" />,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces with a focus on user experience and accessibility.",
    icon: <Layout className="w-10 h-10 text-[#7FFFD4]" />,
  },
  {
    title: "API Development",
    description: "Robust and scalable RESTful APIs built with Node.js, Express, and Laravel.",
    icon: <Server className="w-10 h-10 text-[#7FFFD4]" />,
  },
  {
    title: "Database Design",
    description: "Efficient database architecture using SQL and NoSQL technologies.",
    icon: <Database className="w-10 h-10 text-[#7FFFD4]" />,
  },
  {
    title: "Frontend Development",
    description: "Responsive and interactive user interfaces using modern JavaScript frameworks.",
    icon: <Palette className="w-10 h-10 text-[#7FFFD4]" />,
  },
]

export default function Services() {
  return (
    <div className="container">
      <h2 className="section-title text-white">My Services</h2>
      <p className="section-subtitle text-gray-200">
        I offer a wide range of web development services to help businesses and individuals establish a strong online
        presence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#7FFFD4] text-white"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-200">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
