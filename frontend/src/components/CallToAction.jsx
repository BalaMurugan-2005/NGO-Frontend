import React, { useEffect, useRef } from 'react'
import { ArrowRight, Heart, Users, Target } from 'lucide-react'

const CallToAction = () => {
  const sectionRef = useRef(null)
  const statsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    statsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="join" ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fadeInUp">
              <Heart className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Join us in giving food a second chance
              </h2>
              <p className="text-xl opacity-90">
                Together, we can create a sustainable future where no food goes to waste and no one goes hungry.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <button className="btn-primary bg-white text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 flex items-center justify-center space-x-2 group">
                <span>Start Donating</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary bg-transparent border-white text-white hover:bg-white/10 flex items-center justify-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Register as NGO</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Active Donors", value: "2,500+", icon: <Users /> },
                { label: "Partner NGOs", value: "500+", icon: <Target /> },
                { label: "Meals Shared", value: "250K+", icon: <Heart /> },
                { label: "Cities Covered", value: "50+", icon: <Target /> }
              ].map((stat, index) => (
                <div
                  key={index}
                  ref={(el) => (statsRef.current[index] = el)}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center opacity-0"
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-white/20 p-3 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className="mt-12 text-center opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to make a difference? Join thousands of organizations already transforming surplus food into hope.
          </p>
          <div className="mt-6">
            <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto">
              <span>Schedule a demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction