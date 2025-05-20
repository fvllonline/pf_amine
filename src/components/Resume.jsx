import { Download } from "lucide-react"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Lead development of enterprise web applications using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and mentored junior developers.",
    type: "work",
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Innovations",
    period: "2019 - 2022",
    description:
      "Developed and maintained multiple client websites and web applications. Worked with React, Laravel, and MySQL.",
    type: "work",
  },
  {
    title: "Frontend Developer",
    company: "WebCraft Agency",
    period: "2017 - 2019",
    description: "Created responsive and interactive user interfaces using HTML, CSS, JavaScript, and React.",
    type: "work",
  },
  {
    title: "Master's in Computer Science",
    company: "University of Technology",
    period: "2015 - 2017",
    description: "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
    type: "education",
  },
  {
    title: "Bachelor's in Computer Science",
    company: "State University",
    period: "2011 - 2015",
    description: "Focused on programming fundamentals, data structures, and web development.",
    type: "education",
  },
]

export default function Resume() {
  return (
    <div className="container">
      <h2 className="section-title text-white">My Resume</h2>

      <div className="flex justify-center mb-10">
        <a
          href="#"
          className="bg-[#7FFFD4] hover:bg-[#5FCFB4] text-[#0059FF] font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-block flex items-center gap-2"
          aria-label="Download Resume"
        >
          <Download size={18} />
          Download Resume
        </a>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#7FFFD4] hidden md:block"></div>

        <div className="space-y-12">
          {experiences.map((item, index) => (
            <div key={index} className="relative">
              <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#7FFFD4] border-4 border-[#0059FF] hidden md:block"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#7FFFD4]">
                    <div className="flex items-center mb-2 gap-2 md:justify-end">
                      {item.type === "work" ? (
                        <svg
                          className="text-[#7FFFD4] w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                      ) : (
                        <svg
                          className="text-[#7FFFD4] w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                        </svg>
                      )}
                      <span className="text-sm font-medium text-[#7FFFD4]">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-300 mb-2">{item.company}</p>
                    <p className="text-gray-200">{item.description}</p>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
