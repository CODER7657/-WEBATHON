import React, { useRef, useLayoutEffect } from 'react';
import { eras } from '../data/timelineData';
import EraSection from './EraSection';
import Background from './Background';
import MiniMap from './MiniMap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Timeline: React.FC = () => {
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const mainContainerRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (!mainContainerRef.current || !timelineRef.current) return;

        const sections = gsap.utils.toArray('.era-section');

        let ctx = gsap.context(() => {
            let scrollTween = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: mainContainerRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => `+=${timelineRef.current?.offsetWidth || window.innerWidth}`,
                },
            });

            sections.forEach((section, index) => {
                const cards = (section as Element).querySelectorAll('.event-card');
                gsap.from(cards, {
                    y: 150,
                    opacity: 0,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section as gsap.DOMTarget,
                        containerAnimation: scrollTween,
                        start: 'left center',
                        toggleActions: 'play none none reverse'
                    },
                });

                const era = eras[index];
                const pipId = `#minimap-${era.name.replace(/\s+/g, '-')}`;

                ScrollTrigger.create({
                    trigger: section as gsap.DOMTarget,
                    containerAnimation: scrollTween,
                    start: 'left center',
                    end: 'right center',
                    toggleClass: {
                        targets: pipId,
                        className: "active"
                    },
                });
            });

            gsap.to('#stars', {
                backgroundPosition: '-2000px -1000px',
                ease: 'none',
                scrollTrigger: {
                    trigger: mainContainerRef.current,
                    scrub: 2,
                    containerAnimation: scrollTween,
                },
            });
            gsap.to('#grid', {
                x: '-10%',
                scale: 1.2,
                opacity: 0.8,
                ease: 'none',
                scrollTrigger: {
                    trigger: mainContainerRef.current,
                    scrub: 1.5,
                    containerAnimation: scrollTween,
                },
            });
        }, mainContainerRef);

        return () => ctx.revert();

    }, []);

    return (
        <div ref={mainContainerRef} className="overflow-hidden">
            <Background />
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                <h1 className="text-4xl font-bold text-white animate-glow tracking-widest uppercase">CHRONOS</h1>
            </div>

            <div ref={timelineRef} className="flex w-max min-h-screen relative pr-[50vw]">
                {eras.map((era, index) => (
                    <EraSection key={index} era={era} />
                ))}
            </div>

            <MiniMap eras={eras} />

            <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 text-center text-neon-cyan/50 text-sm pointer-events-none">
                <p>Scroll to navigate through time</p>
            </div>
        </div>
    );
};

export default Timeline;
