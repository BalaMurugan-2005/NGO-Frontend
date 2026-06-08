import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyItMatters from './components/WhyItMatters'
import WhoCanUse from './components/WhoCanUse'
import Features from './components/Features'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  // Smooth scroll to anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyItMatters />
        <WhoCanUse />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App