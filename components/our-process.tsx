import React from 'react';

export function ProcessDiagram() {
  return (
    <div
      id="how-it-works"
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden px-4 py-12"
      style={{ backgroundImage: "url('/images/bg/how_it_works.png')" }}
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

      {/* Main Content with Circles and Text Boxes */}
      <div className="relative max-w-6xl mx-auto">
        {/* Image - Hidden on mobile, visible on md screens and up */}
        <div className="relative flex justify-center items-center h-[600px] mb-10 hidden md:flex">
          <div className="absolute transform -translate-y-1/2 top-1/2 z-10">
            <img
              src="/images/how_it_works/works.png"
              alt="Strategic Foundation"
              className="max-w-full h-auto shadow-lg max-h-[400px] object-contain"
            />
          </div>
        </div>

        {/* Text Boxes with Colorful Gradients */}
        {/* Top Left Box */}
        <div
          className="absolute top-0 left-0 md:left-[5%] w-[280px] bg-gray-900/40 backdrop-blur-sm p-5 rounded-lg text-white shadow-xl border-2 border-purple-500 md:block hidden"
          style={{ boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.5)" }}
        >
          <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center font-bold text-white border border-purple-500">
            1
          </div>
          <h3 className="font-bold mb-2 text-lg">Observe The Landscape</h3>
          <p className="text-sm">
            We zoom out to see the big picture, mapping trends, signals, and
            market niches with clarity.
          </p>
        </div>

        {/* Bottom Left Box */}
        <div
          className="absolute bottom-0 left-0 md:left-[5%] w-[280px] bg-gray-900/40 backdrop-blur-sm p-5 rounded-lg text-white shadow-xl border-2 border-purple-500 md:block hidden"
          style={{ boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.5)" }}
        >
          <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center font-bold text-white border border-purple-500">
            2
          </div>
          <h3 className="font-bold mb-2 text-lg">Frame The Approach</h3>
          <p className="text-sm">
            We define the sharpest angle — positioning, messaging, and strategy
            — with intent and insight.
          </p>
        </div>

        {/* Top Right Box */}
        <div
          className="absolute top-0 right-0 md:right-[5%] w-[280px] bg-gray-900/40 backdrop-blur-sm p-5 rounded-lg text-white shadow-xl border-2 border-purple-500 md:block hidden"
          style={{ boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.5)" }}
        >
          <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center font-bold text-white border border-purple-500">
            3
          </div>
          <h3 className="font-bold mb-2 text-lg">Refine and Amplify</h3>
          <p className="text-sm">
            We bring the strategy to life through bold, audience-centric
            creative that resonates and stands out.
          </p>
        </div>

        {/* Bottom Right Box */}
        <div
          className="absolute bottom-0 right-0 md:right-[5%] w-[280px] bg-gray-900/40 backdrop-blur-sm p-5 rounded-lg text-white shadow-xl border-2 border-purple-500 md:block hidden"
          style={{ boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.5)" }}
        >
          <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center font-bold text-white border border-purple-500">
            4
          </div>
          <h3 className="font-bold mb-2 text-lg">Activate with Precision</h3>
          <p className="text-sm">
            We optimize, learn, and amplify what works — turning insights into
            lasting impact.
          </p>
        </div>

        {/* Mobile version - stacked cards */}
        <div className="md:hidden space-y-4 mt-8">
          <div
            className="bg-gray-900/40 backdrop-blur-sm p-5 rounded-lg text-white shadow-xl border-2 border-purple-500 relative"
            style={{ boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.5)" }}
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center font-bold text-white border border-purple-500">
              1
            </div>
            <h3 className="font-bold mb-2 text-lg">Observe The Landscape</h3>
            <p className="text-sm">
              We zoom out to see the big picture, mapping trends, signals, and
              market niches with clarity.
            </p>
          </div>

          <div
            className="bg-gray-900/40 backdrop-blur-sm p-5 rounded-lg text-white shadow-xl border-2 border-purple-500 relative"
            style={{ boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.5)" }}
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center font-bold text-white border border-purple-500">
              2
            </div>
            <h3 className="font-bold mb-2 text-lg">Frame The Approach</h3>
            <p className="text-sm">
              We define the sharpest angle — positioning, messaging, and
              strategy — with intent and insight.
            </p>
          </div>

          <div
            className="bg-gray-900/40 backdrop-blur-sm p-5 rounded-lg text-white shadow-xl border-2 border-purple-500 relative"
            style={{ boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.5)" }}
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center font-bold text-white border border-purple-500">
              3
            </div>
            <h3 className="font-bold mb-2 text-lg">Refine and Amplify</h3>
            <p className="text-sm">
              We bring the strategy to life through bold, audience-centric
              creative that resonates and stands out.
            </p>
          </div>

          <div
            className="bg-gray-900/40 backdrop-blur-sm p-5 rounded-lg text-white shadow-xl border-2 border-purple-500 relative"
            style={{ boxShadow: "0 0 15px 2px rgba(168, 85, 247, 0.5)" }}
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center font-bold text-white border border-purple-500">
              4
            </div>
            <h3 className="font-bold mb-2 text-lg">Activate with Precision</h3>
            <p className="text-sm">
              We optimize, learn, and amplify what works — turning insights into
              lasting impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}