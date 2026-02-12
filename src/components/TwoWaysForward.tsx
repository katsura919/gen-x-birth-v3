'use client';

export default function TwoWaysForward() {
    return (
        <section className="bg-bg-main py-24 sm:py-32">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
            
                <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary shadow-2xl lg:flex lg:items-center lg:gap-x-20">

                    {/* Content - Left Side */}
                    <div className="px-6 py-12 sm:px-12 md:pt-16 lg:w-[55%] lg:pl-20 lg:pr-8 lg:py-28 relative z-10">
                        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl font-playfair leading-[1.15]">
                                <span className="text-white block mb-2">Ready to Transform Your</span>
                                <span className="text-white/90">Leadership Journey?</span>
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-white/90 font-inter max-w-xl mx-auto lg:mx-0">
                                It's time to take the next step in your professional growth.
                                You're not alone—Gen X Rebirth has helped hundreds of professionals like you step into leadership with confidence and clarity.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href="#"
                                    className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#0F5A5C] shadow-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-dm-sans uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-xl"
                                >
                                    Take Free Quiz
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image - Right Side */}
                    <div className="relative h-64 lg:h-full lg:w-[45%] lg:py-12 lg:pr-12 md:py-8 md:pr-8">
                        <img
                            className="h-full w-full object-cover object-center rounded-[2rem] shadow-xl"
                            src="/images/6.png"
                            alt="Transformation success"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
