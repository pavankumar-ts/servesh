'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const experiences = [
    {
      title: 'Cybersecurity Lead',
      company: 'Google Developers Students Club, FETJU',
      duration: 'August 2023 - August 2024',
      description: [
        'Conducted multiple seminars and webinars on cybersecurity',
        'Attended various webinars conducted by Google professionals',
        'Conducted Hackathons and Capture the Flag competitions'
      ],
      icon: '🔒',
      color: 'red'
    },
    {
      title: 'Security Intern',
      company: 'Futurense Technologies Pvt Ltd',
      duration: 'April 2024 - June 2024',
      description: [
        'Simulated and analyzed network configurations',
        'Troubleshot and resolved network topology issues',
        'Collaborated on designing secure network infrastructures'
      ],
      icon: '🛡️',
      color: 'blue'
    },
    {
      title: 'Tech Lead',
      company: 'The Salus Club, FET-JU',
      duration: 'October 2023 - Present',
      description: [
        'Led technical initiatives and projects',
        'Mentored team members in cybersecurity practices',
        'Organized technical workshops and events'
      ],
      icon: '⚡',
      color: 'purple'
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: '📊' },
    { label: 'CTF Competitions', value: '10+', icon: '🏆' },
    { label: 'Security Audits', value: '20+', icon: '🔍' },
    { label: 'Workshop Sessions', value: '25+', icon: '👥' }
  ]

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Professional Journey</span>
        </h2>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : index % 2 === 0
                  ? '-translate-x-20 opacity-0'
                  : 'translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="card group hover:border-red-500">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-${exp.color}-500/20 
                    flex items-center justify-center text-2xl shrink-0
                    group-hover:scale-110 transition-transform duration-300`}
                  >
                    {exp.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-red-500 
                      transition-colors duration-300"
                    >
                      {exp.title}
                    </h3>
                    <p className="text-red-500 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li 
                          key={i} 
                          className="flex items-center gap-2 text-gray-300
                            hover:text-white transition-colors duration-300"
                        >
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`card text-center py-8 transform transition-all duration-500 hover:scale-105
                ${isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-500
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <Link
            href="/resume.pdf"
            className="button-primary inline-flex items-center gap-2 group"
          >
            <span>View Full Resume</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}