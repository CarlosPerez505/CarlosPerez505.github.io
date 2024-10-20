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
            { y: 50, opacity: 0 },
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

        // Glimmering Border Animation
        gsap.to('.glimmer-border', {
            backgroundPosition: '200% center',
            duration: 3,
            repeat: -1,
            ease: 'linear',
        });
    }, []);

    return (
        <div className="hero-section relative w-full px-4 pt-20 lg:px-8 text-white overflow-hidden">
            {/* Main Content */}
            <div className="relative mx-auto max-w-7xl py-32 sm:py-48 lg:py-56 text-center">
                <h1 className="hero-text text-5xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-500 to-purple-400 glimmer-border">
                    Hello, I'm Carlos, a <br />
                    FullStack Web Developer!
                </h1>
                <p className="hero-text mt-6 text-lg leading-8 text-gray-100 sm:text-xl">
                    Let me help make your vision of a website come to life, scroll down to learn more.
                </p>
            </div>
        </div>
    );
};

export default Hero;
