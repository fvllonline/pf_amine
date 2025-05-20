const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2023",
    logo: "https://via.placeholder.com/80",
  },
  {
    name: "Professional Web Developer",
    organization: "Meta",
    date: "2022",
    logo: "https://via.placeholder.com/80",
  },
  {
    name: "Full-Stack JavaScript Developer",
    organization: "Udacity",
    date: "2021",
    logo: "https://via.placeholder.com/80",
  },
  {
    name: "React Developer",
    organization: "Coursera",
    date: "2020",
    logo: "https://via.placeholder.com/80",
  },
  {
    name: "PHP & Laravel Expert",
    organization: "Udemy",
    date: "2019",
    logo: "https://via.placeholder.com/80",
  },
]

export default function Certifications() {
  return (
    <div className="container">
      <h2 className="section-title text-white">My Certifications</h2>
      <p className="section-subtitle text-gray-200">
        I am committed to continuous learning and professional development. Here are some of my professional
        certifications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#7FFFD4]/30"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-4 bg-white/20 rounded-full p-1">
                <img
                  src={cert.logo || "/placeholder.svg"}
                  alt={cert.organization}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">{cert.name}</h3>
                <p className="text-gray-300 text-sm">{cert.organization}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-300">{cert.date}</span>
              <span className="inline-block px-3 py-1 bg-[#7FFFD4]/20 text-[#7FFFD4] text-xs font-medium rounded-full">
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
