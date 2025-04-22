"use client";

import { motion } from "framer-motion";

export function MissionDesign() {
  return (
    <section
      id="mission"
      className="h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url("/images/bg/2.png")' }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Konten utama di atas overlay */}
      <div className="relative z-10 container mx-auto px-4 flex items-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Teks di kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="tag mb-4">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold my-6">
              We don’t add noise we sharpen signal.
            </h2>
            <p className="text-gray-300 mb-6">
              Monocle exists to empower brands with focused, high-performing
              digital marketing. We blend precision with creativity, crafting
              bold ideas that cut through and drive what matters. Not just
              partners we’re your second set of eyes in the digital chaos.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* <a
                href="#"
                className="inline-flex items-center text-secondary font-medium"
              >
                Learn more about our team
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a> */}
            </motion.div>
          </motion.div>

          {/* Gambar di kanan */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-[600px] h-auto overflow-hidden rounded-lg shadow-xl">
              <img
                src="/images/Elements/Mission.png"
                alt="Mission visual"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-30 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
