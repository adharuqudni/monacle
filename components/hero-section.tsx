'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import TiltedCard from './ui/tilt-card';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Cek apakah ukuran layar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px adalah batas md di Tailwind
    };

    checkMobile(); // Cek saat mount
    window.addEventListener('resize', checkMobile); // Cek saat resize

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Setup canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.src = '/images/bg/hero.png';

    image.onload = () => {
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      return () => window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Foreground Content */}
      <div className="container justify-items-center px-4 relative z-10">
        <TiltedCard
          imageSrc="/images/Hero/hero_preview.png"
          altText="LOGO"
          containerHeight={isMobile ? '70vh' : '50vh'}
          containerWidth={isMobile ? '90vw' : '50vw'}
          imageHeight={isMobile ? '70vh' : '50vh'}
          imageWidth={isMobile ? '90vw' : '50vw'}
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
