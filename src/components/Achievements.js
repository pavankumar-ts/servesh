'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('certifications')

  const achievements = {
    certifications: [
      {
        title: 'AIG Shields Up: Cybersecurity',
        issuer: 'Forage',
        date: 'December 2023',
        image: '/certificates/aig.png',
        skills: ['Threat Analysis', 'CISA Publications', 'Ethical Hacking']
      },
      {
        title: 'Mastercard Cybersecurity',
        issuer: 'Forage',
        date: 'December 2023',
        image: '/certificates/mastercard.png',
        skills: ['Security Awareness', 'Phishing Detection', 'Security Training']
      }
    ],
    awards: [
      {
        title: 'Best Security Project',
        event: 'College Tech Fest',
        date: '2023',
        description: 'First place for innovative security solution'
      },
      {
        title: 'CTF Champion',
        event: 'Hackathon 2023',
        date: '2023',
        description: 'Winner of the Capture The Flag competition'
      }
    ],
    publications: [
      {
        title: 'Modern Cryptography Techniques',
        publisher: 'Tech Blog',
        date: '2023',
        link: '#'
      },
      {
        title: 'Network Security Best Practices',
        publisher: 'Security Weekly',
        date: '2023',
        link: '#'
      }
    ]
  }

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Achievements & Recognition</span>
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.keys(achievements).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.certifications.map((cert, index) => (
              <div key={index} className="card hover:border-pink-500 group">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-2">{cert.issuer}</p>
                <p className="text-pink-500 text-sm mb-4">{cert.date}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Awards */}
        {activeTab === 'awards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.awards.map((award, index) => (
              <div 
                key={index}
                className="card hover:border-pink-500 text-center p-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <i className="fas fa-trophy text-2xl text-pink-500"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-400 mb-2">{award.event}</p>
                <p className="text-pink-500 text-sm mb-4">{award.date}</p>
                <p className="text-gray-300">{award.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Publications */}
        {activeTab === 'publications' && (
          <div className="space-y-6">
            {achievements.publications.map((pub, index) => (
              <div 
                key={index}
                className="card hover:border-pink-500 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  <p className="text-gray-400">{pub.publisher}</p>
                  <p className="text-pink-500 text-sm">{pub.date}</p>
                </div>
                <a 
                  href={pub.link}
                  className="button-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}