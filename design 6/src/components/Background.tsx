import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-space-dark">
      <div 
        id="stars" 
        className="absolute top-0 left-0 w-[200%] h-[200%] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:50px_50px]"
      ></div>
      <div 
        id="grid" 
        className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(0,246,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,246,255,0.15)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50"
      ></div>
    </div>
  );
};

export default Background;