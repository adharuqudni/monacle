"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rocketY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-black via-gray-800 to-black relative overflow-hidden"
    >
      <div className="bg-hero bg-cover bg-center bg-blend-overlay  bg-black/60 mx-10 md:px-[202px] md:py-[80px]">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="  px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-left">
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Clarity in Every Digital Move.
              </motion.h2>
              <motion.p
                className="text-gray-300 mb-8 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Let's create a digital strategy that drives real results for
                your business.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-[2px] justify-self-center md:justify-self-start rounded-full bg-gradient-to-r from-neon-blue to-neon-purple w-[fit-content]">
                  <a href="https://wa.me/+62811842484">
                  <Button className="bg-black rounded-full text-white px-8 py-6 text-lg hover:bg-gradient-to-r from-neon-blue to-neon-purple transition-shadow duration-300">
                  Make Your Next Step Clear
                </Button>
                  </a>
                  
                </div>
              </motion.div>
            </div>
          </div>

          {/* Rocket illustration */}
          <motion.div
            className="static  justify-self-center self-center mt-12 w-32 md:w-48"
            style={{ y: rocketY }}
          >
            <svg
              width="140"
              className="w-full h-auto text-neon-blue animate-float"
              height="141"
              viewBox="0 0 140 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M139.2 6.14378C139.198 6.13445 139.198 6.12497 139.2 6.11565C138.935 4.95726 138.353 3.89577 137.517 3.05095C136.682 2.20612 135.627 1.61158 134.472 1.3344C125.159 -0.937475 110.509 1.4844 94.2747 7.9844C77.9122 14.5469 62.5809 24.2344 52.2184 34.6157C48.8972 37.9197 45.8115 41.4523 42.984 45.1875C36.0059 44.875 29.859 45.8688 24.6809 48.1282C6.63716 56.0688 1.48403 76.3906 0.112158 84.7344C-0.0863567 85.9199 -0.00862792 87.1353 0.339295 88.2859C0.687219 89.4365 1.29595 90.4913 2.11812 91.3682C2.94029 92.2451 3.95371 92.9204 5.07953 93.3417C6.20534 93.7629 7.41318 93.9187 8.60903 93.7969H8.64966L28.7497 91.6031C28.7747 91.8594 28.8028 92.0938 28.8247 92.3094C29.0828 94.7587 30.1751 97.0447 31.9184 98.7844L41.7278 108.6C43.4648 110.346 45.7505 111.439 48.1997 111.697L48.8715 111.769L46.684 131.844V131.884C46.5722 132.966 46.6873 134.058 47.0218 135.092C47.3563 136.127 47.903 137.08 48.6268 137.89C49.3507 138.701 50.2357 139.352 51.2254 139.802C52.2152 140.251 53.2878 140.489 54.3747 140.5C54.8092 140.501 55.2429 140.465 55.6715 140.394C64.0622 139.044 84.3747 133.953 92.2934 115.813C94.534 110.669 95.5247 104.547 95.2465 97.5813C98.9987 94.7601 102.544 91.6741 105.856 88.3469C116.303 77.9531 126.022 62.7469 132.515 46.6219C138.981 30.5719 141.415 15.8125 139.2 6.14378ZM105.743 60.7938C103.176 63.3642 99.9033 65.1152 96.3402 65.8254C92.7771 66.5356 89.0834 66.173 85.7264 64.7835C82.3694 63.3941 79.4999 61.0401 77.481 58.0195C75.4622 54.9988 74.3846 51.4473 74.3846 47.8141C74.3846 44.1809 75.4622 40.6293 77.481 37.6087C79.4999 34.5881 82.3694 32.2341 85.7264 30.8446C89.0834 29.4551 92.7771 29.0926 96.3402 29.8028C99.9033 30.5129 103.176 32.264 105.743 34.8344C107.464 36.5296 108.831 38.5501 109.764 40.7785C110.697 43.0068 111.177 45.3984 111.177 47.8141C111.177 50.2298 110.697 52.6214 109.764 54.8497C108.831 57.078 107.464 59.0986 105.743 60.7938Z"
                fill="url(#paint0_linear_4058_2546)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4058_2546"
                  x1="0.00488281"
                  y1="70.5004"
                  x2="140"
                  y2="70.5004"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#15B6FC" />
                  <stop offset="1" stopColor="#9D7BEA" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Background glow effect */}
    </section>
  );
}
