'use client'
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Add your form submission logic here
    }

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-pink-600/20 rounded-full filter blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-float" />
            </div>

            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    <span className="gradient-text">Get In Touch</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="card backdrop-blur-sm">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                                        <i className="fas fa-envelope text-pink-500"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Email</p>
                                        <a href="mailto:sarveshts2k4@gmail.com" className="text-lg hover:text-pink-500 transition-colors">
                                            sarveshts2k4@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                                        <i className="fas fa-phone text-pink-500"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Phone</p>
                                        <a href="tel:+919880231133" className="text-lg hover:text-pink-500 transition-colors">
                                            +91 988 023 1133
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                                        <i className="fas fa-map-marker-alt text-pink-500"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-400">Location</p>
                                        <p className="text-lg">Bangalore, India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 flex space-x-4">
                                {[
                                    { icon: 'linkedin', url: 'https://www.linkedin.com/in/sarveshts/' },
                                    { icon: 'github', url: 'https://github.com/Sarvesh-TS' },
                                    { icon: 'twitter', url: '#' }
                                ].map((social) => (
                                    <a
                                        key={social.icon}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition-colors duration-300"
                                    >
                                        <i className={`fab fa-${social.icon} text-xl`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card backdrop-blur-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-500 focus:ring-pink-500 transition-colors"
                                    placeholder="Your Name"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-500 focus:ring-pink-500 transition-colors"
                                    placeholder="your@email.com"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 mb-2">Message</label>
                                <textarea
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}