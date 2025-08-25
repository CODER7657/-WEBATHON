import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import type { EventType } from '../data/timelineData';

interface EventCardProps {
  event: EventType;
  isExpanded: boolean; // <-- Receives its state as a prop
  onToggle: () => void; // <-- Receives a function to call on click
}

const EventCard: React.FC<EventCardProps> = ({ event, isExpanded, onToggle }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Set up the GSAP timeline when the component mounts
    if (!cardRef.current) return;
    const q = gsap.utils.selector(cardRef.current);
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(cardRef.current, {
        width: '22rem',
        height: '25rem',
        duration: 0.6,
        ease: 'elastic.out(1, 0.75)'
      })
      .to(q('.short-desc'), { opacity: 0, duration: 0.2 }, "-=0.6")
      .fromTo(detailsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, display: 'block' }
      );
  }, []);

  useEffect(() => {
    // Play or reverse the timeline based on the isExpanded prop
    if (tl.current) {
      if (isExpanded) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isExpanded]);

  return (
    <div
      ref={cardRef}
      onClick={onToggle} // <-- Use the passed-in toggle function
      className="event-card relative w-64 h-80 m-4 cursor-pointer p-6 rounded-2xl border border-neon-cyan/30 bg-deep-purple/60 backdrop-blur-md shadow-lg shadow-neon-cyan/10 flex flex-col justify-between overflow-hidden transition-shadow duration-300 hover:shadow-neon-cyan/30"
      style={{ willChange: 'transform, opacity, width, height' }}
    >
      <div>
        <div className="text-4xl mb-4">{event.icon}</div>
        <h3 className="text-xl font-bold text-neon-cyan">{event.title}</h3>
        <p className="text-lg text-light-gray/80">{event.date}</p>
      </div>
      
      <div className="short-desc">
        <p className="text-light-gray/90">{event.shortDescription}</p>
      </div>
      
      <div ref={detailsRef} className="hidden opacity-0">
        <p className="text-light-gray">{event.fullDescription}</p>
      </div>
    </div>
  );
};

export default EventCard;
