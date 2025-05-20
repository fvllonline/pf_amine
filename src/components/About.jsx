"use client"

import { useState, useEffect } from "react"
import profileImg1 from "../assets/images/profile1.png"
import profileImg2 from "../assets/images/profile2.png"
import profileImg3 from "../assets/images/profile3.png"
import backgroundImg from "../assets/images/background.png"

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Laravel", level: 75 },
  { name: "SQL", level: 85 },
]

// Profile images for the carousel
const profileImages = [profileImg1, profileImg2, profileImg3]

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Set up the image rotation timer
    const timer = setInterval(() => {
      // Start transition animation
      setIsTransitioning(true)

      // After animation completes, change the image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length)
        setIsTransitioning(false)
      }, 500) // Half a second for fade out/in transition
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(timer) // Clean up on unmount
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Image */}
      <div className="absolute inset-0 w-full h-full animate-float-slow">
        <div
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        ></div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gray-900/80"></div>

      <div className="container relative z-10 py-20">
        <h2 className="section-title text-white">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0059FF]">
              {profileImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? (isTransitioning ? "opacity-0" : "opacity-100") : "opacity-0"
                  }`}
                >
                  <img
                    src={src || "/placeholder.svg"}
                    alt={`Amine Smairi profile photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Full-Stack Web Developer</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate Full-Stack Web Developer with expertise in building modern, responsive, and user-friendly
              web applications. With a strong foundation in both frontend and backend technologies, I create seamless
              digital experiences that solve real-world problems.
            </p>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-white">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-[#7FFFD4] h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                      aria-label={`${skill.name} skill level: ${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
