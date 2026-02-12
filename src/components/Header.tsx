'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white py-4 shadow-sm backdrop-blur-md'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <Logo className={`h-10 w-auto text-accent-dark transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`} />
                </div>

                {/* Desktop Navigation / CTAs */}
                <div className="hidden items-center gap-4 sm:flex">
                    <button className="rounded-full border border-accent-dark px-6 py-2.5 font-dm-sans text-sm font-bold uppercase tracking-wider text-accent-dark transition-all hover:bg-accent-dark hover:text-white">
                        <a href="https://calendly.com/genxrebirth/new-meeting?back=1" target='_blank'>Book a Call</a>
                    </button>

                    <button className="rounded-full bg-secondary px-6 py-2.5 font-dm-sans text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-cta-hover hover:shadow-lg">
                        Take Quiz
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-accent-dark p-2"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white sm:hidden">
                    <div className="flex flex-col space-y-4 p-6">
                        <a
                            href="https://calendly.com/genxrebirth/new-meeting?back=1"
                            target='_blank'
                            className="text-center font-dm-sans text-sm font-bold uppercase tracking-wider text-accent-dark py-3 border border-accent-dark rounded-full hover:bg-accent-dark hover:text-white transition-colors"
                        >
                            Book a Call
                        </a>
                        <button className="w-full rounded-full bg-secondary py-3 font-dm-sans text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-cta-hover">
                            Take Quiz
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
