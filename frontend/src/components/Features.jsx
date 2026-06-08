import React, { useEffect, useRef } from 'react'
import { MapPin, Bell, Shield, Clock, BarChart, Smartphone } from 'lucide-react'

const Features = () => {
  const sectionRef = useRef(null)
  const featureRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fadeInUp')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location-Based Matching",
      description: "Automatically connects donors with nearby NGOs for efficient pickup"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-Time Notifications",
      description: "Instant alerts when food becomes available in your area"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Food Safety Validation",
      description: "Expiry tracking and safety guidelines for all donations"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Live Pickup Tracking",
      description: "Real-time tracking of pickup and delivery progress"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Simple Dashboard",
      description: "Easy-to-use interface for managing donations and pickups"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Responsive",
      description: "Access platform from any device, anywhere"
    }
  ]

  return (
    <section id="features" ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform makes food donation and distribution seamless and efficient
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="group opacity-0"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-2">
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-emerald-200 transition-colors duration-300">
                  <div className="text-emerald-600 font-medium flex items-center space-x-2">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Demo */}
        <div className="mt-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Experience the Platform
              </h3>
              <p className="text-emerald-100 mb-8 text-lg">
                See how our intuitive interface makes it easy to donate or receive food in minutes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>No setup fees or hidden costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span>Full data privacy compliance</span>
                </div>
              </div>
            </div>

            {/* Mockup Device */}
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-emerald-500/20 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                          <Bell className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold">New Donation Available</div>
                          <div className="text-sm opacity-80">2km away • Ready in 30min</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold">Live Tracking</div>
                          <div className="text-sm opacity-80">Driver arriving in 15min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features