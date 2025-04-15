'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="how-it-works"
      className="section-padding bg-black"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 ">
          <span className="tag mb-4">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold my-4">
            How We Make It Happen
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A simple, transparent process designed to help your brand grow
            efficiently.
          </p>
        </div>
        <div className="hidden md:block  absolute top-32 -left-4 w-72 h-72 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-30 blur-2xl"></div>

        <img
          src={'/how-it-works.png?height=30&width=100'}
          alt={`How it Works`}
        />
        <div className="hidden md:block absolute -bottom-16 -right-4 w-72 h-72 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full opacity-30 blur-2xl"></div>
      </div>
    </section>
  );
}
