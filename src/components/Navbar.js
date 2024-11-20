'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
          }
        }
      })

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold gradient-text">Sarvesh T S</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`nav-link ${
                activeSection === item.toLowerCase() ? 'text-pink-500' : 'text-white'
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        <button className="button-primary hidden md:block">
          Download CV
        </button>

        <button className="md:hidden text-2xl">
          ☰
        </button>
      </div>
    </nav>
  )
}