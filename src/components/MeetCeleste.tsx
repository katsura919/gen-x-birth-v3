"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function MeetCeleste() {
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

        const section = document.getElementById("meet-celeste");
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section
            id="meet-celeste"
            className="bg-accent-dark py-20 lg:py-32 relative overflow-hidden"
        >
            {/* Decorative Background Mesh */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />


            <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
                {/* Section Header */}
                <div className="mb-20 text-center">
                     <h2 className="font-playfair text-4xl font-bold italic text-accent-dark sm:text-5xl md:text-6xl lg:text-7xl">
                        Meet Celeste
                    </h2>
                    <p className="font-inter text-xl text-text-secondary max-w-3xl mx-auto italic">
                        Guidance for Women Entering Midlife with Intention
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

                    {/* Left Column: Image */}
                    <div className={`relative h-full min-h-[400px] lg:min-h-auto overflow-hidden rounded-2xl shadow-lg transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <Image
                            src="/images/meet-celeste.jpeg"
                            alt="Celeste Angelic London"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Middle Column: Philosophy */}
                    <div className={`flex flex-col gap-6 transition-all duration-1000 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

                        {/* Who I Help */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow duration-300 flex-1">
                            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">Who I help</h3>
                            <p className="font-inter text-lg text-text-secondary leading-relaxed">
                                Gen X women navigating midlife transitions.
                            </p>
                        </div>

                        {/* What I Believe */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 hover:shadow-md transition-shadow duration-300 flex-1">
                            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">What I believe</h3>
                            <div className="font-inter text-lg text-text-secondary leading-relaxed space-y-4">
                                <p>You don’t need fixing.</p>
                                <p>You need space, clarity, and authorship.</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Work With Celeste */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="h-full bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden group flex flex-col justify-between">

                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-dark/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl group-hover:scale-110 transition-transform duration-700" />

                            <div className="relative z-10">
                                <h3 className="font-playfair text-3xl font-bold mb-2">
                                    <span className="text-accent-dark">Work With Celeste</span></h3>
                                <p className="font-inter text-base text-white/90 mb-6 italic">Move from Survival to Self-Led Living.</p>

                                <div className="space-y-4 mb-6">
                                    <p className="font-inter text-base font-medium">Private 1:1 bi-weekly guidance for Gen X women ready to:</p>
                                    <ul className="space-y-2 font-inter text-base">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 p-1 bg-white/20 rounded-full"></span>
                                            Choose themselves
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 p-1 bg-white/20 rounded-full"></span>
                                            Reclaim their energy
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-1.5 p-1 bg-white/20 rounded-full"></span>
                                            Author their next chapter
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="relative z-10 space-y-6">
                                <p className="font-inter text-sm text-white/80">
                                    Six-month and one-year containers available.<br />
                                    Application required.
                                </p>

                                <Link
                                    href="/booking"
                                    className="inline-flex w-full items-center justify-center gap-2 bg-white text-primary font-dm-sans font-bold py-3 px-6 rounded-full hover:bg-bg-light transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                                >
                                    Apply for Guidance
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
