"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Updated case study data
const caseStudies = [
  {
    title: "Bumi Langit",
    image: "/images/case_study/bumi.png",
    link: "https://bumilangit.com",
    description:
      "Bumilangit is a leading Asian entertainment company specializing in character-based intellectual property. With a vast library of over 1,200 comic book characters developed over six decades, Bumilangit is one of Asia's largest comic book universes.",
  },
  {
    title: "Helloilmare",
    image: "/images/case_study/helloilmare.png",
    link: "https://helloilmare.com",
    description:
      "Helloilmare is an upholstery service brand focused on sofa renewal. With Monocle's performance ads, conversions rate increased by 41% in 2 months. No budget increase. Just sharper targeting and tailored creatives.",
  },
  {
    title: "RHB Tradesmart",
    image: "/images/case_study/rhb.png",
    link: "https://www.rhbtradesmart.co.id",
    description:
      "RHB Tradesmart is the first trading application in Indonesia with the Assisted Robo Optimization (ARO) feature that can provide real-time signals to facilitate investment. In these past 3 years, the organic traffic increase by 700%. Owned organic keywords increase ninefold.",
  },
  {
    title: "Trinvi",
    image: "/images/case_study/trinvi.png",
    link: "https://www.instagram.com/reel/CkAtx0zpYj9/?img_index=cubmuofficial",
    description:
      "We led a 360° marketing campaign for TRINVI by Transvision covering social media, media outreach, ads, SEO, NFT, smart contract, and website development. Resulting in 30% of NFTs sold out at launch.",
  },
  {
    title: "Generali",
    image: "/images/case_study/generali.png",
    link: "https://www.generali.co.id/",
    description:
      "Generali is an Italian insurance company based in Trieste. As of 2019, it is the largest of its kind in Italy and among the top ten largest insurance companies in the world by net premiums and assets. Organic traffic has increased fifteen-fold over the past 3 years.",
  },
];

export function CaseStudySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    // Prevent going past the last slide
    if (activeIndex < caseStudies.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    // Prevent going before the first slide
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const activeCase = caseStudies[activeIndex];

  return (
    <section
      className="w-full text-white py-16 md:py-24"
      style={{
        backgroundImage: 'url("/images/bg/5.png")', // Ganti dengan path gambar background
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 relative z-10">
          <span className="tag mb-4">Case Study</span>
          <h2 className="text-3xl md:text-4xl font-bold my-4">
            Our Success Stories
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore how we&apos;ve helped businesses transform their digital
            presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image on top for mobile, left for desktop */}
          <div className="md:col-span-1 md:order-2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={activeCase.image || "/placeholder.svg"}
                  alt={activeCase.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 md:col-span-1 md:order-1">
            <h3 className="text-3xl md:text-4xl font-bold">
              {activeCase.title}
            </h3>
            <p className="text-gray-300 text-lg">{activeCase.description}</p>
            {/* <Button
              variant="outline"
              className="border-white text-white group hover:bg-transparent hover:text-white hover:border-white"
              onClick={() => window.open(activeCase.link, "_blank")}
            >
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button> */}

            <div className="flex items-center space-x-4 pt-6">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-gray-700 text-white hover:bg-white/10 hover:text-white hover:border-white"
                onClick={prevSlide}
                disabled={activeIndex === 0} // Disable prev button on first slide
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous</span>
              </Button>

              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex ? "w-8 bg-white" : "w-2 bg-gray-600"
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-gray-700 text-white hover:bg-white/10 hover:text-white hover:border-white"
                onClick={nextSlide}
                disabled={activeIndex === caseStudies.length - 1} // Disable next button on last slide
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
