"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Aurora from "@/components/Aurora";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-bg-main">

      {/* Main Container - Two Column Layout */}
      <div className="relative z-10 mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 mt-20 pb-12 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-12">


        {/* LEFT COLUMN - Text Content */}
        <div
          className={`space-y-6 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
        >
          {/* Tagline */}
          <p className="font-inter text-xl font-medium tracking-wide text-text-secondary">
            Real growth, real results
          </p>

          {/* Main Headline */}
          <h1 className="font-playfair text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-5xl xl:text-6xl">
            Own Your Life. Reclaim Your Authority. Begin Again-On Your Terms.
          </h1>

          {/* Description */}
          <p className="font-inter max-w-xl text-lg leading-relaxed text-text-secondary sm:text-2xl">
            Gen X Rebirth is for women who are done living in reaction mode and
            ready to rebuild a life that actually fits who they are now.
          </p>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Primary CTA - Take the Free Quiz */}
              <button className="group relative overflow-hidden rounded-full bg-secondary px-8 py-4 font-dm-sans text-base font-medium uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:shadow-xl sm:px-10 cursor-pointer">
                <a href="/quiz">Take the Free Quiz</a>
              </button>

              {/* Secondary CTA - Book a Call */}
              <button className="rounded-full border-2 border-accent-dark bg-accent-dark px-8 py-4 font-dm-sans text-base font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary hover:text-white sm:px-10 cursor-pointer">
                <a
                  href="https://calendly.com/genxrebirth/new-meeting?back=1"
                  target="_blank"
                >
                  Book a Call
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Hero Image with Decorative Elements */}
        <div
          className={`relative order-first lg:order-none transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
        >
          {/* Circular Background Shape */}
          <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent-dark opacity-20 blur-3xl"></div>

          {/* Hero Image Container */}
          <div className="relative z-10 mx-auto max-w-sm lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-full font-bold shadow-2xl">
              <Image
                src="/hero-image.png"
                alt="Professional woman in leadership"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>






        </div>
      </div>
    </section>
  );
}
