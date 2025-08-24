import React from 'react';

export const AnimatedLogo = () => {
  return (
    <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem]">
      <img 
        src="/assets/logo.png" 
        alt="Wai Cheung Logo" 
        className="h-full w-full object-contain"
      />
    </div>
  );
};
