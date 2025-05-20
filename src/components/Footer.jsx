export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 shadow-md">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-[#0059FF]">
              Smairi
            </a>
            <p className="mt-2 text-gray-600">Full-Stack Web Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-600">© 2025 Amine Smairi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
