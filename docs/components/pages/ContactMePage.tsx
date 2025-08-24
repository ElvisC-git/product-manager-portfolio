
import React from 'react';
import { LinkedInIcon } from '../icons/LinkedInIcon';
import { InstagramIcon } from '../icons/InstagramIcon';

const ContactMePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-6rem)] py-16">
      <p className="max-w-2xl text-3xl font-semibold text-[#0B172A] leading-relaxed tracking-tight sm:text-4xl animate-fade-in">
        Say hi — I’d love to hear from you! Whether it’s about work, ideas, or just grabbing a coffee, let’s connect.
      </p>
      <div className="mt-10 animate-fade-in-delayed">
        <a 
          href="mailto:wai.cheung.elvis@gmail.com"
          className="text-xl font-normal text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
        >
          wai.cheung.elvis@gmail.com
        </a>
      </div>
      <div className="mt-8 flex items-center justify-center gap-x-6 animate-fade-in-delayed">
        <a 
          href="https://www.linkedin.com/in/wai-cheung-pm" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#0B172A]/70 hover:text-[#0B172A] transition-colors duration-300"
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedInIcon />
        </a>
        <a href="#" className="text-[#0B172A]/70 hover:text-[#0B172A] transition-colors duration-300">
          <span className="sr-only">Instagram</span>
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default ContactMePage;