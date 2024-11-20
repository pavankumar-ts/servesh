'use client'
import { useState, useEffect } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting)
    )
    observer.observe(document.getElementById('skills'))
    return () => observer.disconnect()
  }, [])

  const skills = {
    technical: [
      { name: 'Penetration Testing', level: 90 },
      { name: 'Network Security', level: 85 },
      { name: 'Malware Analysis', level: 80 },
      { name: 'Incident Response', level: 85 },
      { name: 'Security Architecture', level: 75 }
    ],
    programming: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'C/C++', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'Assembly', level: 70 }
    ],
    tools: [
      { name: 'Wireshark', level: 90 },
      { name: 'Metasploit', level: 85 },
      { name: 'Burp Suite', level: 80 },
      { name: 'Nmap', level: 90 },
      { name: 'Kali Linux', level: 85 }
    ]
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Professional Skillset</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillSet], index) => (
            <div
              key={category}
              className="card-3d"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card backdrop-blur-lg p-6 h-full">
                <h3 className="text-2xl font-semibold mb-6 capitalize gradient-text">
                  {category.replace('_', ' ')}
                </h3>
                <div className="space-y-6">
                  {skillSet.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{skill.name}</span>
                        <span className="text-pink-500">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'AIG Shields Up',
                issuer: 'Cybersecurity Program',
                date: 'December 2023',
                icon: '🛡️'
              },
              {
                name: 'Mastercard Cybersecurity',
                issuer: 'Virtual Experience',
                date: 'December 2023',
                icon: '🔒'
              },
              {
                name: 'Network Security',
                issuer: 'CompTIA Security+',
                date: '2023',
                icon: '🌐'
              }
            ].map((cert, index) => (
              <div
                key={cert.name}
                className="card hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{cert.name}</h4>
                <p className="text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-pink-500 mt-2">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}