import React from "react";

export function ProcessDiagram() {
  return (
    <div
      id="how-it-works"
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden px-4 py-24 bg-[#0A051E]"
    >
      {/* Header Section */}
      <div className="text-center mb-16 relative z-10">
        <span className="tag mb-4">How We Work</span>
        {/* <h2 className="text-3xl md:text-4xl font-bold my-4">
          How We Make It Happen
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A simple, transparent process designed to help your brand grow
          efficiently.
        </p> */}
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto">
        {/* Desktop Version */}
        <div className="hidden md:block relative h-[600px]">
          {/* Center Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px]">
            <img
              src="/images/how_it_works/works.png"
              alt="Strategic Foundation and Creative Execution"
              className="w-full h-auto"
            />
          </div>

          {/* Process Cards */}
          {[ 
            {
              number: "1",
              title: "Observe The Landscape",
              desc: "We zoom out to see the big picture, mapping trends, signals, and market niches with clarity.",
              position: "top-0 left-0",
            },
            {
              number: "2",
              title: "Frame The Approach",
              desc: "We define the sharpest angle — positioning, messaging, and strategy — with intent and insight.",
              position: "bottom-0 left-0",
            },
            {
              number: "3",
              title: "Refine and Amplify",
              desc: "We bring the strategy to life through bold, audience-centric creative that resonates and stands out.",
              position: "top-0 right-0",
            },
            {
              number: "4",
              title: "Activate with Precision",
              desc: "We optimize, learn, and amplify what works — turning insights into lasting impact.",
              position: "bottom-0 right-0",
            },
          ].map((box, i) => (
            <div
              key={i}
              className={`absolute ${box.position} w-[300px] p-6 rounded-xl text-white border border-purple-500/30 backdrop-blur-sm transform transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/50`}
              style={{
                backgroundColor: "rgba(20, 20, 30, 0.7)",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
              }}
            >
              <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-sm">
                {box.number}
              </div>
              <h3 className="font-bold mb-3 text-xl text-white">{box.title}</h3>
              <p className="text-gray-300 leading-relaxed">{box.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Version */}
        <div className="md:hidden space-y-6">
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
                className="p-6 rounded-xl text-white border border-purple-500/30 backdrop-blur-sm relative"
                style={{
                  backgroundColor: "rgba(20, 20, 30, 0.7)",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.2)",
                }}
              >
                <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white text-sm">
                  {n}
                </div>
                <h3 className="font-bold mb-3 text-xl text-white">
                  {titles[i]}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {descriptions[i]}
                </p>
              </div>
            );
          })}

          {/* Mobile Image - hidden on mobile */}
          <div className="relative h-[300px] my-12 flex items-center justify-center hidden md:block">
            <img
              src="/images/how_it_works/works.png"
              alt="Strategic Foundation and Creative Execution"
              className="w-[280px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
