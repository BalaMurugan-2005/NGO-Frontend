import React, { useEffect, useRef } from 'react'
import { Upload, Bell, Truck, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const sectionRef = useRef(null)
  const stepRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fadeInUp')
            }, index * 200)
          }
        })
      },
      { threshold: 0.1 }
    )

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      icon: <Upload className="w-8 h-8" />,
      title: "1. Donor Uploads Details",
      description: "Enter food type, quantity, pickup time, and location",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "2. NGOs Get Notified",
      description: "Nearby NGOs receive instant notifications",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "3. Safe Pickup & Delivery",
      description: "NGO picks up and distributes food safely",
      color: "bg-green-100 text-green-600"
    }
  ]

  return (
    <section id="how-it-works" ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform surplus food into hope
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className="relative opacity-0"
            >
              {/* Step Card */}
              <div className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-emerald-200 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Connecting Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-emerald-200 to-transparent transform translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Under 30min</div>
              <p className="opacity-90">Average Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99%</div>
              <p className="opacity-90">Successful Pickups</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="opacity-90">Platform Availability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ArrowRight component for the connecting line
const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
)

export default HowItWorks