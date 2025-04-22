"use client";

import Image from 'next/image';
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Case Study", href: "#case-study" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Our Service", href: "#services" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-2 mx-4 md:mx-8 mt-4 rounded-3xl md:rounded-full bg-black border border-gray-800"
          : "py-5 bg-transparent"
      )}
    >
      <div className="px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          {/* Fixed logo size with controlled dimensions */}
          <Image
            src="/images/Logo Monocle/Logo Monocle_White.png"
            alt="Monocle Agency Logo"
            width={120}
            height={32}
            className="object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button (Desktop Version) */}
        <div className="hidden md:block">
          <a href="https://wa.me/+62817842484">
            <Button
              variant="outline"
              className="rounded-full bg-gray-200 text-black hover:bg-white flex items-center gap-2"
            >
              <Phone size={16} />
              Contact Us
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm border-t border-gray-800 mt-2">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="https://wa.me/+62895801102898">
              <Button
                variant="outline"
                className="rounded-full bg-gray-200 text-black hover:bg-white flex items-center gap-2 justify-center"
              >
                <Phone size={16} />
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}