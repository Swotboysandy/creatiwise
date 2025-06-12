import React from 'react'
import Star2    from '../assets/star-2.svg'
import Designer from '../assets/DESIGNER.svg'
import Figma    from '../assets/FIGMA.svg'

const seq = [ Star2, Designer, Star2, Figma ]

export default function Marquee() {
  return (
    <section className="overflow-hidden py-12 px-4 md:px-[10%]">
      <div
        className="
          flex 
          whitespace-nowrap 
          animate-marquee 
          space-x-4 md:space-x-[40px]
        "
      >
        {/* render twice so our animation can loop smoothly */}
        {[...seq, ...seq].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="flex-shrink-0 h-12 md:h-16"
          />
        ))}
      </div>
    </section>
  )
}
