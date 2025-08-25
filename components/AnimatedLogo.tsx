import React from 'react';

export const AnimatedLogo = () => {
  return (
    <div className="relative md:h-[70rem] md:w-[70rem] lg:h-[50rem] flex items-center justify-center animate-fade-in-delayed">
      <img src="/product-manager-portfolio/wai_gif.gif" 
        alt="Wai´s animated GIF" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};
