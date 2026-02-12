'use client';

import { useEffect, useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function WhatChanges() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('what-changes');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const benefits = [
        { icon: "🫁", text: "Your body finally calms down" },
        { icon: "✨", text: "Decisions get cleaner and easier" },
        { icon: "🚫", text: "\"No\" needs no explaining" },
        { icon: "🏠", text: "Home starts feeling like a refuge again" }
    ];

    return (
        <section id="what-changes" className="relative overflow-hidden bg-bg-main py-24 sm:py-32">


            {/* Background Image Accent */}
            <div className="absolute bottom-0 right-0 h-full w-1/3 opacity-5 pointer-events-none">
                <img src="/images/7.png" alt="Peaceful change" className="h-full w-full object-cover mask-image-linear-to-l" style={{ maskImage: 'linear-gradient(to left, black, transparent)' }} />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* Hero-style Quote */}
                <div className={`mb-24 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h2 className="font-playfair text-4xl font-bold italic text-accent-dark sm:text-5xl md:text-6xl lg:text-7xl">
                        Life doesn't become louder.
                        <br />
                        <span className="text-primary">It becomes quieter.</span>
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
                    {/* Gain Card */}
                    <div className={`relative overflow-hidden rounded-3xl bg-white/60 p-8 shadow-sm ring-1 ring-indigo-900/5 backdrop-blur-sm transition-all duration-1000 delay-300 md:p-10 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/10 blur-xl"></div>
                        <h3 className="mb-8 font-dm-sans text-lg font-bold uppercase tracking-[0.2em] text-primary">You Notice</h3>
                        <ul className="space-y-6">
                            {benefits.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        <CheckCircleIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                                    </div>
                                    <p className="font-playfair text-xl text-text-primary">{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Release Card */}
                    <div className={`relative overflow-hidden rounded-3xl bg-white/40 p-8 shadow-sm ring-1 ring-indigo-900/5 backdrop-blur-sm transition-all duration-1000 delay-500 md:p-10 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-rose-500/5 blur-xl"></div>
                        <h3 className="mb-8 font-dm-sans text-lg font-bold uppercase tracking-[0.2em] text-text-secondary">You Stop</h3>
                        <ul className="space-y-6">
                            {[
                                "Explaining yourself.",
                                "Apologizing for taking up space.",
                                "Managing other adults' feelings.",
                                "Waiting for permission."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        <XCircleIcon className="h-6 w-6 text-text-secondary/60" aria-hidden="true" />
                                    </div>
                                    <p className="font-inter text-lg text-text-primary">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
