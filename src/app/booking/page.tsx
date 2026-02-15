"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BookingPage() {
    const [iframeKey] = useState(() => Date.now());
    return (
        <main className="min-h-screen bg-main-bg font-sans text-[#3a3a3a]">
            <Header />

            {/* Hero / Title Section */}
            <div className="pt-40  px-6 lg:px-8 max-w-5xl mx-auto text-center">

                <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
                    Book Your Free Consultation
                </h1>
                <p className="text-lg md:text-xl text-[#6b6b6b] max-w-2xl mx-auto mb-4 animate-fade-in delay-200">
                    Let's talk about your goals and how we can help you achieve them.
                </p>
            </div>

            {/* Calendar Embed Section */}
            <div className="px-5 max-w-6xl mx-auto pb-20">
                <div className="bg-none ">
                    {/* GHL Calendar Embed */}
                    <div className="relative min-h-[650px]">
                        <iframe
                            key={iframeKey}
                            src="https://links.talentmucho.com/widget/booking/UfKZltyTNL8Nc891wMrr"
                            className="w-full min-h-[1450px] lg:min-h-[900px] border-none overflow-hidden"
                            scrolling="no"
                            id={`UfKZltyTNL8Nc891wMrr_${iframeKey}`}
                            title="Book an Appointment"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
