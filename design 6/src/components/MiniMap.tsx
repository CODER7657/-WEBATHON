import React from 'react';
import type { EraType } from '../data/timelineData';

interface MiniMapProps {
  eras: EraType[];
}

const MiniMap: React.FC<MiniMapProps> = ({ eras }) => {
  // Helper to create a unique, CSS-friendly ID from the era name
  const generateId = (name: string) => `minimap-${name.replace(/\s+/g, '-')}`;

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center p-4 z-50 pointer-events-none">
      <div className="flex items-center gap-3 p-2 rounded-xl bg-deep-purple/60 backdrop-blur-md border border-neon-cyan/20 shadow-lg">
        {eras.map((era) => (
          <div
            key={era.name}
            id={generateId(era.name)}
            className="minimap-pip w-16 h-8 rounded-lg border-2 border-transparent transition-all duration-300 ease-in-out flex items-center justify-center"
            style={{ backgroundColor: `${era.color}40` }} // Add transparency to the base color
          >
            <span className="text-xs font-bold text-white/80 opacity-0 transition-opacity duration-300">
              {era.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniMap;