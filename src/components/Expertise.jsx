// src/components/Expertise.jsx

import React from 'react'
import starIcon from '../assets/star.svg'

export default function Expertise() {
  const list = [
    {
      title: 'Branding',
      desc:
        'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
      title: 'UI Design',
      desc:
        'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
      title: 'UX Design',
      desc:
        'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    },
    {
      title: 'Development',
      desc:
        'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.'
    }
  ]

  return (
    <section className="expertise py-8 sm:py-[64px] px-4 sm:px-[10%] font-syne">
      <h2 className="syne-text flex items-center gap-2 font-bold text-2xl sm:text-[40px]">
        <img src={starIcon} width={32} height={32} alt="" /> Expertise
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {list.map(({ title, desc }) => (
          <div key={title} className="space-y-4">
            <h3 className="syne-text font-semibold text-xl sm:text-[24px] list-[square]">
              {title}
            </h3>
            <p className="text-[#CBCBCB] text-sm sm:text-base leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
