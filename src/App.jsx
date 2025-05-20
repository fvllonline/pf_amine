import Hero from "./components/Hero"
// import About from "./components/About"
import Services from "./components/Services"
// import Resume from "./components/Resume"
// import Certifications from "./components/Certifications"
// import Testimonials from "./components/Testimonials"
// import Contact from "./components/Contact"
// import ScrollToTop from "./components/ScrollToTop"
// import ResumeBackground from "./components/ResumeBackground"
// import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import {
  Mail,
  Smartphone,
  Laptop,
  MessageCircle,
  Share2,
  Phone,
  Globe,
  Headphones,
  Quote,
  Star,
  ThumbsUp,
  Award,
  MessageSquare,
  User,
  Heart,
  GraduationCap,
  Trophy,
  FileCheck,
  Medal,
  Scroll,
  BadgeCheck,
  BookOpen,
} from "lucide-react"

function App() {
  return (<>
    <Hero />
  </>



    // <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
    //   <Navbar />
    //   <main className="min-h-screen">
    //     <section id="home" className="min-h-screen">
    //       <Hero />
    //     </section>

    //     {/* About section has its own background image */}
    //     <section id="about">
    //       <About />
    //     </section>

    //     {/* All other sections have the same gradient background as the home page */}
    //     <section id="services" className="py-20 bg-gradient-to-br from-[#0059FF] to-[#003399] text-white">
    //       <Services />
    //     </section>

    //     <section
    //       id="resume"
    //       className="py-20 bg-gradient-to-br from-[#0059FF] to-[#003399] text-white relative overflow-hidden"
    //     >
    //       {/* Resume Background with Parallax Effect */}
    //       <ResumeBackground />

    //       <div className="relative z-10">
    //         <Resume />
    //       </div>
    //     </section>

    //     <section
    //       id="certifications"
    //       className="py-20 bg-gradient-to-br from-[#0059FF] to-[#003399] text-white relative overflow-hidden"
    //     >
    //       {/* Certification Icons Background */}
    //       <div className="absolute inset-0 overflow-hidden opacity-30">
    //         {/* First row */}
    //         <div className="absolute top-[10%] left-[5%] animate-float-slow">
    //           <GraduationCap
    //             className="w-24 h-24 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[15%] right-[10%] animate-float-slow animation-delay-1000">
    //           <Trophy
    //             className="w-20 h-20 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>

    //         {/* Second row */}
    //         <div className="absolute top-[35%] left-[15%] animate-float-slow animation-delay-2000">
    //           <Award
    //             className="w-28 h-28 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[40%] right-[5%] animate-float-slow animation-delay-3000">
    //           <FileCheck
    //             className="w-16 h-16 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>

    //         {/* Third row */}
    //         <div className="absolute top-[60%] left-[8%] animate-float-slow animation-delay-4000">
    //           <Medal
    //             className="w-24 h-24 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[65%] right-[15%] animate-float-slow animation-delay-5000">
    //           <Scroll
    //             className="w-16 h-16 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>

    //         {/* Fourth row */}
    //         <div className="absolute top-[80%] left-[20%] animate-float-slow animation-delay-6000">
    //           <BadgeCheck
    //             className="w-20 h-20 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[85%] right-[20%] animate-float-slow animation-delay-7000">
    //           <BookOpen
    //             className="w-16 h-16 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //       </div>

    //       <div className="relative z-10">
    //         <Certifications />
    //       </div>
    //     </section>

    //     <section
    //       id="testimonials"
    //       className="py-20 bg-gradient-to-br from-[#0059FF] to-[#003399] text-white relative overflow-hidden"
    //     >
    //       {/* Testimonial Icons Background */}
    //       <div className="absolute inset-0 overflow-hidden opacity-30">
    //         {/* First row */}
    //         <div className="absolute top-[10%] left-[5%] animate-float-slow">
    //           <Quote
    //             className="w-24 h-24 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[15%] right-[10%] animate-float-slow animation-delay-1000">
    //           <Star
    //             className="w-20 h-20 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>

    //         {/* Second row */}
    //         <div className="absolute top-[35%] left-[15%] animate-float-slow animation-delay-2000">
    //           <ThumbsUp
    //             className="w-16 h-16 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[40%] right-[5%] animate-float-slow animation-delay-3000">
    //           <Award
    //             className="w-28 h-28 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>

    //         {/* Third row */}
    //         <div className="absolute top-[60%] left-[8%] animate-float-slow animation-delay-4000">
    //           <MessageSquare
    //             className="w-24 h-24 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[65%] right-[15%] animate-float-slow animation-delay-5000">
    //           <User
    //             className="w-16 h-16 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>

    //         {/* Fourth row */}
    //         <div className="absolute top-[80%] left-[20%] animate-float-slow animation-delay-6000">
    //           <Heart
    //             className="w-20 h-20 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[85%] right-[20%] animate-float-slow animation-delay-7000">
    //           <Star
    //             className="w-16 h-16 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //       </div>

    //       <div className="relative z-10">
    //         <Testimonials />
    //       </div>
    //     </section>

    //     <section
    //       id="contact"
    //       className="py-20 bg-gradient-to-br from-[#0059FF] to-[#003399] text-white relative overflow-hidden"
    //     >
    //       {/* 3D Communication Icons Background */}
    //       <div className="absolute inset-0 overflow-hidden opacity-30">
    //         {/* First row */}
    //         <div className="absolute top-[10%] left-[5%] animate-float-slow">
    //           <Mail
    //             className="w-24 h-24 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[15%] right-[10%] animate-float-slow animation-delay-1000">
    //           <Smartphone
    //             className="w-20 h-20 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>

    //         {/* Second row */}
    //         <div className="absolute top-[35%] left-[15%] animate-float-slow animation-delay-2000">
    //           <Laptop
    //             className="w-28 h-28 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[40%] right-[5%] animate-float-slow animation-delay-3000">
    //           <MessageCircle
    //             className="w-16 h-16 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>

    //         {/* Third row */}
    //         <div className="absolute top-[60%] left-[8%] animate-float-slow animation-delay-4000">
    //           <Share2
    //             className="w-16 h-16 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[65%] right-[15%] animate-float-slow animation-delay-5000">
    //           <Phone
    //             className="w-24 h-24 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>

    //         {/* Fourth row */}
    //         <div className="absolute top-[80%] left-[20%] animate-float-slow animation-delay-6000">
    //           <Globe
    //             className="w-20 h-20 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //         <div className="absolute top-[85%] right-[20%] animate-float-slow animation-delay-7000">
    //           <Headphones
    //             className="w-16 h-16 text-[#7FFFD4]"
    //             style={{ filter: "drop-shadow(0 0 12px rgba(127, 255, 212, 0.7))" }}
    //           />
    //         </div>
    //       </div>

    //       <div className="relative z-10">
    //         <Contact />
    //       </div>
    //     </section>

    //     <ScrollToTop />
    //   </main>
    //   <Footer />
    // </ThemeProvider>
  )
}

export default App
