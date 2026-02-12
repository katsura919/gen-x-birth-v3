'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { questions, resultsData } from '../../data/quiz.data'


export default function QuizPage() {
    const [step, setStep] = useState<'intro' | 'quiz' | 'email' | 'results'>('intro');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [email, setEmail] = useState('');
    const [calculatedResult, setCalculatedResult] = useState('A');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleOptionSelect = (value: string) => {
        setAnswers({ ...answers, [currentQuestion]: value });
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setStep('email');
        }
    };

    const calculateResult = async () => {
        setIsSubmitting(true);
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
        } catch (error) {
            console.error("Error submitting contact:", error);
        }

        const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
        Object.values(answers).forEach(val => {
            if (counts[val] !== undefined) counts[val]++;
        });

        // Find dominant letter
        let max = 0;
        let dominant = 'A';
        (['A', 'B', 'C', 'D'] as const).forEach(char => {
            if (counts[char] > max) {
                max = counts[char];
                dominant = char;
            }
        });
        setCalculatedResult(dominant);
        setStep('results');
        setIsSubmitting(false);
    };

    return (
        <main className="min-h-screen bg-bg-main pt-40 pb-12">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">

                {/* Intro Step */}
                {step === 'intro' && (
                    <div className="space-y-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h1 className="font-playfair text-4xl font-bold text-accent-dark sm:text-5xl md:text-6xl">
                            Have You Been Living for Everyone Else?
                        </h1>
                        <p className="font-dm-sans text-lg font-medium tracking-wide text-primary">
                            A Midlife Awakening Quiz for Gen X Women (1965–1980)
                        </p>
                        <hr className="mx-auto w-24 border-primary/20" />
                        <div className="mx-auto max-w-2xl space-y-4 font-inter text-lg text-text-primary/80">
                            <p>Chronic Over-Giving • Toxic Relationships • Rediscovering Your Passion</p>
                            <p>
                                Welcome, Gen X Woman. This gentle quiz is designed to help you reflect on chronic over-giving, toxic or draining
                                relationships, and reclaiming your passion and identity in midlife.
                            </p>
                            <p className="font-medium text-text-primary">
                                There are no right or wrong answers — only awareness. Midlife is not a crisis. It is a return to yourself.
                            </p>
                        </div>
                        <div className="pt-8">
                            <button
                                onClick={() => setStep('quiz')}
                                className="rounded-full bg-accent-dark px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-accent-dark/90 transition-all hover:-translate-y-1"
                            >
                                Start Quiz
                            </button>
                        </div>
                    </div>
                )}

                {/* Quiz Step */}
                {step === 'quiz' && (
                    <div className="mx-auto max-w-2xl animate-in fade-in slide-in-from-right-8 duration-500">
                        {/* Progress */}
                        <div className="mb-8">
                            <div className="flex justify-between text-sm font-medium text-text-secondary mb-2">
                                <span>Question {currentQuestion + 1} of {questions.length}</span>
                                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-secondary/10">
                                <div
                                    className="h-2 rounded-full bg-primary transition-all duration-300"
                                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Question */}
                        <div className="mb-10 min-h-[120px]">
                            <h2 className="font-playfair text-3xl font-bold leading-tight text-text-primary">
                                {questions[currentQuestion].text}
                            </h2>
                        </div>

                        {/* Options */}
                        <div className="space-y-4">
                            {questions[currentQuestion].options.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleOptionSelect(option.value)}
                                    className={`w-full rounded-xl border-2 p-6 text-left transition-all duration-200 ${answers[currentQuestion] === option.value
                                        ? 'border-primary bg-primary/5 text-accent-dark shadow-md'
                                        : 'border-transparent bg-white text-text-primary hover:border-gray-200 hover:bg-gray-50 shadow-sm'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold ${answers[currentQuestion] === option.value
                                            ? 'border-primary bg-primary text-white'
                                            : 'border-gray-300 text-gray-500'
                                            }`}>
                                            {option.value}
                                        </span>
                                        <span className="text-lg font-medium">{option.text}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="mt-10 flex justify-end">
                            <button
                                onClick={handleNext}
                                disabled={!answers[currentQuestion]}
                                className="rounded-full bg-accent-dark px-10 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-accent-dark/90 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                            </button>
                        </div>
                    </div>
                )}

                {/* Email Gate */}
                {step === 'email' && (
                    <div className="mx-auto max-w-md text-center animate-in fade-in zoom-in-95 duration-500 bg-white p-10 rounded-3xl shadow-xl">
                        <div className="mb-6 flex justify-center">
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                                </svg>

                            </div>
                        </div>
                        <h2 className="mb-4 font-playfair text-3xl font-bold text-accent-dark">
                            Your Results Are Ready
                        </h2>
                        <p className="mb-8 font-inter text-text-primary/80">
                            Enter your email to reveal your archetype and receive your personalized reflection guide.
                        </p>
                        <form onSubmit={(e) => { e.preventDefault(); calculateResult(); }} className="space-y-4">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSubmitting}
                                className="w-full rounded-lg border-gray-300 px-4 py-3 shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-full bg-accent-dark px-6 py-4 text-base font-bold text-white shadow-md hover:bg-accent-dark/90 transition-all uppercase tracking-wider disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {isSubmitting ? 'Processing...' : 'Reveal My Results'}
                            </button>
                        </form>
                        <p className="mt-4 text-xs text-gray-400">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                )}

                {/* Results */}
                {step === 'results' && (
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {/* Result Header */}
                        <div className="mb-16 text-center">
                            <p className="mb-2 font-dm-sans text-sm font-bold uppercase tracking-widest text-text-secondary">Your Quiz Results</p>
                            <h1 className="mb-4 font-playfair text-4xl font-bold text-accent-dark sm:text-5xl md:text-6xl">
                                {resultsData[calculatedResult].title}
                            </h1>
                            {resultsData[calculatedResult].subtitle && (
                                <p className="mb-8 font-dm-sans text-xl text-primary font-medium">
                                    {resultsData[calculatedResult].subtitle}
                                </p>
                            )}

                            <div className="mx-auto max-w-4xl space-y-12 text-left">

                                {/* Core Pattern */}
                                <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-indigo-50">
                                    <h3 className="mb-6 font-playfair text-2xl font-bold text-primary">Core Pattern</h3>
                                    <ul className="space-y-3">
                                        {resultsData[calculatedResult].corePattern.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-lg text-text-primary leading-relaxed">
                                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* What's Really Happening */}
                                <div className="rounded-3xl bg-indigo-50/50 p-8 shadow-sm ring-1 ring-indigo-50">
                                    <h3 className="mb-6 font-playfair text-2xl font-bold text-accent-dark">What’s Really Happening</h3>
                                    <ul className="space-y-3">
                                        {resultsData[calculatedResult].whatsHappening.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-lg text-text-primary leading-relaxed">
                                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-dark"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Hidden Cost */}
                                <div className="rounded-3xl bg-rose-50/30 p-8 shadow-sm ring-1 ring-rose-100">
                                    <h3 className="mb-6 font-playfair text-2xl font-bold text-gray-900">Hidden Cost</h3>
                                    <ul className="space-y-3">
                                        {resultsData[calculatedResult].hiddenCost.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-lg text-text-primary leading-relaxed">
                                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-400"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Rebirth */}
                                <div className="rounded-3xl bg-accent-dark p-8 md:p-10 shadow-lg text-white">
                                    <h3 className="mb-6 font-playfair text-2xl font-bold">What Rebirth Looks Like for You</h3>
                                    <ul className="space-y-4">
                                        {resultsData[calculatedResult].rebirth.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-lg text-white/90 leading-relaxed">
                                                <CheckCircleIcon className="h-6 w-6 flex-shrink-0 text-primary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* CTA Footer */}
                        <div className="rounded-3xl bg-white p-8 md:p-12 text-center shadow-xl ring-1 ring-gray-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="mb-4 font-playfair text-3xl font-bold text-accent-dark">You Are Not Alone</h2>
                                <p className="mb-8 font-inter text-lg text-text-primary max-w-2xl mx-auto">
                                    Join my free webinar: <strong>Midlife Isn’t the End — Own Your Life</strong>.
                                    Explore chronic over-giving, toxic relationship cycles, reclaiming your passion, and living a life led by YOU.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="rounded-full bg-accent-dark px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-accent-dark/90 transition-all">
                                        Register for Webinar
                                    </button>
                                    <Link href="/" className="rounded-full border-2 border-accent-dark px-8 py-4 text-base font-bold text-accent-dark hover:bg-gray-50 transition-all">
                                        Back to Home
                                    </Link>
                                </div>
                                <p className="mt-8 text-sm text-text-secondary font-inter">
                                    Hosted by Celeste Angelic London — Gen X Women’s Self-Restorative Guide
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </main>
    );
}
