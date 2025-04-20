'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import TiltedCard from './ui/tilt-card';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
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
          console.error('Error in animation:', error);
        }
      };

      const handleResize = () => {
        try {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        } catch (error) {
          console.error('Error in resize handler:', error);
        }
      };

      createParticles();
      animateParticles();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } catch (error) {
      console.error('Error in canvas setup:', error);
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>

      <div className="container justify-items-center px-4 relative z-10">
        <TiltedCard
          imageSrc="/hero.png"
          altText="LOGO"
          captionText="LOGO BCA"
          containerHeight="50vh"
          containerWidth="50vw"
          imageHeight="50vh"
          imageWidth="50vw"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
        />
      </div>
    </section>
  );
}
