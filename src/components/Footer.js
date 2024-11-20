'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const [emailHover, setEmailHover] = useState(false)

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/sarveshts/',
      color: '#0077B5'
    },
    { 
      name: 'GitHub', 
      icon: 'github',
      url: 'https://github.com/Sarvesh-TS',
      color: '#333'
    },
    { 
      name: 'Twitter', 
      icon: 'twitter',
      url: '#',
      color: '#1DA1F2'
    },
    { 
      name: 'Instagram', 
      icon: 'instagram',
      url: '#',
      color: '#E4405F'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Web Security',
    'Network Protection',
    'Penetration Testing',
    'Security Consulting',
    'Code Review'
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image 
                src="/images/logo.png" 
                alt="Logo" 
                width={150} 
                height={50}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to providing top-tier cybersecurity solutions and expertise 
              to protect digital assets and infrastructure.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center 
                    bg-gray-800 hover:bg-gray-700 transition-all duration-300
                    group-hover:ring-2 group-hover:ring-pink-500 group-hover:ring-offset-2 
                    group-hover:ring-offset-gray-900"
                  >
                    <i className={`fab fa-${social.icon}`} style={{ color: social.color }}></i>
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 
                    text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-300
                      flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-pink-500 rounded-full transform scale-0 
                      group-hover:scale-100 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="#services"
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-300
                      flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-pink-500 rounded-full transform scale-0 
                      group-hover:scale-100 transition-transform"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mt-1">
                  <i className="fas fa-envelope text-pink-500"></i>
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a 
                    href="mailto:sarveshts2k4@gmail.com"
                    className="text-white hover:text-pink-500 transition-colors"
                    onMouseEnter={() => setEmailHover(true)}
                    onMouseLeave={() => setEmailHover(false)}
                  >
                    sarveshts2k4@gmail.com
                    <div className={`h-0.5 bg-pink-500 transition-all duration-300 ${
                      emailHover ? 'w-full' : 'w-0'
                    }`}></div>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mt-1">
                  <i className="fas fa-phone text-pink-500"></i>
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a 
                    href="tel:+919880231133"
                    className="text-white hover:text-pink-500 transition-colors"
                  >
                    +91 988 023 1133
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mt-1">
                  <i className="fas fa-map-marker-alt text-pink-500"></i>
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h4>
              <p className="text-gray-400">Stay updated with latest security trends</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-80 px-4 py-2 bg-gray-800 rounded-lg focus:outline-none 
                  focus:ring-2 focus:ring-pink-500 transition-all"
              />
              <button className="button-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Sarvesh T S. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}