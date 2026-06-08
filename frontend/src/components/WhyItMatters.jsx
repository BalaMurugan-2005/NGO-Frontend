import React, { useEffect, useRef } from 'react'
import { Shield, Users, Clock, CheckCircle, Globe, Heart } from 'lucide-react'

const WhyItMatters = () => {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

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

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Food Safety First",
      description: "Verified storage and handling protocols"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Impact",
      description: "Direct help to those who need it most"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Distribution",
      description: "Quick matching and pickup system"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Easy Coordination",
      description: "Simple scheduling and communication"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Environmental Care",
      description: "Reduce landfill waste significantly"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Social Responsibility",
      description: "Fulfill CSR goals meaningfully"
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why This Matters
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Every day, <span className="font-bold text-emerald-600">tons of edible food are wasted</span> while millions go hungry.
              Together, we can bridge this gap and create sustainable impact.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group opacity-0"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  {/* Icon Container */}
                  <div className="bg-emerald-100 group-hover:bg-emerald-600 p-3 rounded-lg transition-colors duration-300 flex-shrink-0">
                    <div className="text-emerald-600 group-hover:text-white transition-colors duration-300">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Logic / Tech Constraints */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-emerald-100 transform hover:scale-[1.01] transition-transform duration-500">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">Real-time</div>
              <h3 className="font-semibold text-gray-900 mb-1">Live Tracking</h3>
              <p className="text-sm text-gray-600">Instant updates on food availability & status</p>
            </div>
            <div className="text-center p-4 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">AI-Driven</div>
              <h3 className="font-semibold text-gray-900 mb-1">Quality Check</h3>
              <p className="text-sm text-gray-600">Smart algorithms to ensure food safety</p>
            </div>
            <div className="text-center p-4 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">Geo-Fenced</div>
              <h3 className="font-semibold text-gray-900 mb-1">Smart Matching</h3>
              <p className="text-sm text-gray-600">Connects nearest donor to fastest pickup</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-emerald-600 mb-2">Verified</div>
              <h3 className="font-semibold text-gray-900 mb-1">Trusted Network</h3>
              <p className="text-sm text-gray-600">Strict vetting for all NGOs & Volunteers</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 italic">
              *Our system enforces strict food safety guidelines. Donations not meeting quality criteria are automatically flagged.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyItMatters