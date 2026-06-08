import React, { useEffect, useRef } from 'react'
import { ArrowRight, HeartHandshake, ShieldCheck, Leaf } from 'lucide-react'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('animate-fadeInUp')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      const hiddenElements = heroRef.current.querySelectorAll('.opacity-0')
      hiddenElements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="section-padding gradient-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 opacity-0">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Don't Waste Food.
                <span className="block text-emerald-600">Feed Lives.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                A smart platform that connects surplus food with NGOs to reduce food waste and fight hunger.
              </p>
            </div>

            {/* Benefits List instead of Stats */}
            <div className="grid grid-cols-1 gap-4 max-w-md pt-2">
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-emerald-100 p-2 rounded-full">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <span>Safe & Verified Food Sources</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-emerald-100 p-2 rounded-full">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                </div>
                <span>Zero Waste Initiative</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary flex items-center justify-center space-x-2 group">
                <span>Donate Food</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary">
                NGO Login
              </button>
            </div>
          </div>

          {/* Hero Animation */}
          <div className="relative opacity-0 animate-delay-300 flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 animate-bounce-slow">
                  <HeartHandshake className="w-20 h-20 text-emerald-600" />
                </div>
              </div>

              {/* Orbiting Elements */}
              {/* Circle 1 */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6">
                  <div className="bg-white p-3 rounded-full shadow-lg">
                    <Leaf className="w-8 h-8 text-emerald-500" />
                  </div>
                </div>
              </div>

              {/* Circle 2 */}
              <div className="absolute inset-0 animate-spin-reverse-slow">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6">
                  <div className="bg-white p-3 rounded-full shadow-lg">
                    <ShieldCheck className="w-8 h-8 text-emerald-500" />
                  </div>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute inset-4 border-2 border-emerald-100 rounded-full animate-pulse"></div>
              <div className="absolute inset-16 border-2 border-dashed border-emerald-200 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero