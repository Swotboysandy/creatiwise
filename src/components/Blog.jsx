// src/components/Blog.jsx

import React from 'react'
import starIcon from '../assets/star.svg'
import img1     from '../assets/image-1.png'
import img2     from '../assets/image-2.png'
import img3     from '../assets/image-3.png'

export default function Blog() {
  const posts = [
    {
      date: 'Nov 9, 2023',
      title: 'How UX works in web',
      tags: ['UI','UX'],
      img: img1
    },
    {
      date: 'Aug 18, 2023',
      title: 'Case study - Analysis Application.',
      tags: ['DESIGN','PRINT'],
      img: img2
    },
    {
      date: 'Feb 16, 2023',
      title: '3 ways to develop your skill',
      tags: ['FIGMA','WEB'],
      img: img3
    }
  ]

  return (
    <section className="blogContainer py-16 px-[10%] font-syne">
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-2 font-bold text-[40px]">
          <img src={starIcon} width={32} height={32} alt="star"/> Blog
        </h2>
        <span className="underline cursor-pointer">View All</span>
      </div>

      <div className="mt-8 space-y-8">
        {posts.map((p) => (
          <div
            key={p.title}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
          >
            {/* Left: image */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-[215px] md:h-[285px] object-cover rounded-3xl"
            />

            {/* Right: content */}
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-2">
                <p className="text-[#CBCBCB] text-lg font-poppins">{p.date}</p>
                <h3 className="font-semibold text-[40px]">{p.title}</h3>
                <div className="flex gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="py-2 px-6 rounded-full border border-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <button className="font-semibold bg-white text-[#010208] py-4 px-8 rounded-full">
                  Read
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
