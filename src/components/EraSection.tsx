import React, { useState } from 'react'; // Import useState
import EventCard from './EventCard';
import type { EraType } from '../data/timelineData';

interface EraSectionProps {
  era: EraType;
}

const EraSection = React.forwardRef<HTMLElement, EraSectionProps>(({ era }, ref) => {
  const IconComponent = era.icon;
  // Keep track of which card is expanded. null means none are.
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  const handleCardToggle = (index: number) => {
    // If the clicked card is already open, close it. Otherwise, open it.
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="era-section flex items-center p-8 md:p-16 min-h-screen">
      <div className="era-title-container w-64 flex-shrink-0 mr-8 md:mr-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-2" style={{ color: era.color }}>{era.name}</h2>
        <p className="text-lg md:text-xl text-light-gray/70 mb-4">{era.range}</p>
        <IconComponent className="text-6xl md:text-8xl mx-auto opacity-30" style={{ color: era.color }} />
      </div>
      <div className="events-container flex items-center">
        {era.events.map((event, index) => (
          <EventCard
            key={index}
            event={event}
            isExpanded={expandedCardIndex === index} // Pass down whether this card should be expanded
            onToggle={() => handleCardToggle(index)} // Pass down the handler function
          />
        ))}
      </div>
    </section>
  );
});

export default EraSection;
