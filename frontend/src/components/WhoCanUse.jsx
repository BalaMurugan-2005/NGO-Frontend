import React, { useEffect, useRef } from 'react'
import { Building, Users, Calendar, ChefHat, Heart, MapPin, CheckCircle } from 'lucide-react'

const WhoCanUse = () => {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

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

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const donorTypes = [
    { icon: <Building className="w-5 h-5" />, label: "Hotels" },
    { icon: <ChefHat className="w-5 h-5" />, label: "Restaurants" },
    { icon: <Calendar className="w-5 h-5" />, label: "Event Organizers" },
    { icon: <Users className="w-5 h-5" />, label: "Catering Services" }
  ]

  const ngoTypes = [
    { icon: <Heart className="w-5 h-5" />, label: "Food Banks" },
    { icon: <Users className="w-5 h-5" />, label: "Community Centers" },
    { icon: <MapPin className="w-5 h-5" />, label: "Local NGOs" },
    { icon: <Building className="w-5 h-5" />, label: "Shelters" }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who Can Use This
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our growing network of food donors and distribution partners
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Donor Card */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className="opacity-0"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-xl border border-emerald-100 h-full transform hover:scale-[1.02] transition-transform duration-500">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <Building className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Food Donors</h3>
                  <p className="text-emerald-600 font-medium">Share your surplus food</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 mb-6">
                  Hotels, restaurants, caterers, and event organizers can easily donate excess food that would otherwise go to waste.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {donorTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-emerald-100 hover:border-emerald-300 transition-colors duration-300"
                    >
                      <div className="text-emerald-600">
                        {type.icon}
                      </div>
                      <span className="font-medium text-gray-700">{type.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn-primary w-full">
                Become a Food Donor
              </button>
            </div>
          </div>

          {/* NGO Card */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className="opacity-0"
          >
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 shadow-xl border border-teal-100 h-full transform hover:scale-[1.02] transition-transform duration-500">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">NGOs & Volunteers</h3>
                  <p className="text-teal-600 font-medium">Collect and distribute food</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-600 mb-6">
                  Registered NGOs and volunteers can receive notifications about available food donations in their area.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {ngoTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 bg-white p-3 rounded-lg border border-teal-100 hover:border-teal-300 transition-colors duration-300"
                    >
                      <div className="text-teal-600">
                        {type.icon}
                      </div>
                      <span className="font-medium text-gray-700">{type.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn-secondary w-full border-teal-600 text-teal-700 hover:bg-teal-50">
                Register as NGO
              </button>
            </div>
          </div>
        </div>

        {/* Join Network Callout */}
        <div className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Part of a larger ecosystem?
            </h3>
            <p className="text-lg md:text-xl font-light mb-8 opacity-95">
              Join a growing network of verified donors and NGOs transforming surplus into sustenance.
              Our platform ensures transparency, speed, and reliability in every transaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-emerald-100" />
                <span className="text-sm font-medium">Verified Partners</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-emerald-100" />
                <span className="text-sm font-medium">Traceable Donations</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-emerald-100" />
                <span className="text-sm font-medium">Impact Reports</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoCanUse