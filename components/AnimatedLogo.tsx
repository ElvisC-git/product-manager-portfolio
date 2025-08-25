import React from 'react';

export const AnimatedLogo = () => {
  return (
    <div className="relative h-96 w-96 sm:h-96 sm:w-96 md:h-[28rem] md:w-[28rem] lg:h-[32rem] flex items-center justify-center animate-fade-in-delayed scale-[1.4]">
      <img src="/product-manager-portfolio/wai_gif.gif" 
        alt="Wai´s animated GIF" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};
