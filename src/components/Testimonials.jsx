"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    photo: "https://via.placeholder.com/80",
    text: "Amine delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made our project a success.",
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthLabs",
    photo: "https://via.placeholder.com/80",
    text: "Working with Amine was a pleasure. He understood our requirements perfectly and delivered a website that has significantly improved our conversion rates.",
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, DesignHub",
    photo: "https://via.placeholder.com/80",
    text: "Amine's technical skills combined with his eye for design resulted in a beautiful and functional website. He was responsive, professional, and a joy to work with.",
  },
  {
    name: "David Kim",
    position: "CTO, InnovateTech",
    photo: "https://via.placeholder.com/80",
    text: "We hired Amine to rebuild our company's web application, and he delivered beyond our expectations. His code is clean, well-documented, and easy to maintain.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="container">
      <h2 className="section-title text-white">Client Testimonials</h2>

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-8 md:p-12">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-[#7FFFD4] opacity-30" />

          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-200 mb-8 relative z-10">"{testimonials[currentIndex].text}"</p>

            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#7FFFD4]">
                <img
                  src={testimonials[currentIndex].photo || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-white">{testimonials[currentIndex].name}</h3>
              <p className="text-gray-300">{testimonials[currentIndex].position}</p>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-[#7FFFD4] hover:text-[#0059FF] text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-[#7FFFD4] hover:text-[#0059FF] text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-[#7FFFD4]" : "bg-white/30"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
