'use client';

import { useEffect, useState } from 'react';

export default function WhatsHappening() {
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

        const section = document.getElementById('whats-happening');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const checklistItems = [
        "You regulate everyone else's emotions while swallowing your own.",
        "You're the 'strong one' so nobody asks if you need support.",
        "You've achieved the success you were supposed to want, but it feels empty.",
        "You're running on cortisol, caffeine, and a sense of obligation."
    ];

    return (
        <section id="whats-happening" className="overflow-hidden bg-highlight-bg py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Left Column - Content */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                        {/* Opening Lines - Stepped List */}
                        <div className="mb-12 space-y-4">
                                <h2 className="font-playfair text-4xl font-bold italic  sm:text-5xl md:text-6xl lg:text-7xl">
                                    <span className="text-primary">You're not lazy.</span>
                    
                                <span className="text-primary text-4xl">    You're not broken.</span>
                            </h2>
                            
                     
                        </div>

                        {/* Checklist Cards */}
                        <div className="space-y-6">
                            {checklistItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start transition-all duration-700  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${200 + (index * 100)}ms` }}
                                >
                                    <div className="mt-1 flex-none">
                                        <div className="flex h-5 w-5 items-center justify-center  text-primary mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="font-inter text-lg text-text-primary">{item}</p>
                                </div>
                            ))}
                        </div>

                        {/* Closing Statement */}
                        <div className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <p className="font-playfair italic text-3xl font-bold leading-tight text-accent-dark sm:text-4xl">
                                Nothing is wrong with you.
                                <br />
                                <span className="text-secondary">Your system is just outdated.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className={`relative h-[600px] w-full transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-accent-dark/5">
                            {/* Placeholder for Image 1 */}
                            <img
                                src="/images/1.png"
                                alt="Woman contemplating"
                                className="h-full w-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/30 to-transparent"></div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-secondary/20 blur-2xl"></div>
                        <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-primary/20 blur-2xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
