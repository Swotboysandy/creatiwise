// src/components/Experience.jsx

import React from 'react'
import starIcon from '../assets/Star.svg'

export default function Experience() {
  const roles = [
    { title: 'Lead Product Designer', company: 'Fortknox', period: 'Mar 2022 - Oct 2023' },
    { title: 'Intern Designer',      company: 'OmniSafe', period: 'Mar 2022 - Oct 2023' },
    { title: 'UI Designer',          company: 'Doradesign', period: 'Mar 2022 - Oct 2023' },
    { title: 'Frontend Developer',   company: 'OpacityAuthor', period: 'Mar 2022 - Oct 2023' }
  ]

  return (
    <section className="experienceContainer font-syne bg-[#010208] text-white py-8 px-4 md:py-16 md:px-[10%]">
      {/* Heading */}
      <h2 className="flex items-center gap-2 font-bold text-2xl md:text-[40px] mb-6">
        <img src={starIcon} width={32} height={32} alt="star icon" />
        Experience
      </h2>

      {/* Entries */}
      <div className="space-y-4 md:space-y-6">
        {roles.map((r) => (
          <div
            key={r.title}
            className="
              grid gap-1
              grid-cols-1
              md:flex md:justify-between md:items-center
              border-b border-white/50
              py-3 md:py-2
            "
          >
            {/* Title */}
            <h3 className="font-medium text-lg md:text-[32px]">
              {r.title}
            </h3>
            {/* Company & Period */}
            <div className="space-y-0.5 text-left md:text-right mt-2 md:mt-0">
              <h4 className="font-semibold text-base md:text-2xl">
                {r.company}
              </h4>
              <p className="text-sm md:text-base">
                {r.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
