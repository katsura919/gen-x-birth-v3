"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const ctx = gsap.context(() => {
      // Only enable pinning on large screens where grid is 2 columns
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
          ScrollTrigger.create({
            trigger: imageRef.current,
            start: "top top+=128", // Offset for header/breathing room
            endTrigger: containerRef.current, // Pin until container ends
            end: "bottom bottom",
            pin: true,
            pinSpacing: false, // In a grid, we often don't want spacing if we want it to float
            scrub: true,
            // markers: false
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-highlight-bg py-20 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-playfair text-4xl font-bold italic text-accent-dark sm:text-5xl md:text-6xl lg:text-7xl">
            About Me
          </h2>
          <p className="mt-4 font-inter text-xl font-medium text-text-secondary">
            A Note From Me to You
          </p>
        </div>

        {/* Two Column Layout */}
        <div ref={containerRef} className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT COLUMN - Image */}
          <div ref={imageRef} className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              className={`relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
            >
              <Image
                src="/images/about-me.jpeg"
                alt="Celeste Angelic London"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Content */}
          <div
            ref={textRef}
            className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            <div className="space-y-6 font-inter text-lg leading-relaxed text-text-secondary">
              <p className="text-2xl font-semibold text-text-primary">
                I'm Celeste Angelic London.
              </p>
              <p>
                For most of my life, I was the strong one—the woman who handled
                what needed to be handled, figured things out, and kept life
                moving forward. I raised my daughters on my own, without a
                village, and learned early how to lead by taking on more than
                was ever meant to be carried by one person.
              </p>
              <p>
                That strength built a life. It also asked me to put myself last.
              </p>
              <p>
                By midlife, my body and my clarity asked a direct question:
              </p>
              <p className="italic text-text-primary pl-4 border-l-2 border-accent-dark">
                How do you want to live the years ahead?
              </p>
              <p>
                I knew this chapter wasn't about endurance. It was about
                authorship.
              </p>
              <p className="font-semibold text-text-primary">
                This work grew from that decision.
              </p>
              <p>
                I don't believe Gen X women need fixing, motivation, or another
                role to perform. We've already proven our capability. What we
                need is space to reclaim what was set aside—our energy, our
                boundaries, and our authority over our own lives.
              </p>
              <div>
                <p className="font-semibold text-text-primary mb-2">
                  My work is about self-led living in midlife.
                </p>
                <div className="space-y-1">
                  <p>About listening to your body without overriding it.</p>
                  <p>About choosing yourself without apology.</p>
                  <p>About owning your life—fully and consciously.</p>
                </div>
              </div>
              <p className="font-semibold text-text-primary">
                If you know midlife isn't the end, but the moment you take the
                lead, you're in the right place.
              </p>
              <p>I'm here with you.</p>
              <p className="mt-8 font-playfair text-2xl italic text-text-primary">
                — Celeste Angelic London
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
