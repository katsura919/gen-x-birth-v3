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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white py-4 shadow-sm backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="relative z-50 flex-shrink-0">
          <a href="/">
            <Logo
              className={`h-10 w-auto text-accent-dark transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"}`}
            />
          </a>
        </div>

        {/* Desktop Navigation / CTAs */}
        <div className="hidden items-center gap-4 sm:flex">
          <button className="rounded-full border border-accent-dark px-6 py-2.5 font-dm-sans text-sm font-bold uppercase tracking-wider transition-all bg-accent-dark text-white hover:bg-white hover:text-accent-dark cursor-pointer">
            <a href="/booking">Book a Call</a>
          </button>

          <button className="rounded-full bg-secondary px-6 py-2.5 font-dm-sans text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-cta-hover hover:shadow-lg cursor-pointer">
            <a href="/quiz">Take Quiz</a>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="relative z-50 sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-accent-dark cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-8 w-8"
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
                className="h-8 w-8"
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
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-start pt-24 pb-10 bg-white transition-all duration-300 sm:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none "
        }`}
      >
        <div className="flex w-full  flex-col items-center space-y-8 px-6 shadow-sm pb-5 bg-white">
          <button className="w-full max-w-xs rounded-full border-2 border-accent-dark py-4 font-dm-sans text-base font-bold uppercase tracking-wider  transition-all bg-accent-dark text-white ">
            <a href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
              Book a Call
            </a>
          </button>

          <button className="w-full max-w-xs rounded-full bg-secondary py-4 font-dm-sans text-base font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-cta-hover hover:shadow-xl hover:-translate-y-1">
            <a href="/quiz" onClick={() => setIsMobileMenuOpen(false)}>
              Take Quiz
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}
