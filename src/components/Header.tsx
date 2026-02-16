"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled || isMobileMenuOpen ? "bg-white shadow-sm" : "bg-transparent"
        }`}
    >
      {/* Main nav bar - fixed height so nothing shifts */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="relative z-50 flex-shrink-0">
          <a href="/">
            <Logo className="h-8 md:h-10 w-auto text-primary" />
          </a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/booking"
            className="rounded-full border border-accent-dark bg-accent-dark px-6 py-2.5 font-dm-sans text-sm font-bold uppercase tracking-wider text-white hover:bg-primary hover:text-white cursor-pointer transition-colors duration-500"
          >
            Book a Call
          </a>

          <a
            href="/quiz"
            className="rounded-full bg-secondary px-6 py-2.5 font-dm-sans text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-cta-hover hover:shadow-lg cursor-pointer transition-colors duration-500  "
          >
            Take Quiz
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 p-2 text-accent-dark cursor-pointer md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown - sits right below the nav bar, not full screen */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 pb-6 pt-4 shadow-md md:hidden">
          <div className="flex flex-col items-center gap-4">
            <a
              href="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full max-w-xs rounded-full border-2 border-accent-dark bg-accent-dark py-3.5 text-center font-dm-sans text-base font-bold uppercase tracking-wider text-white"
            >
              Book a Call
            </a>

            <a
              href="/quiz"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full max-w-xs rounded-full bg-secondary py-3.5 text-center font-dm-sans text-base font-bold uppercase tracking-wider text-white shadow-lg"
            >
              Take Quiz
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
