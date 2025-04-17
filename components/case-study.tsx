"use client"

import { useState } from "react"
import Image from "next/image"

const cases = [
  {
    title: "Tech\nDevelopment",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "SEO",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Performance Ads",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "360 Marketing",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function Case() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevCase = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1))
  }

  const nextCase = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1))
  }

  const currentCase = cases[currentIndex]

  return (
    <section
      id="case-study"
      className="py-24 bg-black flex flex-col items-center justify-center px-4 sm:px-6"
    >
      {/* Label */}
      <div className="tag mb-4 px-4 py-1 rounded-full text-sm font-medium text-white bg-white/10 w-fit">
        Case Study
      </div>

      <div className="max-w-7xl w-full mx-auto">
        {/* Flex layout: 45% text, 55% image */}
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          
          {/* Text Section: 45% */}
          <div className="w-full md:basis-[45%] flex flex-col justify-center items-center text-white text-center relative">
            <div className="w-full relative">
              {/* Prev Button */}
              <button
                onClick={prevCase}
                className="bg-black border border-white/20 rounded-full p-2 absolute left-0 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-pre-line mx-auto px-12">
                {currentCase.title}
              </h2>

              {/* Next Button */}
              <button
                onClick={nextCase}
                className="bg-black border border-white/20 rounded-full p-2 absolute right-0 top-1/2 transform -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Section: 55% */}
          <div className="w-full md:basis-[55%] flex justify-center">
            <div className="w-full relative aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src={currentCase.image || "/placeholder.svg"}
                alt="Case Study"
                fill
                className="object-cover opacity-70 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
