"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Better
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/mortgage-calculator" className="text-sm font-medium hover:text-primary">
              Mortgage Calculator
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
            <Button asChild>
              <Link href="/start">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/mortgage-calculator" className="text-sm font-medium hover:text-primary">
                Mortgage Calculator
              </Link>
              <Link href="/about-us" className="text-sm font-medium hover:text-primary">
                About Us
              </Link>
              <Button asChild className="w-full">
                <Link href="/start">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

