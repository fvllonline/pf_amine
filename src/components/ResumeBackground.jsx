"use client"

import { useEffect, useRef } from "react"

export default function ResumeBackground() {
  const backgroundRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!backgroundRef.current) return

      // Get the resume section's position
      const resumeSection = document.getElementById("resume")
      if (!resumeSection) return

      const rect = resumeSection.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (isVisible) {
        // Calculate how far through the section we've scrolled (0 to 1)
        const scrollProgress = 1 - rect.bottom / (window.innerHeight + rect.height)

        // Apply transformations to each element based on scroll position
        const elements = backgroundRef.current.querySelectorAll(".parallax-icon")
        elements.forEach((el, index) => {
          const htmlEl = el
          const speed = 1 + (index % 3) * 0.2 // Different speeds for variety
          const direction = index % 2 === 0 ? 1 : -1 // Alternate directions

          // Calculate translation based on scroll position
          const translateX = direction * scrollProgress * 50 * speed
          const translateY = direction * scrollProgress * 30 * speed
          const rotate = direction * scrollProgress * 15 * speed

          htmlEl.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`
        })
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial calculation
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={backgroundRef} className="absolute inset-0 overflow-hidden opacity-40">
      {/* Meteorite-like lines with continuous animation and parallax effect */}
      <div
        className="absolute w-32 h-1 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-1"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "8%",
          left: "-10%",
        }}
      ></div>

      <div
        className="absolute w-20 h-1 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-2"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "15%",
          left: "-5%",
          transform: "rotate(15deg)",
        }}
      ></div>

      <div
        className="absolute w-40 h-1 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-3"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "25%",
          left: "-15%",
          transform: "rotate(-10deg)",
        }}
      ></div>

      <div
        className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-1"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "35%",
          left: "-8%",
          transform: "rotate(5deg)",
        }}
      ></div>

      <div
        className="absolute w-36 h-1 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-2"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "45%",
          left: "-12%",
          transform: "rotate(20deg)",
        }}
      ></div>

      <div
        className="absolute w-28 h-1 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-3"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "55%",
          left: "-10%",
          transform: "rotate(-15deg)",
        }}
      ></div>

      <div
        className="absolute w-44 h-1 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-1"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "65%",
          left: "-18%",
          transform: "rotate(10deg)",
        }}
      ></div>

      <div
        className="absolute w-32 h-1 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-2"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "75%",
          left: "-5%",
          transform: "rotate(-5deg)",
        }}
      ></div>

      <div
        className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-3"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "85%",
          left: "-10%",
          transform: "rotate(8deg)",
        }}
      ></div>

      {/* Thicker meteorites */}
      <div
        className="absolute w-20 h-2 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-2"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "20%",
          left: "-15%",
          transform: "rotate(12deg)",
        }}
      ></div>

      <div
        className="absolute w-36 h-2 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-1"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "50%",
          left: "-20%",
          transform: "rotate(-12deg)",
        }}
      ></div>

      <div
        className="absolute w-28 h-2 bg-gradient-to-r from-transparent via-[#7FFFD4] to-[#7FFFD4] rounded-full parallax-icon animate-meteor-3"
        style={{
          filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))",
          top: "70%",
          left: "-8%",
          transform: "rotate(5deg)",
        }}
      ></div>
    </div>
  )
}
