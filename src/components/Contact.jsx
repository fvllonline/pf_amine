"use client"

import { useState } from "react"
import { Github, Linkedin, Twitter, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form
      setFormData({ name: "", email: "", message: "" })
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)

      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }
  }

  return (
    <div className="container">
      <h2 className="section-title text-white">Get In Touch</h2>
      <p className="section-subtitle text-gray-200">
        Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] focus:border-transparent text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] focus:border-transparent text-white"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7FFFD4] focus:border-transparent text-white"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white hover:bg-gray-100 text-[#0059FF] font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-block w-full flex items-center justify-center gap-2 shadow-md"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {submitStatus && (
              <div
                className={`p-4 rounded-md ${
                  submitStatus.success ? "bg-green-500/20 text-green-200" : "bg-red-500/20 text-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#7FFFD4]">Connect With Me</h3>

            <div className="space-y-6">
              <p className="text-gray-200">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div>
                <p className="font-medium text-white">Email:</p>
                <p className="text-gray-300">contact@aminesmairi.com</p>
              </div>

              <div>
                <p className="font-medium text-white">Based in:</p>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-[#7FFFD4] text-white hover:text-[#0059FF] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-[#7FFFD4] text-white hover:text-[#0059FF] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-[#7FFFD4] text-white hover:text-[#0059FF] transition-colors"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
