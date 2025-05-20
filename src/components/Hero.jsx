"use client"

import { useRef, useEffect, useState } from "react"

// Typing animation component with loop for multiple messages
function TypedTextLoop({ messages, className }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    let timeout

    if (isWaiting) {
      // Wait before starting the next cycle
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, 1500) // Wait 1.5 seconds before starting to delete
    } else if (isDeleting) {
      // Deleting text
      if (displayedText.length === 0) {
        setIsDeleting(false)
        // Move to next message
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
        setCurrentIndex(0)
      } else {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1))
        }, 50) // Delete faster than typing
      }
    } else {
      // Typing text
      const currentMessage = messages[currentMessageIndex]
      if (currentIndex < currentMessage.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentMessage[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, 100)
      } else {
        setIsWaiting(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, displayedText, isDeleting, isWaiting, messages, currentMessageIndex])

  return (
    <span className={className}>
      {displayedText}
      <span className="inline-block w-1 h-4 bg-[#0059FF] ml-1 animate-pulse"></span>
    </span>
  )
}

// Typing animation component with loop
function TypedText({ text, className }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    let timeout

    if (isWaiting) {
      // Wait before starting the next cycle
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, 3000) // Wait 3 seconds before starting to delete
    } else if (isDeleting) {
      // Deleting text
      if (displayedText.length === 0) {
        setIsDeleting(false)
        setCurrentIndex(0)
      } else {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1))
        }, 50) // Delete faster than typing
      }
    } else {
      // Typing text
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, 100)
      } else {
        setIsWaiting(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, displayedText, isDeleting, isWaiting, text])

  return (
    <span className={className}>
      {displayedText}
      <span className="inline-block w-1 h-6 bg-[#7FFFD4] ml-1 animate-pulse"></span>
    </span>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const characterRef = useRef(null)

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return

      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5

      containerRef.current.style.transform = `translateX(${x * 20}px) translateY(${y * 20}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0059FF] to-[#003399]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] bg-repeat"></div>
      </div>

      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between pt-24 md:pt-16">
        <div className="text-white text-center md:text-left md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Amine Smairi</span>
            <TypedText text="Full-Stack Web Developer" className="block text-[#7FFFD4]" />
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Building engaging web experiences from front to back.
          </p>
          <a
            href="#services"
            className="bg-[#0059FF] hover:bg-[#0040CC] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 inline-block"
          >
            View My Work
          </a>
        </div>

        <div
          ref={containerRef}
          className="w-full md:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center mt-10 md:mt-20"
        >
          <div ref={characterRef} className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            {/* Speech Bubble */}
            <div className="absolute -top-16 left-0 right-0 bg-white rounded-lg p-3 shadow-lg z-10">
              <TypedTextLoop
                messages={["Welcome to my Portfolio!", "Feel free to ask anything.", "Have fun exploring!"]}
                className="block text-[#0059FF] text-center text-sm md:text-base font-medium"
              />
              {/* Speech bubble triangle */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
            </div>

            {/* SVG Character */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Body */}
              <rect x="70" y="60" width="60" height="80" rx="10" fill="#7FFFD4" />

              {/* Head */}
              <circle cx="100" cy="40" r="25" fill="#7FFFD4" />

              {/* Eyes */}
              <circle cx="90" cy="35" r="5" fill="#0059FF" />
              <circle cx="110" cy="35" r="5" fill="#0059FF" />

              {/* Smile */}
              <path d="M85 50 Q100 65 115 50" stroke="#0059FF" strokeWidth="3" fill="none" />

              {/* Arms */}
              <rect x="40" y="70" width="30" height="10" rx="5" fill="#0059FF" />
              <rect x="130" y="70" width="30" height="10" rx="5" fill="#0059FF" />

              {/* Legs */}
              <rect x="80" y="140" width="10" height="40" rx="5" fill="#0059FF" />
              <rect x="110" y="140" width="10" height="40" rx="5" fill="#0059FF" />

              {/* Laptop */}
              <rect x="75" y="100" width="50" height="30" rx="2" fill="#003399" />
              <rect x="85" y="110" width="30" height="10" rx="1" fill="white" opacity="0.7" />
            </svg>

            {/* Shadow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black/20 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
