"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    try {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
      }[] = [];

      const createParticles = () => {
        for (let i = 0; i < 100; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2,
          });
        }
      };

      const animateParticles = () => {
        try {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x > canvas.width) p.x = 0;
            if (p.x < 0) p.x = canvas.width;
            if (p.y > canvas.height) p.y = 0;
            if (p.y < 0) p.y = canvas.height;
          }

          requestAnimationFrame(animateParticles);
        } catch (error) {
          console.error("Error in animation:", error);
        }
      };

      const handleResize = () => {
        try {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        } catch (error) {
          console.error("Error in resize handler:", error);
        }
      };

      createParticles();
      animateParticles();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    } catch (error) {
      console.error("Error in canvas setup:", error);
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto neon-card p-8 md:p-12 bg-black/50 backdrop-blur-sm transform rotate-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Seeing Through <span className="text-secondary">the Noise</span>
          </motion.h1>
          <motion.p
            className="text-gray-300 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Clarity isn’t found — it’s crafted. We help brands focus, zoom in on
            what matters, and cut through the clutter of a crowded digital
            world.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-neon-strong transition-shadow duration-300">
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
