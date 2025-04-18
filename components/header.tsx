"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Case Study", href: "#case-study" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Our Service", href: "#services" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-2 mx-4 md:mx-8 mt-4 rounded-3xl  md:rounded-full bg-black border border-gray-800" : "py-5 bg-transparent",
      )}
    >
      <div className="  px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Monocle Agency
        </Link>

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

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="rounded-full bg-gray-200 text-black hover:bg-white flex items-center gap-2"
          >
            <Phone size={16} />
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect">
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
            <Button
              variant="outline"
              className="rounded-full bg-gray-200 text-black hover:bg-white flex items-center gap-2 justify-center"
            >
              <Phone size={16} />
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
