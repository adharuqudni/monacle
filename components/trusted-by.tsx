'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

export function TrustedBy() {
  // Create multiple logos for the infinite carousel
  const logos = [
    '/images/Logo_Client/AHM.png?height=30&width=100',
    '/images/Logo_Client/Aiqqon.png?height=30&width=100',
    '/images/Logo_Client/Bank BRI.png?height=30&width=100',
    '/images/Logo_Client/Binance.png?height=30&width=100',
    '/images/Logo_Client/Countrywood.png?height=30&width=100',
    '/images/Logo_Client/Eggslap.png?height=30&width=100',
    '/images/Logo_Client/Generali.png?height=30&width=100',
    '/images/Logo_Client/Helloilmare.png?height=30&width=100',
    '/images/Logo_Client/Pegadaian.png?height=30&width=100',
    '/images/Logo_Client/PP.png?height=30&width=100',
    '/images/Logo_Client/RHB.png?height=30&width=100',
    '/images/Logo_Client/Telkom.png?height=30&width=100',
    '/images/Logo_Client/Transvision.png?height=30&width=100',
    '/images/Logo_Client/Zeta Garde.png?height=30&width=100',
  ];

  // Duplicate the logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      // Calculate the width of the carousel
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <section className="py-12 bg-black backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h3
          className="text-center text-sm uppercase tracking-wider text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          TRUSTED BY LEADING COMPANIES
        </motion.h3>

        <div className="overflow-hidden">
          <Marquee>
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <img
                  src={logo || '/placeholder.svg'}
                  alt={`Company logo ${index + 1}`}
                  className="h-8 opacity-50 grayscale"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
