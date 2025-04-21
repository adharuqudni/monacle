"use client"

import { useState } from "react"
import Image from "next/image";

const cases = [
  {
    title: "Bumi\Langit",
    image: "/images/Case Studies Element/GIF Bumi Langit.gif",
    description:
      "We helped a growing beauty brand increase their online visibility through a multi-platform digital campaign. By combining paid ads, influencer outreach, and precise audience targeting, we tripled their monthly leads. The campaign achieved a 4.5x return on ad spend in just 2 months.",
  },
  {
    title: "Helloilmare",
    image: "/images/Case Studies Element/GIF Helloilmare.gif",
    description:
      "A tech startup approached us for a complete brand overhaul. We developed a new visual identity, messaging framework, and digital presence that positioned them as industry innovators. The rebrand resulted in 70% increased engagement and helped secure their Series A funding.",
  },
  {
    title: "RHB\nTradesmart",
    image: "images/Case Studies Element/GIF RHB.gif",
    description:
      "We transformed an underperforming e-commerce store into a conversion machine. Through UX improvements, strategic product positioning, and targeted marketing campaigns, we increased conversion rates by 135% and grew monthly revenue by 210% within 6 months.",
  },
  {
    title: "Trinivi",
    image: "images/Case Studies Element/Logo Trinivi.png",
    description:
      "We transformed an underperforming e-commerce store into a conversion machine. Through UX improvements, strategic product positioning, and targeted marketing campaigns, we increased conversion rates by 135% and grew monthly revenue by 210% within 6 months.",
  },
]

export function CaseStudySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevCase = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1))
  }

  const nextCase = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1))
  }

  const currentCase = cases[currentIndex]

  return (
    <section id="case-study" className="py-24 bg-black flex flex-col items-center justify-center">
      {/* Centered "CASE STUDY" Label */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full inline-block">
        CASE STUDY
      </div>
      <br />
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          {/* Left Column - Text Section */}
          <div className="flex flex-col justify-center relative text-white ">
            {/* Title with Arrows */}
            <div className="flex items-center justify-between mb-6">
              {/* Left Arrow */}
              <button
                onClick={prevCase}
                className="bg-black border border-white/20 rounded-full p-2 hover:border-neon-blue transition-colors"
                aria-label="Previous case study"
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
              <h2 className="text-3xl md:text-4xl font-bold whitespace-pre-line text-center flex-1 mx-4 w-full whitespace-nowrap">
                {currentCase.title}
              </h2>

              {/* Right Arrow */}
              <button
                onClick={nextCase}
                className="bg-black border border-white/20 rounded-full p-2 hover:border-neon-blue transition-colors"
                aria-label="Next case study"
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

          {/* Right Column - Image Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-[600px] h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative">

              <Image
                src={currentCase.image}
                alt="Case Study"
                width={600}
                height={400}
                className=" object-cover opacity-70 transition-all duration-300 hover:opacity-100   h-full "
              />

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full opacity-30 blur-xl z-10"></div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {cases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

