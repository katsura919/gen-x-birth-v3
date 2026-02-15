import Link from "next/link";
import { Logo } from "./Logo";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary pt-20 pb-12 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6 lg:col-span-2">
                        <Link href="/" className="inline-block">
                            <Logo className="h-10 w-auto text-white" />
                        </Link>
                        <p className="font-inter text-white/80 leading-relaxed">
                            Gen X Rebirth is what happens when a woman stops surviving and starts choosing.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:hello@genxrebirth.com" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h3 className="font-playfair text-xl font-bold mb-6 "><span className="text-white">Explore</span></h3>
                        <ul className="space-y-4 font-inter text-white/80">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/quiz" className="hover:text-white transition-colors">Take the Quiz</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Legal */}
                    <div>
                        <h3 className="font-playfair text-xl font-bold mb-6"><span className="text-white">Legal</span></h3>
                        <ul className="space-y-4 font-inter text-white/80">
                            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>


                </div>

                {/* Divider */}
                <div className="h-px w-full bg-white/10 mb-8"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="font-inter text-sm text-white/60">
                        &copy; {new Date().getFullYear()} Gen X Rebirth. All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
}
