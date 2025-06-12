import React from 'react'

export default function Footer() {
  const socials = ['Dribbble','Behance','Twitter','Instagram']
  return (
    <footer className="font-syne pt-28 pb-8 px-4 md:px-[10%] text-white">
      {/* Top: title & email */}
      <div className="text-center space-y-1 md:space-y-2">
        <h2 className="text-4xl md:text-[64px] font-extrabold">LET’S TALK!</h2>
        <p className="text-base md:text-lg font-poppins">rehanurraihan@gmail.com</p>
      </div>

      {/* Bottom: copyright & socials */}
      <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center md:justify-between text-sm">
        <span className="mb-4 md:mb-0">© Rehan Raihan - 2023</span>
        <ul className="flex flex-wrap gap-4 md:gap-8">
          {socials.map((s) => (
            <li key={s} className="cursor-pointer">{s}</li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
