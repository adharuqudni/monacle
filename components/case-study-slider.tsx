"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const cases = [
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
    image: "/images/case_study/Generali.png",
    link: "https://www.generali.co.id/",
    description:
      "Generali is an Italian insurance company based in Trieste. As of 2019, it is the largest of its kind in Italy and among the top ten largest insurance companies in the world by net premiums and assets. Organic traffic has increased fifteen-fold over the past 3 years.",
  },
];

export function CaseStudySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const prevCase = () => {
    setCurrentIndex(currentIndex === 0 ? cases.length - 1 : currentIndex - 1);
  };

  const nextCase = () => {
    setCurrentIndex(currentIndex === cases.length - 1 ? 0 : currentIndex + 1);
  };

  const goToCase = (index: number) => {
    setCurrentIndex(index);
  };

  const currentCase = cases[currentIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1000);

    const interval = setInterval(() => {
      nextCase();
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <section
      id="case-study"
      className="relative h-screen bg-black bg-cover bg-center bg-no-repeat overflow-hidden flex items-center"
      style={{
        backgroundImage: 'url("/images/bg/1.png")',
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div
          className={`text-center mb-10 md:mb-16 relative z-10 transition-all duration-1000 ${
            !hasAnimated
              ? "opacity-0 translate-y-8"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="text-center mb-16 relative z-10">
            <span className="tag mb-4">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold my-4">
              Our Success Stories
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore how we've helped businesses transform their digital
              presence and achieve remarkable results.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div
              className={`relative h-[40vh] max-h-[350px] md:h-[50vh] lg:h-[60vh] lg:max-h-[600px] order-first md:order-last transition-all duration-1000 ${
                !hasAnimated
                  ? "opacity-0 translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <div className="w-full h-full relative rounded-xl overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/50 to-blue-500/50 rounded-xl blur-sm"></div>
                <div className="absolute inset-0 bg-black/50 rounded-xl z-0"></div>
                <div className="absolute inset-[1px] bg-gray-900 rounded-xl overflow-hidden">
                  <Image
                    src={currentCase.image}
                    alt={`${currentCase.title} case study`}
                    fill
                    priority
                    className="object-cover object-center opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-2xl"></div>
              </div>
            </div>

            <div className="relative order-last md:order-first">
              <div
                className={`flex flex-col justify-center text-white transition-all duration-1000 ${
                  !hasAnimated
                    ? "opacity-0 -translate-x-8"
                    : "opacity-100 translate-x-0"
                }`}
              >
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 whitespace-pre-line">
                  {currentCase.title}
                </h3>

                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  {currentCase.description}
                </p>

                <div className="flex items-center space-x-4 mb-6 md:mb-8">
                  <Link
                    href={currentCase.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center space-x-2 transform hover:translate-y-[-2px]"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevCase}
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
                    aria-label="Previous case study"
                  >
                    <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>

                  <div className="flex items-center space-x-2">
                    {cases.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToCase(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-white w-8"
                            : "bg-white/40 hover:bg-white/60 w-2"
                        }`}
                        aria-label={`Go to case study ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextCase}
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
                    aria-label="Next case study"
                  >
                    <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="absolute -left-8 -bottom-12 w-24 h-24 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
