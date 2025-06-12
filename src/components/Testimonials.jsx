// src/components/Testimonials.jsx

import React, { useState } from 'react'
import avatar1  from '../assets/userProfile.svg'
import starIcon from '../assets/star.svg'
import quoteIcon from '../assets/quote.svg'
import arrow     from '../assets/arrow.svg'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      avatar: avatar1,
      name:   'Floyd Miles',
      company:'eBay',
      text:   `Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.`
    },
    {
      avatar: avatar1,
      name:   'Floyd Miles',
      company:'eBay',
      text:   `Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.`
    }
  ]

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent(c => (c + 1) % slides.length)
  const t    = slides[current]

  return (
    <section className="py-8 px-4 md:px-[10%] bg-[#010208] text-white font-syne">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        <img src={starIcon} width={32} height={32} alt="star icon" />
        <h2 className="text-[28px] md:text-[36px] font-bold">What they say</h2>
      </div>

      {/* Grid: avatar & name vs quote */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-8 items-start">
        {/* avatar + name */}
        <div className="col-span-12 md:col-span-4 flex items-center gap-3 md:gap-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{t.name}</h3>
            <p className="text-[#CBCBCB] text-sm">{t.company}</p>
          </div>
        </div>

        {/* quote */}
        <div className="relative col-span-12 md:col-span-8">
          <img
            src={quoteIcon}
            alt=""
            width={112}
            height={96}
            className="absolute -top-6 md:-top-8 left-0 opacity-20"
          />
          <p className="font-poppins text-[20px] md:text-[32px] font-semibold leading-relaxed pl-3 md:pl-16">
            {t.text}
          </p>
        </div>
      </div>

      {/* arrows */}
      <div className="flex justify-center gap-4 md:gap-6 mt-6">
        <button
          onClick={prev}
          className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#CBCBCB] transition"
          aria-label="Previous testimonial"
        >
          <img src={arrow} alt="Prev" className="rotate-180 w-3 h-1 md:w-4 md:h-2" />
        </button>
        <button
          onClick={next}
          className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#CBCBCB] transition"
          aria-label="Next testimonial"
        >
          <img src={arrow} alt="Next" className="w-3 h-1 md:w-4 md:h-2" />
        </button>
      </div>
    </section>
  )
}
