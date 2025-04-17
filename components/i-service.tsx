export function Service() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        {/* Gradient Label */}
        <div className="tag mb-4 px-4 py-1 rounded-full text-sm font-medium text-white bg-white/10 w-fit mx-auto">
          Our Services
        </div>

        <div className="mb-10" />

        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
          Smart Solutions for Brands
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          We combine creative strategy, smart execution, and data-driven
          decisions to help you thrive in the digital world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Digital Campaign",
              desc: "From ideation to execution, we craft integrated campaigns that build awareness.",
              hoverText:
                "360° Digital Campaign Execution and Performance Marketing to drive measurable business outcomes.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              ),
            },
            {
              title: "Social Activation",
              desc: "We spark conversations and build community through social-first ideas.",
              hoverText:
                "Comprehensive Social Media Management and KOL/Influencer Strategy to build authentic engagement and brand presence.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
              ),
            },
            {
              title: "Tech & Development",
              desc: "We design and develop intuitive, high-performing websites and digital products.",
              hoverText:
                "Tailored Website, App, and Platform Development to support your brand's digital infrastructure and scalability.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
                  <line x1="2" x2="22" y1="20" y2="20" />
                </svg>
              ),
            },
            {
              title: "Performance",
              desc: "We analyze every step of your digital journey to deliver measurable results that grow your business.",
              hoverText:
                "Real-time Sales Activation on Marketplaces and Sociocommerce Platforms (e.g., TikTok Shop, Shopee Live), designed to boost conversion through engaging live experiences.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-[1px] rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"
            >
              <div className="relative bg-[#0a1525] p-6 rounded-lg text-left h-full overflow-hidden group">
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <p className="text-white text-sm font-semibold text-center px-4">
                    {item.hoverText}
                  </p>
                </div>

                {/* Main content */}
                <div className="relative z-0">
                  <div className="bg-[#0f2a4a] h-12 w-12 flex items-center justify-center rounded-md mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
