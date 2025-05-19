"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-[#0f172a] shadow-lg py-2' : 'bg-gradient-to-b from-[#0f172a]/80 to-transparent py-4'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <span className={`text-3xl font-bold bg-gradient-to-r from-[#7dd3fc] to-[#bae6fd] bg-clip-text text-transparent transition-all duration-500 ${scrolled ? 'group-hover:from-[#bae6fd] group-hover:to-[#7dd3fc]' : 'group-hover:from-[#f0f9ff] group-hover:to-[#bae6fd]'}`}>
            Swatrix
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`relative px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 ${scrolled ? 'text-[#bae6fd] hover:text-white' : 'text-white hover:text-[#bae6fd]'}`}
          >
            <span className="relative z-10">Home</span>
            <span className={`absolute inset-0 bg-[#7dd3fc] rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300`}></span>
          </Link>
          <Link 
            href="#services" 
            className={`relative px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 ${scrolled ? 'text-[#bae6fd] hover:text-white' : 'text-white hover:text-[#bae6fd]'}`}
          >
            <span className="relative z-10">Services</span>
            <span className={`absolute inset-0 bg-[#7dd3fc] rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300`}></span>
          </Link>
          <Link 
            href="#about" 
            className={`relative px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 ${scrolled ? 'text-[#bae6fd] hover:text-white' : 'text-white hover:text-[#bae6fd]'}`}
          >
            <span className="relative z-10">About</span>
            <span className={`absolute inset-0 bg-[#7dd3fc] rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300`}></span>
          </Link>
          <Link 
            href="#contact" 
            className={`relative px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 ${scrolled ? 'text-[#bae6fd] hover:text-white' : 'text-white hover:text-[#bae6fd]'}`}
          >
            <span className="relative z-10">Contact</span>
            <span className={`absolute inset-0 bg-[#7dd3fc] rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300`}></span>
          </Link>
        </div>
        
        <button 
          className="md:hidden p-2 rounded-lg focus:outline-none transition-all duration-300 hover:bg-[#1e293b]/50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-[#bae6fd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-6 py-4 bg-[#0f172a]/95 backdrop-blur-sm flex flex-col space-y-4">
          <Link 
            href="/" 
            className="text-[#bae6fd] px-4 py-2 rounded-lg hover:bg-[#1e293b] transition-all duration-300 transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#services" 
            className="text-[#bae6fd] px-4 py-2 rounded-lg hover:bg-[#1e293b] transition-all duration-300 transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="#about" 
            className="text-[#bae6fd] px-4 py-2 rounded-lg hover:bg-[#1e293b] transition-all duration-300 transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#contact" 
            className="text-[#bae6fd] px-4 py-2 rounded-lg hover:bg-[#1e293b] transition-all duration-300 transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}