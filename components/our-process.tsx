import React from "react";

export function ProcessDiagram() {
  return (
    <div
      id="how-it-works"
      className="relative w-full h-screen bg-cover bg-center overflow-hidden px-4 py-12"
      style={{ backgroundImage: "url('/images/bg/2.png')" }}
    >
      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <span className="tag mb-4">Our Process</span>
        <h2 className="text-3xl md:text-4xl font-bold my-4">
          How We Make It Happen
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A simple, transparent process designed to help your brand grow
          efficiently.
        </p>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Desktop Image */}
        <div className="relative flex justify-center items-center h-[600px] mb-10 hidden md:flex">
          <div className="absolute transform -translate-y-1/2 top-1/2 z-20 w-full px-8">
            <img
              src="/images/how_it_works/works.png"
              alt="Strategic Foundation"
              className="w-[60%] h-auto object-cover rounded-xl mx-auto relative z-20"
              style={{
                boxShadow: "0 0 40px 8px rgba(0, 0, 0, 0.2)",
                filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.3))",
              }}
            />
          </div>
        </div>

        {/* Purple Cards (Desktop) */}
        {[
          {
            number: 1,
            title: "Observe The Landscape",
            desc: "We zoom out to see the big picture, mapping trends, signals, and market niches with clarity.",
            position: "top-0 left-0 md:left-[5%]",
          },
          {
            number: 2,
            title: "Frame The Approach",
            desc: "We define the sharpest angle — positioning, messaging, and strategy — with intent and insight.",
            position: "bottom-0 left-0 md:left-[5%]",
          },
          {
            number: 3,
            title: "Refine and Amplify",
            desc: "We bring the strategy to life through bold, audience-centric creative that resonates and stands out.",
            position: "top-0 right-0 md:right-[5%]",
          },
          {
            number: 4,
            title: "Activate with Precision",
            desc: "We optimize, learn, and amplify what works — turning insights into lasting impact.",
            position: "bottom-0 right-0 md:right-[5%]",
          },
        ].map((box, i) => (
          <div
            key={i}
            className={`absolute ${box.position} w-[280px] p-5 rounded-lg text-white shadow-xl border-2 border-purple-500/70 md:block hidden transform transition-all duration-500 hover:-translate-y-2 hover:border-purple-400`}
            style={{
              backgroundColor: "transparent",
              boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.5)",
            }}
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center font-bold text-white border border-purple-500 animate-pulse">
              {box.number}
            </div>
            <h3 className="font-bold mb-2 text-lg text-purple-200">
              {box.title}
            </h3>
            <p className="text-sm text-gray-300">{box.desc}</p>
          </div>
        ))}

        {/* Mobile Version */}
        <div className="md:hidden space-y-6 mt-8">
          {[1, 2, 3, 4].map((n, i) => {
            const titles = [
              "Observe The Landscape",
              "Frame The Approach",
              "Refine and Amplify",
              "Activate with Precision",
            ];
            const descriptions = [
              "We zoom out to see the big picture, mapping trends, signals, and market niches with clarity.",
              "We define the sharpest angle — positioning, messaging, and strategy — with intent and insight.",
              "We bring the strategy to life through bold, audience-centric creative that resonates and stands out.",
              "We optimize, learn, and amplify what works — turning insights into lasting impact.",
            ];
            return (
              <div
                key={n}
                className="p-5 rounded-lg text-white shadow-xl border-2 border-purple-500/70 relative transform transition-all duration-300 active:scale-95"
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.5)",
                }}
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center font-bold text-white border border-purple-500 animate-pulse">
                  {n}
                </div>
                <h3 className="font-bold mb-2 text-lg text-purple-200">
                  {titles[i]}
                </h3>
                <p className="text-sm text-gray-300">{descriptions[i]}</p>
              </div>
            );
          })}

          {/* Mobile Image (Hidden) */}
          <div className="relative py-6">
            <img
              src="/images/how_it_works/works.png"
              alt="Strategic Foundation"
              className="w-[80%] h-auto object-cover rounded-xl relative z-10 hidden md:block"
              style={{
                boxShadow: "0 0 30px 5px rgba(0, 0, 0, 0.2)",
                filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.3))",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
