import React from 'react';

export const AnimatedLogo = () => {
  return (
    <div className="relative h-96 w-96 sm:h-80 sm:w-80 md:h-[28rem] md:w-[28rem] lg:h-[32rem] flex items-center justify-center animate-fade-in-delayed">
      <img src="/product-manager-portfolio/wai_gif.png" 
        alt="Wai´s animated GIF" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};
