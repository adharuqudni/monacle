"use client"

import { useState } from "react"
import Image from "next/image"

const cases = [
  {
    title: "Digital\nCampaign",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Product\nLaunch",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Social Media\nStrategy",
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
    <section id="case-study" className="py-24 bg-black flex flex-col items-center justify-center px-4 sm:px-6">
      {/* CASE STUDY Label */}
      <div className="tag mb-4 px-4 py-1 rounded-full text-sm font-medium text-white bg-white/10 w-fit">Case Study</div>

      <div className="max-w-7xl w-full mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center items-center text-white text-center relative">
            {/* Title with absolute positioned arrows */}
            <div className="w-full relative">
              {/* Prev Button - Absolute positioned to the left */}
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

              {/* Title - Centered */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-pre-line mx-auto px-12">
                {currentCase.title}
              </h2>

              {/* Next Button - Absolute positioned to the right */}
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

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-md sm:max-w-lg md:w-[600px] h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
              <Image
                src={currentCase.image || "/placeholder.svg"}
                alt="Case Study"
                width={600}
                height={400}
                className="w-full h-full object-cover opacity-70 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
