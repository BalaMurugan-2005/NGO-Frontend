import React, { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-100 p-2 rounded-full">
              <Leaf className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                GIVING FOOD A SECOND CHANCE
              </h1>
              <p className="text-xs text-gray-600">
                Zero Food Waste • Share • Recycle • Sustain
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300">
              How It Works
            </a>
            <a href="#features" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300">
              Features
            </a>
            <a href="#join" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300">
              Join Us
            </a>
            <div className="flex items-center space-x-4">
              <button className="btn-secondary text-sm">
                NGO Login
              </button>
              <button className="btn-primary text-sm">
                Donate Food
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#join"
                className="text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <button className="btn-secondary w-full">
                  NGO Login
                </button>
                <button className="btn-primary w-full">
                  Donate Food
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header