// src/components/Works.jsx

import React from 'react'
import starIcon from '../assets/Star.svg'
import img1 from '../assets/image-1.png'
import img2 from '../assets/image-2.png'
import img3 from '../assets/image-3.png'

export default function Works() {
  const items = [
    {
      img: img1,
      title: 'Analysis Application',
      desc:
        'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
      tags: ['FIGMA', 'UX']
    },
    {
      img: img2,
      title: 'Fortknox Application',
      desc:
        'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
      tags: ['MOBILE', 'WEB']
    },
    {
      img: img3,
      title: 'Zenocide Application',
      desc:
        'With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
      tags: ['APP', 'WEB']
    }
  ]

  return (
    <section className="worksContainer font-syne bg-[#010208] text-white py-8 md:py-16 px-4 md:px-[10%]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="flex items-center gap-2 font-bold text-2xl md:text-[40px]">
          <img src={starIcon} width={32} height={32} alt="star icon" />
          Works
        </h2>
        <button className="underline text-sm md:text-base">View All</button>
      </div>

      {/* Cards */}
      <div className="space-y-6 md:space-y-8">
        {items.map((w) => (
          <div
            key={w.title}
            className="bg-[#CBCBCB7A] rounded-[40px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8"
          >
            {/* Image */}
            <img
              src={w.img}
              alt={w.title}
              className="rounded-3xl w-full h-auto md:h-[430px] object-cover"
            />

            {/* Content */}
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-[40px] font-semibold">
                  {w.title}
                </h3>
                <p className="text-base md:text-lg">{w.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-white text-xs md:text-sm py-1 px-3 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <button className="mt-4 md:mt-0 self-start font-semibold text-sm md:text-base bg-white text-[#010208] py-2 md:py-4 px-4 md:px-8 rounded-full shadow-md hover:bg-gray-100">
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
