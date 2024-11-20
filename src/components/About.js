'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting)
    )
    observer.observe(document.getElementById('about'))
    return () => observer.disconnect()
  }, [])

  const tabContent = {
    skills: [
      { category: 'Languages', items: 'Java, Python, C/C++, SQL, JavaScript, HTML/CSS, Assembly' },
      { category: 'Frameworks', items: 'Metasploit, NIST Cybersecurity Framework, OWASP, ISO 27001, CIS Controls' },
      { category: 'Developer Tools', items: 'Visual Studio Code, Wireshark, Nmap, Burp Suite, Kali Linux, Git, SIEM Tools' },
      { category: 'Libraries', items: 'Scapy, Cryptography, OpenSSL, Socket, PyCryptodome' }
    ],
    experience: [
      {
        role: 'Cybersecurity Lead',
        company: 'Google Developers Students Club, FETJU',
        period: 'August 2023 - August 2024',
        highlights: [
          'Led cybersecurity initiatives and workshops',
          'Organized CTF competitions',
          'Conducted security training sessions'
        ]
      },
      {
        role: 'Security Intern',
        company: 'Futurense Technologies Pvt Ltd',
        period: 'April 2024 - June 2024',
        highlights: [
          'Network security analysis',
          'Vulnerability assessment',
          'Security architecture design'
        ]
      }
    ],
    education: [
      {
        degree: 'Bachelor of Technology in Cybersecurity',
        institution: 'Jain University, Bangalore',
        period: 'August 2022 - August 2026',
        details: 'Focusing on network security, cryptography, and ethical hacking'
      },
      {
        degree: 'Pre University in Science',
        institution: 'Swargarani PU College, Bangalore',
        period: 'April 2024 - June 2024',
        details: 'Physics, Chemistry, Mathematics, and Computer Science'
      }
    ]
  }

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="lg:w-1/3">
            <div className={`relative group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src="/images/user.jpg" 
                  alt="Profile"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Floating Info Cards */}
              <div className="absolute -right-10 top-10 glass p-3 rounded-lg shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Security Expert</p>
                    <p className="text-xs text-gray-400">Passionate Learner</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-10 bottom-10 glass p-3 rounded-lg shadow-xl animate-float" style={{ animationDelay: '-1.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-xl">💻</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Tech Enthusiast</p>
                    <p className="text-xs text-gray-400">Problem Solver</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-2/3">
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Results-driven cybersecurity enthusiast with a robust foundation in cybersecurity fundamentals, 
                poised to elevate expertise and make impactful contributions to the field. Adept at collaborative 
                problem-solving and eager to learn from seasoned professionals, demonstrating a commitment to 
                ongoing professional development.
              </p>

              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-8 bg-gray-800/50 p-1 rounded-lg backdrop-blur-sm">
                {['Skills', 'Experience', 'Education'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`flex-1 px-4 py-2 rounded-md transition-all duration-300 ${
                      activeTab === tab.toLowerCase()
                        ? 'bg-pink-500 text-white shadow-lg'
                        : 'hover:bg-gray-700/50 text-gray-400'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px] relative">
                {/* Skills Tab */}
                <div className={`transition-all duration-500 absolute w-full ${
                  activeTab === 'skills' 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20 pointer-events-none'
                }`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tabContent.skills.map((skill, index) => (
                      <div 
                        key={index}
                        className="card hover:border-pink-500 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold text-pink-500 mb-2">
                          {skill.category}
                        </h3>
                        <p className="text-gray-400">{skill.items}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience Tab */}
                <div className={`transition-all duration-500 absolute w-full ${
                  activeTab === 'experience' 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20 pointer-events-none'
                }`}>
                  <div className="space-y-6">
                    {tabContent.experience.map((exp, index) => (
                      <div 
                        key={index}
                        className="card hover:border-pink-500 transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                        <p className="text-pink-500 mb-2">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Tab */}
                <div className={`transition-all duration-500 absolute w-full ${
                  activeTab === 'education' 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20 pointer-events-none'
                }`}>
                  <div className="space-y-6">
                    {tabContent.education.map((edu, index) => (
                      <div 
                        key={index}
                        className="card hover:border-pink-500 transition-all duration-300"
                      >
                        <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-pink-500 mb-2">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-4">{edu.period}</p>
                        <p className="text-gray-300">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex flex-wrap gap-4">
                <Link 
                  href="/resume.pdf" 
                  className="button-primary"
                  download
                >
                  Download CV
                </Link>
                <Link 
                  href="#contact" 
                  className="button-outline"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
