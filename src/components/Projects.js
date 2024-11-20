'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const projectRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (projectRef.current) {
      observer.observe(projectRef.current)
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current)
      }
    }
  }, [])

  const projects = [
    {
      title: 'Data Encryption App',
      description: 'End-to-end encryption system with advanced security features',
      image: '/images/work-1.png',
      category: 'security',
      technologies: ['Python', 'Cryptography', 'PyQt5'],
      link: '#',
      github: '#'
    },
    {
      title: 'Network Controller',
      description: 'Advanced network monitoring and control system',
      image: '/images/work-2.png',
      category: 'networking',
      technologies: ['Java', 'Spring Boot', 'React'],
      link: '#',
      github: '#'
    },
    {
      title: 'Online Shopping App',
      description: 'Secure e-commerce platform with payment integration',
      image: '/images/work-3.png',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-black" ref={projectRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {['all', 'security', 'networking', 'web'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-xl transform transition-all duration-500
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ 
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 
                translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-pink-500/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link 
                    href={project.link}
                    className="button-primary flex-1 text-center py-2"
                  >
                    Live Demo
                  </Link>
                  <Link 
                    href={project.github}
                    className="button-outline flex-1 text-center py-2"
                  >
                    Source Code
                  </Link>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}