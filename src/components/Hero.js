'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const words = [
    'Cybersecurity Expert',
    'Penetration Tester',
    'Security Researcher',
    'Network Defender'
  ]

  useEffect(() => {
    let timeoutId;
    const currentWord = words[currentWordIndex];

    const type = () => {
      if (!isDeleting) {
        // Typing
        if (displayText !== currentWord) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          timeoutId = setTimeout(type, 100); // Typing speed
        } else {
          // Wait before starting to delete
          timeoutId = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText !== '') {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          timeoutId = setTimeout(type, 50); // Deleting speed
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    timeoutId = setTimeout(type, 100);

    return () => clearTimeout(timeoutId);
  }, [displayText, currentWordIndex, isDeleting, words]);

  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600/30 rounded-full filter blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
        </div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 animate-slideInLeft">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Sarvesh T S</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 h-[40px]">
            I'm a <span className="text-pink-500">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Passionate about securing digital infrastructure and protecting organizations 
            from cyber threats. Specializing in penetration testing, vulnerability assessment, 
            and security architecture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="#contact"
              className="button-primary transform hover:-translate 
                hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300"
            >
              Get In Touch
            </Link>
            <Link 
              href="#portfolio"
              className="button-outline transform hover:-translate-y-1 
                hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300"
            >
              View Projects
            </Link>
          </div>

          <div className="flex items-center space-x-4 mt-8">
            {[
              { icon: 'linkedin', url: 'https://www.linkedin.com/in/sarveshts/', color: '#0077B5' },
              { icon: 'github', url: 'https://github.com/Sarvesh-TS', color: '#333' },
              { icon: 'twitter', url: '#', color: '#1DA1F2' }
            ].map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center 
                  border border-pink-500 hover:bg-pink-500 transition-all duration-300
                  transform hover:-translate-y-1 hover:shadow-lg"
              >
                <i className={`fab fa-${social.icon} text-xl`} style={{ color: social.color }}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 animate-slideInRight">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <Image
              src="/images/profile.png"
              alt="Sarvesh T S"
              fill
              className="object-contain animate-float"
              priority
            />
            {/* Floating skill icons */}
            {[
              { icon: '🔒', top: '10%', left: '10%', delay: '0s' },
              { icon: '🌐', top: '20%', right: '10%', delay: '0.5s' },
              { icon: '⚡', bottom: '20%', left: '15%', delay: '1s' },
              { icon: '🛡️', bottom: '10%', right: '15%', delay: '1.5s' },
            ].map((item, index) => (
              <div
                key={index}
                className="absolute w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full 
                  flex items-center justify-center text-2xl animate-float glass
                  transform hover:scale-110 transition-transform duration-300"
                style={{
                  top: item.top || 'auto',
                  left: item.left || 'auto',
                  right: item.right || 'auto',
                  bottom: item.bottom || 'auto',
                  animationDelay: item.delay
                }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  )
}