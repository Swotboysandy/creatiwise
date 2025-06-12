// src/components/FAQ.jsx
import React, { useState } from 'react'
import starIcon from '../assets/star.svg'

export default function FAQ() {
  const items = [
    {
      question: 'What is your design process?',
      answer:
        'My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.',
    },
    {
      question: 'What tools and software do you use for UX design?',
      answer:
        'Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi.',
    },
    {
      question: 'How do you measure the success of your UX designs?',
      answer:
        'Suspendisse massa risus, pretium id interdum in, dictum sit amet ante. Fusce vulputate purus sed tempus feugiat.',
    },
  ]
  const [open, setOpen] = useState(0)

  return (
    <section className="py-12 px-4 md:px-[10%] font-syne">
      {/* Heading */}
      <h2 className="flex items-center gap-2 text-[28px] md:text-[40px] font-bold">
        <img src={starIcon} width={32} height={32} alt="star icon" />
        Frequently Asked Questions
      </h2>

      {/* Accordion List */}
      <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
        {items.map((q, i) => (
          <div key={i}>
            {/* Question */}
            <button
              className="w-full text-left text-[24px] md:text-[32px] font-semibold pb-2"
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              {q.question}
            </button>
            {/* Answer */}
            {open === i && (
              <p className="mt-2 text-[16px] md:text-[18px] text-[#CBCBCB] leading-relaxed">
                {q.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
