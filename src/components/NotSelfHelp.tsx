'use client';

import { useEffect, useState } from 'react';

export default function NotSelfHelp() {
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

        const section = document.getElementById('not-self-help');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const cards = [
        {
            title: "Authority",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--secondary)" className="size-6">
  <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z" clipRule="evenodd" />
</svg>

            ),
            description: "Stop looking for permission. Start trusting your own knowing again."
        },
        {
            title: "Obligation",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--secondary)" className="size-6">
                <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                </svg>

            ),
            description: "Break the chains of 'shoulds' and performative goodness."
        },
        {
            title: "Boundaries",
            icon: (
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            description: "Not walls to keep people out, but gates to protect your peace."
        },
        {
            title: "Structure",
            icon: (
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
            ),
            description: "Rebuild your life on a foundation that supports who you are now."
        }
    ];

    return (
        <section id="not-self-help" className="bg-bg-main py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Disruptive Headline */}
                <div className={`mb-20 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h2 className="font-playfair text-3xl font-bold leading-tight text-accent-dark sm:text-4xl md:text-5xl">
                        This is not <span className="text-text-secondary/60 line-through decoration-secondary decoration-2">SELF-HELP</span>.
                        <br />
                        This is not <span className="text-text-secondary/60 line-through decoration-secondary decoration-2">MOTIVATION</span>.
                    </h2>
                    <p className="font-inter mt-6 text-lg text-text-primary">
                        We're not here to fix you faster. We're here to dismantle what isn't yours.
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col items-start rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${200 + (index * 100)}ms` }}
                        >
                            <div className="mb-6 rounded-full bg-highlight-bg p-4 transition-transform duration-300 group-hover:scale-110">
                                {card.icon}
                            </div>
                            <h3 className="font-playfair mb-3 text-2xl font-bold text-accent-dark">{card.title}</h3>
                            <p className="font-inter text-lg leading-relaxed text-text-primary">{card.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
