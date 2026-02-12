'use client';

import { useEffect, useState } from 'react';

export default function WhatKeepsYouStuck() {
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

        const section = document.getElementById('what-keeps-you-stuck');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const points = [
        {
            title: "The Competence Trap",
            description: "You're so good at handling everything that people just keep giving you more to handle."
        },
        {
            title: "Outdated Scripts",
            description: "You're still operating on 'be a good girl' and 'work hard' rules that don't serve the woman you are now."
        },
        {
            title: "Fear of Irrelevance",
            description: "There's a quiet terror that if you stop over-functioning, you won't matter anymore."
        },
        {
            title: "Decision Fatigue",
            description: "You make a thousand choices a day for others, leaving zero bandwidth for your own life direction."
        },
        {
            title: "Isolation in Plain Sight",
            description: "You're surrounded by people but feel completely misunderstood and unseen."
        }
    ];

    return (
        <section id="what-keeps-you-stuck" className="bg-bg-main py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Headline */}
                <h2 className={`mb-16 text-center font-playfair text-3xl font-bold text-accent-dark sm:text-4xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    What Keeps You Stuck
                </h2>

                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

                    {/* Left Column - Image */}
                    <div className={`relative hidden h-[600px] lg:block transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                        <div className="sticky top-32 overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="/images/4.png"
                                alt="Feeling stuck"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-accent-dark/10"></div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-8">
                        {points.map((point, index) => (
                            <div
                                key={index}
                                className={`flex gap-6 rounded-lg transition-all duration-700  ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="mb-2 font-playfair text-xl font-bold text-accent-dark">{point.title}</h3>
                                    <p className="font-inter text-lg text-text-primary">{point.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* Closing Quote - Mobile/Tablet only in flow, Desktop moved */}
                        <div className={`mt-12 border-l-8 border-secondary bg-highlight-bg p-8 sm:p-12 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                            <p className="font-cormorant text-2xl italic leading-relaxed text-text-primary sm:text-3xl">
                                "You're afraid of what will shift if you stop holding it all together. But you're failing to see what will happen if you don't."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
