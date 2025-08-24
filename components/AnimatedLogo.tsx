import React from 'react';

export const AnimatedLogo = () => {
  return (
    <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-[28rem] md:w-[28rem] lg:h-[32rem] flex items-center justify-center animate-fade-in-delayed">
      <img 
        src="./assets/logo.gif" 
        alt="Personal animated logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};