import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
    useEffect(() => {
        // Text Animation
        gsap.fromTo(
            '.hero-text',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top center',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Background Animation
        gsap.to('.background-gradient', {
            scale: 1.05,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });
    }, []);

    return (
        <div className="hero-section relative w-full px-6 pt-14 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white overflow-hidden">
            {/* Animated Background */}
            <div
                className="background-gradient absolute inset-0 -z-10 transform scale-100 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                style={{ clipPath: 'polygon(74% 44%, 100% 62%, 97% 27%, 85% 0%, 72% 32%, 60% 62%, 52% 68%, 45% 34%, 27% 76%, 0% 64%, 18% 100%, 28% 77%, 76% 98%, 74% 44%)' }}
            />

            {/* Main Content */}
            <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 text-center">
                <h1 className="hero-text text-5xl font-bold tracking-tight text-white sm:text-7xl">
                    Hello, I'm Carlos, a Full Stack Web Developer!
                </h1>
                <p className="hero-text mt-6 text-lg leading-8 text-gray-100">
                    Let me help make your vision of a website come to life.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="hero-text rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                    >
                        Get Started
                    </a>
                    <a
                        href="#"
                        className="hero-text text-sm font-semibold leading-6 text-white hover:underline"
                    >
                        Learn More <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;