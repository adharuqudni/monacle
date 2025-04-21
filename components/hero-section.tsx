'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import TiltedCard from './ui/tilt-card';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.src = '/images/bg/hero.png'; // Ganti dengan path gambar kamu di folder /public

    image.onload = () => {
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      };

      resizeCanvas();

      window.addEventListener('resize', resizeCanvas);

      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>

      {/* Foreground Content */}
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
