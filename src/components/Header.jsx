import { useState } from "react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white bg-opacity-90 sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-rose-600">Glow Essence</div>
          <div className="hidden md:flex space-x-6">
            <a href="#products" className="text-gray-700 hover:text-rose-600 transition">
              Products
            </a>
            <a href="#ingredients" className="text-gray-700 hover:text-rose-600 transition">
              Ingredients
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-rose-600 transition">
              Benefits
            </a>
            <a href="#how-to-use" className="text-gray-700 hover:text-rose-600 transition">
              How to Use
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-rose-600 transition">
              Testimonials
            </a>
          </div>
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4">
          <a href="#products" className="block py-2 text-gray-700 hover:text-rose-600 transition">
            Products
          </a>
          <a href="#ingredients" className="block py-2 text-gray-700 hover:text-rose-600 transition">
            Ingredients
          </a>
          <a href="#benefits" className="block py-2 text-gray-700 hover:text-rose-600 transition">
            Benefits
          </a>
          <a href="#how-to-use" className="block py-2 text-gray-700 hover:text-rose-600 transition">
            How to Use
          </a>
          <a href="#testimonials" className="block py-2 text-gray-700 hover:text-rose-600 transition">
            Testimonials
          </a>
        </div>
      )}
    </header>
  )
}

export default Header

