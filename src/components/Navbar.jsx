// src/components/Navbar.jsx

import React, { useState } from 'react'
import logo from '../assets/logo.svg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const items = ['Home', 'About', 'Projects', 'Contact']

  return (
    <nav className="relative font-syne bg-[#010208] text-white">
      {/* ─────────────── Desktop & Tablet ─────────────── */}
      <div className="hidden md:flex px-[10%] py-8 items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" width={46} height={32} />

        {/* Links */}
        <ul className="flex gap-4">
          {items.map(label => (
            <li
              key={label}
              className={`py-2 px-6 rounded-3xl cursor-pointer ${
                label === 'Home'
                  ? 'bg-white text-[#010208]'
                  : 'text-white'
              }`}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="px-6 py-2 rounded-3xl border border-white hover:bg-[#2d2d2d]">
          HIRE ME
        </button>
      </div>

      {/* ─────────────── Mobile ─────────────── */}
      <div className="flex md:hidden px-4 py-4 items-center justify-between">
        {/* Logo on left */}
        <img src={logo} alt="Logo" width={46} height={32} />

        {/* Hamburger on right */}
        <button
          className="p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" stroke="currentColor" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ─────────────── Mobile Sidebar ─────────────── */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed inset-y-0 right-0 w-64 bg-[#010208] z-30 p-6 flex flex-col">
            {/* Close button */}
            <button
              className="self-end mb-6 p-2"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" stroke="currentColor" fill="none">
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>

            <ul className="flex-grow flex flex-col gap-4">
              {items.map(label => (
                <li
                  key={label}
                  className={`py-2 px-4 rounded-2xl cursor-pointer transition ${
                    label === 'Home'
                      ? 'bg-white text-[#010208]'
                      : 'text-white hover:bg-white hover:text-[#010208]'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </li>
              ))}
            </ul>

            <button className="mt-auto py-2 px-6 rounded-3xl border border-white hover:bg-white hover:text-[#010208] transition">
              HIRE ME
            </button>
          </aside>
        </>
      )}
    </nav>
  )
}
