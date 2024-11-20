'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Loading animation component
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <div className="text-2xl font-bold gradient-text">Loading...</div>
    </div>
  </div>
)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  if (!mounted) return null

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <main className="bg-[#080808] text-white relative">
          {/* Background Gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
          
          {/* Animated Particles Background */}
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.1
                }}
              ></div>
            ))}
          </div>

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <div className="relative z-10">
            {/* Hero Section with Parallax Effect */}
            <section className="relative min-h-screen">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
              </div>
              <Hero />
            </section>

            {/* About Section */}
            <section id="about" className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
              <About />
            </section>

            {/* Skills Section with 3D Cards */}
            <section className="relative bg-gray-900">
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <Skills />
            </section>

            {/* Experience Timeline */}
            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
              <Experience />
            </section>

            {/* Projects Showcase */}
            <section className="relative bg-black">
              <Projects />
            </section>

            {/* Achievements Gallery */}
            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>
              <Achievements />
            </section>

            {/* Contact Form with Floating Labels */}
            <section className="relative bg-gray-900">
              <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
              <Contact />
            </section>

            {/* Footer */}
            <Footer />
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-pink-600 transition-all duration-300 z-50 group"
          >
            <svg
              className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>

          {/* Cursor Follower */}
          <div className="cursor-follower"></div>
        </main>
      )}
    </>
  )
}