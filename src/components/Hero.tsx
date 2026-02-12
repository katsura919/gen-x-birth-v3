'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-[90vh] w-full overflow-hidden bg-bg-main">

            {/* Main Container - Two Column Layout */}
            <div className="relative mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:gap-16 lg:px-12">

                {/* LEFT COLUMN - Text Content */}
                <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>

                    {/* Tagline */}
                    <p className="font-inter text-sm font-medium tracking-wide text-text-secondary">
                        Real growth, real results
                    </p>

                    {/* Main Headline */}
                    <h1 className="font-playfair text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-5xl xl:text-6xl">
                        Own Your Life. Reclaim Your Authority. Begin Again-On Your Terms.
                    </h1>

                    {/* Description */}
                    <p className="font-inter max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
                        Gen X Rebirth is for women who are done living in reaction mode and ready to rebuild a life that actually fits who they are now.
                    </p>

                    {/* CTA Buttons */}
                    <div className="space-y-3 pt-4">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            {/* Primary CTA - Take the Free Quiz */}
                            <button className="group relative overflow-hidden rounded-full bg-secondary px-8 py-4 font-dm-sans text-base font-medium uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl sm:px-10 cursor-pointer">
                                <span className="relative z-10">Take the Free Quiz</span>
                            </button>

                            {/* Secondary CTA - Book a Call */}
                            <button className="rounded-full border-2 border-accent-dark bg-accent-dark px-8 py-4 font-dm-sans text-base font-medium uppercase tracking-wider text-white transition-all duration-300 hover:text-white sm:px-10 cursor-pointer">
                                Book a Call
                            </button>
                        </div>


                    </div>
                </div>

                {/* RIGHT COLUMN - Hero Image with Decorative Elements */}
                <div className={`relative transition-all duration-1000 delay-300 hidden lg:block ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>

                    {/* Circular Background Shape */}
                    <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent-dark opacity-20 blur-3xl"></div>

                    {/* Hero Image Container */}
                    <div className="relative z-10">
                        <div className="relative aspect-square overflow-hidden rounded-full">
                            <Image
                                src="/hero-image.png"
                                alt="Professional woman in leadership"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Floating Badge 1 - Lead with confidence */}
                    <div className="absolute left-0 top-20 z-20 rounded-full bg-white px-5 py-3 shadow-lg">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-accent-dark flex items-center justify-center">
                                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <span className="font-dm-sans text-sm font-medium text-text-primary">Lead with confidence</span>
                        </div>
                    </div>

                    {/* Floating Badge 2 - Results driven coaching */}
                    <div className="absolute bottom-20 right-0 z-20 rounded-full bg-white px-5 py-3 shadow-lg">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-white border-2 border-accent-dark flex items-center justify-center">
                                <svg className="h-4 w-4 text-accent-dark" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span className="font-dm-sans text-sm font-medium text-text-primary">Results driven coaching</span>
                        </div>
                    </div>

                    {/* Floating Icon Badge - Center left */}
                    <div className="absolute left-10 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-4 shadow-lg">
                        <svg className="h-6 w-6 text-accent-dark" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                    </div>
                </div>

            </div>
        </section>
    );
}
