import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Works from './components/Works'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Marquee from './components/Marquee'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#010208] text-white">
      <Navbar />
      <Hero />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonials />
      <FAQ />
      <Marquee />
      <Footer />
    </div>
  )
}