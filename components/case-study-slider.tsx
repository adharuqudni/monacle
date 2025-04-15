"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    id: 1,
    tag: "Case Study",
    title: "Digital Campaign",
    description:
      "We helped a growing beauty brand increase their online visibility through a multi-platform digital campaign. By combining strategic content planning, creative design, and precise audience targeting, we tripled their monthly leads. The campaign achieved a 4.2x return on spend in just 3 months.",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    id: 2,
    tag: "Case Study",
    title: "Brand Redesign",
    description:
      "A tech startup approached us for a complete brand overhaul. We developed a new visual identity, messaging framework, and digital presence that positioned them as industry innovators. The rebrand resulted in 70% increased engagement and helped secure their Series A funding.",
    image: "/placeholder.svg?height=500&width=600",
  },
  {
    id: 3,
    tag: "Case Study",
    title: "E-commerce Growth",
    description:
      "We transformed an underperforming e-commerce store into a conversion machine. Through UX improvements, strategic product positioning, and targeted marketing campaigns, we increased conversion rates by 135% and grew monthly revenue by 210% within 6 months.",
    image: "/placeholder.svg?height=500&width=600",
  },
]

export function CaseStudySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    try {
      // Auto-advance the slider
      timeoutRef.current = setTimeout(goToNext, 5000)

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    } catch (error) {
      console.error("Error in slider auto-advance:", error)
      // Clean up in case of error
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="case-study" className="section-padding bg-black">
      <div className="container mx-auto px-4 relative">
        <div className="overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 md:order-1 relative">
                <span className="tag mb-4">{caseStudies[currentIndex].tag}</span>
                <h2 className="text-3xl md:text-4xl font-bold my-6">{caseStudies[currentIndex].title}</h2>
                <p className="text-gray-300 mb-6">{caseStudies[currentIndex].description}</p>
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple">View Case Study</Button>

                {/* Navigation arrows moved to the left section */}
                <div className="flex space-x-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              <div className="order-1 md:order-2 relative">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={caseStudies[currentIndex].image || "/placeholder.svg"}
                    alt={caseStudies[currentIndex].title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full opacity-30 blur-xl"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-secondary" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
