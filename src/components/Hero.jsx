// src/components/Hero.jsx

import React from 'react'
import avatar1 from '../assets/avtar-1.svg'
import avatar2 from '../assets/avtar-2.svg'
import flash   from '../assets/flash.svg'
import wavefun from '../assets/wavefun.svg'
import susila  from '../assets/susila.svg'

export default function Hero() {
  return (
    <section
      className="bg-[#010208] text-white
                 py-12 sm:py-16 md:py-32
                 px-4 sm:px-6 md:px-[10%]"
    >
      {/* Title */}
      <div
        className="font-syne uppercase font-extrabold
                   text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                   leading-tight flex flex-col items-center gap-3 sm:gap-4"
      >
        {/* Line 1 */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          <span>I am a</span>
          <span className="w-10 h-10 sm:w-12 sm:h-12 md:w-32 md:h-32 inline-flex items-center rounded-full overflow-hidden">
            <img src={avatar1} alt="avatar1" />
          </span>
          <span>freelance</span>
        </div>

        {/* Line 2 */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          <span>designer</span>
          <span className="w-10 h-10 sm:w-12 sm:h-12 md:w-32 md:h-32 inline-flex items-center rounded-full overflow-hidden">
            <img src={avatar2} alt="avatar2" />
          </span>
          <span>from</span>
        </div>

        {/* Line 3 (always centered) */}
        <div className="w-full flex justify-center">
          <span>San Francisco</span>
        </div>
      </div>

      {/* Logos + Intro */}
      <div className="mt-8 sm:mt-10 md:mt-12 text-[#CBCBCB]">
        {/* Mobile: marquee-style scroll */}
        <div className="flex space-x-8 overflow-x-auto pb-4 md:hidden">
          {[flash, wavefun, susila].map((src, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-2 text-base sm:text-lg">
              <img src={src} className="h-6 w-6 sm:h-7 sm:w-7 object-contain" />
              {i === 0 ? 'doradesign' : i === 1 ? 'wavefun' : 'susila'}
            </div>
          ))}
        </div>

        {/* Desktop: 5-col grid */}
        <div className="hidden md:grid md:grid-cols-5 md:gap-8 items-start">
          <div className="flex items-center gap-2 text-lg">
            <img src={flash} width={24} height={24} alt="doradesign" />
            doradesign
          </div>
          <div className="flex justify-center">
            <img src={wavefun} width={99} height={32} alt="wavefun" />
          </div>
          <div className="flex justify-center">
            <img src={susila} width={99} height={32} alt="susila" />
          </div>
          <div className="col-span-2">
            <p className="font-poppins text-base md:text-lg leading-relaxed">
              Welcome to my portfolio. Here, artistry meets functionality.
              Dive into a curated showcase of distinctive branding and web
              designs, each crafted to captivate and inspire.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
